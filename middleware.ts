import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import { redirect } from "next/dist/server/api-utils";

export default withAuth(
  function middleware(request: any) {
    console.log("middleware berjalan");
    console.log("url", request.nextUrl.pathname);
    console.log("role", request?.nextauth?.token?.role);
    console.log("nama", request?.nextauth?.token?.name);

    var url = request.nextUrl.pathname;
    var role = request?.nextauth?.token?.role;

    if (url.startsWith("/admin") === true) {
      if (role !== "admin") {
        return NextResponse.redirect(new URL("/siswa", request.url));
      } else {
        return NextResponse.next();
      }
    }

    if (url.startsWith("/siswa") === true) {
      if (role !== "siswa") {
        return NextResponse.redirect(new URL("/admin", request.url));
      } else {
        return NextResponse.next();
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (token) return true;
        return false;
      },
    },
    pages: {
      signIn: "/auth/login",
      error: "/api/auth/error",
    },
  }
);

export const config = {
  matcher: ["/admin", "/admin/:path*", "/siswa", "/siswa/:path*"],
};
