import type { Plan } from "@/types";
export const PLANS: Record<Exclude<Plan,"trial">,{name:string;price:number;description:string;features:string[]}> = {
  member:{name:"Member",price:3,description:"Join the league and track your growth.",features:["Daily follower snapshot","Public league ranking","7-day growth","Creator profile"]},
  pro:{name:"Pro",price:10,description:"Turn your growth into promotion.",features:["Everything in Member","Add product URL","30-day growth history","Shareable rank cards","Pro badge"]},
  max:{name:"Max",price:19,description:"For creators taking X growth seriously.",features:["Everything in Pro","90-day history","Track 3 competitors","Multiple products","Weekly growth report"]}
};
