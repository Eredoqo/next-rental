import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  // Await the clerkMiddleware to ensure all async operations are completed
  await clerkMiddleware()(request);

  // Access headers directly
  const headers = request.headers;
  // Process headers as needed
  for (const [key, value] of headers.entries()) {
    console.log(`${key}: ${value}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
