// import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("Requested Url: ", request.url);

  //   return NextResponse.redirect(new URL("/", request.url));       // Redirect가 필요하면 리다이렉트 함수로 리턴시키면 된다.
}

export const config = {
  matcher: "/:path*",
};
