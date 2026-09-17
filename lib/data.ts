import { getCreatorProfileFromDb } from "@/db/queries/creators";
import { getLeaderboardFromDb } from "@/db/queries/leaderboard";
import { getDemoCreator, getDemoLeaderboard } from "@/lib/demo-data";
import type { LeaderboardPeriod, LeaderboardSort, LeagueSlug } from "@/types";
export async function getLeaderboardData(o:{days:LeaderboardPeriod;league?:LeagueSlug;sort:LeaderboardSort}){return process.env.DATABASE_URL?getLeaderboardFromDb(o):getDemoLeaderboard(o);}
export async function getCreatorProfileData(username:string){
  if(!process.env.DATABASE_URL) return getDemoCreator(username);
  const profile=await getCreatorProfileFromDb(username);
  if(!profile) return null;
  const league=await getLeaderboardFromDb({days:7,league:profile.league,sort:"gain"});
  const index=league.findIndex(x=>x.username===profile.username);
  return {...profile,rank:index>=0?index+1:null};
}
