import { cookies } from "next/headers"; import { jwtVerify, SignJWT } from "jose"; import { requireEnv } from "@/lib/env"; import type { SessionPayload } from "@/types";
export const SESSION_COOKIE="growleague_session";
const key=()=>new TextEncoder().encode(requireEnv("SESSION_SECRET"));
export async function createSessionToken(payload:SessionPayload){return new SignJWT(payload).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("30d").sign(key());}
export async function readSessionToken(token:string):Promise<SessionPayload|null>{try{const result=await jwtVerify(token,key());return result.payload as unknown as SessionPayload;}catch{return null;}}
export async function getSession(){const store=await cookies();const token=store.get(SESSION_COOKIE)?.value;return token?readSessionToken(token):null;}
