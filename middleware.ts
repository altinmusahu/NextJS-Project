import { NextRequest, NextResponse } from "next/server"
import { verifyToken, cookieName } from "@/lib/auth"

const PUBLIC_API_PATHS = [
  "/api/auth/login",
  "/api/auth/signup",
  "/api/tenants",
  "/api/tenant_subscriptions",
  "/api/checkout",
  "/api/webhooks/stripe",
]

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = req.cookies.get(cookieName())?.value

  // Protect /dashboard routes — redirect to /login if not authenticated
  if (pathname.startsWith("/dashboard")) {
    if (!token) return NextResponse.redirect(new URL("/login", req.url))
    const payload = await verifyToken(token)
    if (!payload) return NextResponse.redirect(new URL("/login", req.url))
    return NextResponse.next()
  }

  // Already logged in — bounce away from /login instead of showing the form again.
  if (pathname === "/login") {
    if (token && (await verifyToken(token))) {
      return NextResponse.redirect(new URL("/", req.url))
    }
    // Also opt this page out of the browser's back-forward cache, so pressing
    // Back after logging in can't silently restore the stale login page
    // without ever hitting this middleware check again.
    const res = NextResponse.next()
    res.headers.set("Cache-Control", "no-store")
    return res
  }

  // Protect API routes
  if (pathname.startsWith("/api/")) {
    if (PUBLIC_API_PATHS.some((p) => pathname.startsWith(p))) return NextResponse.next()
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    const payload = await verifyToken(token)
    if (!payload) return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 })
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*", "/login"],
}
