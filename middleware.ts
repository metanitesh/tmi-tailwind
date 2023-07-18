import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  // const token: any = request.cookies.token;

  const test = undefined;
  if (token) {
    return NextResponse.redirect(new URL("/stage1", request.url));
  }
  // console.log("middleware", request.headers);

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/protected",
};
