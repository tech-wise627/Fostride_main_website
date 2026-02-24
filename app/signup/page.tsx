
'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

function SignupContent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [binId, setBinId] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const router = useRouter()
    const searchParams = useSearchParams()
    const supabase = createClient()

    useEffect(() => {
        const errorMsg = searchParams.get('error')
        if (errorMsg) {
            setError(errorMsg)
        }
    }, [searchParams])

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        setSuccess(null)

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            setLoading(false)
            return
        }

        try {
            // 1. Verify Bin ID exists
            // Note: This requires 'r3bin_registry' to be readable by anon, or use a server action/api route.
            // Trying direct query first.
            // Trying direct query first.
            const { data: bin, error: binError } = await supabase
                .from('r3bin_registry')
                .select('bin_id')
                .ilike('bin_id', binId.trim())
                .maybeSingle() // Use maybeSingle to avoid error if 0 found (returns null)

            if (binError) {
                console.error('Bin lookup error:', binError)
                throw new Error('System error verifying Bin ID. Please contact support.')
            }

            if (!bin) {
                throw new Error(`Bin ID "${binId}" not found. Please verify the ID matches your device setup.`)
            }

            // Use the actual ID from DB to ensure correct casing when saving
            const actualBinId = bin.bin_id


            const { error, data } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${window.location.origin}/auth/callback`,
                    data: {
                        full_name: name,
                        bin_id: actualBinId
                    }
                },
            })

            if (error) throw error

            if (data.user && data.user.identities && data.user.identities.length === 0) {
                setError('An account with this email already exists but is not confirmed or used with a different provider.')
            } else {
                setSuccess('Account created! Please check your email to confirm your account.')
            }

        } catch (err: any) {
            setError(err.message)
        } finally {
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
                    <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
                    <CardDescription className="text-center text-zinc-400">
                        Create an account to start tracking waste analytics
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignup} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-green-600 focus:border-green-600"
                            />
                        </div>
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
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-green-600 focus:border-green-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="binId">Bin ID (from your device)</Label>
                            <Input
                                id="binId"
                                placeholder="e.g. Bin_001"
                                value={binId}
                                onChange={(e) => setBinId(e.target.value)}
                                required
                                className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:ring-green-600 focus:border-green-600"
                            />
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm text-center bg-red-950/20 p-2 rounded border border-red-900/50">{error}</div>
                        )}
                        {success && (
                            <div className="text-green-500 text-sm text-center bg-green-950/20 p-2 rounded border border-green-900/50">{success}</div>
                        )}

                        <Button
                            type="submit"
                            className="w-full bg-green-700 hover:bg-green-600 text-white transition-colors"
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Create Account'}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center flex-col gap-2">
                    <p className="text-sm text-zinc-400">
                        Already have an account?{' '}
                        <Link href="/login" className="text-green-500 hover:text-green-400 hover:underline font-medium">
                            Sign In
                        </Link>
                    </p>
                    <p className="text-xs text-zinc-500 mt-4">
                        <Link href="/" className="hover:text-zinc-300 transition-colors">
                            ← Back to Home
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default function SignupPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">Loading...</div>}>
            <SignupContent />
        </Suspense>
    )
}
