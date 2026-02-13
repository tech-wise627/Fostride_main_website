"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function AuthCallbackPage() {
    const router = useRouter()
    const [status, setStatus] = useState("Processing authentication...")

    useEffect(() => {
        const handleCallback = async () => {
            try {
                // Check if we have a hash with auth data (OAuth callback)
                const hashParams = new URLSearchParams(window.location.hash.substring(1))
                const accessToken = hashParams.get('access_token')
                const refreshToken = hashParams.get('refresh_token')

                if (accessToken) {
                    setStatus("Setting up your session...")

                    // Set the session using the tokens from the URL
                    const { data, error } = await supabase.auth.setSession({
                        access_token: accessToken,
                        refresh_token: refreshToken || '',
                    })

                    if (error) {
                        console.error("Error setting session:", error)
                        setStatus("Authentication failed. Redirecting...")
                        setTimeout(() => router.push("/login?error=session_failed"), 2000)
                        return
                    }

                    if (data.session) {
                        setStatus("Success! Redirecting to dashboard...")
                        // Clear the hash from URL
                        window.history.replaceState(null, '', window.location.pathname)
                        // Redirect to dashboard
                        setTimeout(() => router.push("/dashboard"), 1000)
                        return
                    }
                }

                // If no hash params, try to get existing session
                const { data: { session }, error } = await supabase.auth.getSession()

                if (error) {
                    console.error("Error getting session:", error)
                    setStatus("Authentication failed. Redirecting...")
                    setTimeout(() => router.push("/login?error=auth_failed"), 2000)
                    return
                }

                if (session) {
                    setStatus("Session found! Redirecting to dashboard...")
                    setTimeout(() => router.push("/dashboard"), 1000)
                } else {
                    setStatus("No session found. Redirecting to login...")
                    setTimeout(() => router.push("/login"), 2000)
                }
            } catch (err: any) {
                console.error("Exception in auth callback:", err)
                setStatus("An error occurred. Redirecting...")
                setTimeout(() => router.push("/login?error=exception"), 2000)
            }
        }

        handleCallback()
    }, [router])

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">{status}</p>
            </div>
        </div>
    )
}
