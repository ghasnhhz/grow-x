import { getDemoCreator, getDemoLeaderboard } from "@/lib/demo-data";
import type { LeaderboardPeriod, LeaderboardSort, LeagueSlug } from "@/types";
export async function getLeaderboardData(o:{days:LeaderboardPeriod;league?:LeagueSlug;sort:LeaderboardSort}){return getDemoLeaderboard(o);}
export async function getCreatorProfileData(username:string){return getDemoCreator(username);}
