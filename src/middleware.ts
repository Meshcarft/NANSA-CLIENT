import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // TODO: Implement custom JWT check via cookies
  const authCookie = request.cookies.get("nansa-session");

  if (!authCookie) {
    // If not authenticated, and trying to access protected routes, redirect to login
    const isProtectedRoute =
      request.nextUrl.pathname.startsWith("/dashboard") ||
      request.nextUrl.pathname.startsWith("/matching") ||
      request.nextUrl.pathname.startsWith("/agent");

    if (isProtectedRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/matching/:path*", "/agent/:path*"],
};
