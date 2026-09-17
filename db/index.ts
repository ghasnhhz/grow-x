import { drizzle } from "drizzle-orm/neon-http";
import { requireEnv } from "@/lib/env";
import * as schema from "@/db/schema";
export function getDb(){ return drizzle(requireEnv("DATABASE_URL"),{schema}); }
