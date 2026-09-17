import { getDb } from "@/db"; import { snapshots } from "@/db/schema";
export function utcDay(date=new Date()){return new Date(Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate()));}
export async function saveDailySnapshot(input:{creatorId:string;followers:number;date?:Date}){const db=getDb();const snapshotDate=utcDay(input.date);await db.insert(snapshots).values({creatorId:input.creatorId,followers:input.followers,snapshotDate}).onConflictDoUpdate({target:[snapshots.creatorId,snapshots.snapshotDate],set:{followers:input.followers}});}
