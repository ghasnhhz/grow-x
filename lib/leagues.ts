import type { LeagueSlug } from "@/types";
export const LEAGUES = [
  {slug:"10-100", name:"Rookie League", label:"10–100", min:10, max:100},
  {slug:"101-500", name:"Builder League", label:"101–500", min:101, max:500},
  {slug:"501-1k", name:"Momentum League", label:"501–1K", min:501, max:1000},
  {slug:"1k-5k", name:"Breakout League", label:"1K–5K", min:1001, max:5000}
] as const;
export function getLeagueForFollowerCount(followers:number): LeagueSlug|null { return LEAGUES.find(x => followers >= x.min && followers <= x.max)?.slug ?? null; }
export function getLeagueLabel(slug:LeagueSlug) { return LEAGUES.find(x => x.slug === slug)?.label ?? slug; }
