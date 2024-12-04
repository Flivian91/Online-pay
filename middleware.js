import { NextResponse } from "next/server";

export function middleware(request) {
  // Get the session cookie or token (replace 'a_session' with your Appwrite session cookie name if using cookies)
  const session = request.cookies.get("a_session");

  // If no session is found and user tries to access /dashboard, redirect to login
  if (!session && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow the request if authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Apply middleware to all /dashboard routes
};
