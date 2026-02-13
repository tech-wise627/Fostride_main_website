import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // Check if user has Supabase auth cookies
  // Supabase stores auth tokens in cookies with pattern: sb-<project-ref>-auth-token
  const cookies = req.cookies.getAll()
  const hasAuthCookie = cookies.some(cookie => 
    cookie.name.includes('sb-') && cookie.name.includes('-auth-token')
  )
  
  const isAuthenticated = hasAuthCookie

  // Define public routes (landing pages) that should redirect to dashboard if authenticated
  const publicRoutes = ['/', '/products', '/support', '/our-team', '/onboarding']
  const authRoutes = ['/login', '/signup']
  const currentPath = req.nextUrl.pathname

  // If user is authenticated and trying to access public/landing pages, redirect to dashboard
  if (isAuthenticated && publicRoutes.includes(currentPath)) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  // If user is authenticated and trying to access auth pages (login/signup), redirect to dashboard
  if (isAuthenticated && authRoutes.includes(currentPath)) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  // If user is not authenticated and trying to access dashboard, redirect to login
  if (!isAuthenticated && currentPath === '/dashboard') {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/products', '/support', '/our-team', '/onboarding', '/login', '/signup', '/dashboard'],
}
