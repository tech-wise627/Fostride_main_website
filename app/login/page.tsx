
'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
                <Loader2 className="h-8 w-8 animate-spin text-green-500" />
            </div>
        }>
            <LoginContent />
        </Suspense>
    )
}

function LoginContent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const supabase = createClient()

    const searchParams = useSearchParams()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (error) throw error

            const from = searchParams.get('from')
            router.push(from ? from : '/dashboard')
            router.refresh()
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const handleGoogleLogin = async () => {
        setLoading(true)
        setError(null)
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                },
            })
            if (error) throw error
        } catch (err: any) {
            setError(err.message)
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative">
            {/* Geometric Background Pattern - Exact 9x3 Grid */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern
                            id="pill-pattern-dark-auth"
                            x="0"
                            y="0"
                            width="0.111111111"
                            height="0.333333333"
                            patternUnits="objectBoundingBox"
                            viewBox="0 0 80 140"
                            preserveAspectRatio="none"
                        >
                            <path d="M 36 5 L 36 85 Q 36 135 4 135 L 4 45 A 35 35 0 0 1 36 5 Z" fill="#1a1a1a" />
                            <path d="M 44 5 A 35 35 0 0 1 76 45 L 76 135 Q 44 135 44 85 L 44 5 Z" fill="#1a1a1a" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#pill-pattern-dark-auth)" />
                </svg>
            </div>

            <Card className="w-full max-w-md bg-[#111111] border-zinc-800 text-white z-10 shadow-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
                    <CardDescription className="text-center text-zinc-400">
                        Enter your credentials to access your R3Bin analytics
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-green-600 focus:border-green-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-green-600 focus:border-green-600"
                            />
                        </div>
                        {error && (
                            <div className="text-red-500 text-sm text-center bg-red-950/20 p-2 rounded border border-red-900/50">{error}</div>
                        )}
                        <Button
                            type="submit"
                            className="w-full bg-green-700 hover:bg-green-600 text-white transition-colors"
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Sign In'}
                        </Button>
                    </form>

                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-zinc-800" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#111111] px-2 text-zinc-500">Or continue with</span>
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800 hover:text-white"
                        disabled={loading}
                    >
                        {loading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                            </svg>
                        )}
                        Login with Google
                    </Button>
                </CardContent>
                <CardFooter className="flex justify-center flex-col gap-2">
                    <p className="text-sm text-zinc-400">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-green-500 hover:text-green-400 hover:underline font-medium">
                            Sign Up
                        </Link>
                    </p>
                    <p className="text-xs text-zinc-500 mt-4">
                        <Link href="/" className="hover:text-zinc-300 transition-colors">
                            ← Back to Home
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div >
    )
}
