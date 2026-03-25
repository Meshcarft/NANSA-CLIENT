import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_PATHS = ["/login", "/signup", "/terms", "/privacy"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authCookie = request.cookies.get("access_token");

  const isPublic = PUBLIC_PATHS.some((p) => pathname.startsWith(p));

  if (!authCookie && !isPublic) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect authenticated users away from auth pages
  if (authCookie && isPublic) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static / _next/image (Next.js internals)
     * - favicon.ico, public assets
     * - api routes
     */
    "/((?!_next/static|_next/image|favicon.ico|images/|api/).*)",
  ],
};
