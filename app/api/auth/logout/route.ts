import { NextResponse } from "next/server"; import { appUrl } from "@/lib/env"; import { SESSION_COOKIE } from "@/lib/session";
export async function POST(){const r=NextResponse.redirect(appUrl(),303);r.cookies.delete(SESSION_COOKIE);return r;}
