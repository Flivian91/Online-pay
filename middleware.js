import { NextResponse } from "next/server";
import { Client, Account } from "appwrite";
import { account } from "@/lib/appwriteClient";

export async function middleware(req) {
  const res = NextResponse.next();


  // Get the session token from the cookies (replace 'session' with your actual cookie name if different)
  const sessionCookie = req.cookies.get('session'); // This may vary depending on how Appwrite stores sessions

  // Check if session exists
  if (!sessionCookie) {
    // If no session and trying to access protected routes, redirect to login
    const protectedRoutes = ["/dashboard"]; // Add all protected routes here
    if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  try {
    // Try to get the user info to validate if the session is active
    await account.get(); // This will throw an error if the session is invalid

    // Session is valid, continue to the next step
    return res;
  } catch (error) {
    // If session is invalid, redirect to login page
    const protectedRoutes = ["/dashboard"]; // Add all protected routes here
    if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ["/dashboard/:path*"], // Adjust matcher for the routes you want to protect
};
