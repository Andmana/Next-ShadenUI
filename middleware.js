import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "./lib/sessions";

const protectedRoutes = ["/articles"];
const publicRoutes = ["/login", "/register"];

export async function middleware(req) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const session = await verifySession();

    if (isProtectedRoute && !session?.token) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    if (isPublicRoute && session?.token) {
        return NextResponse.redirect(new URL("/articles", req.nextUrl));
    }

    return NextResponse.next();
}
