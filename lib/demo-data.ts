import type { CreatorProfile, LeaderboardPeriod, LeaderboardRow, LeaderboardSort, LeagueSlug } from "@/types";

const rows: LeaderboardRow[] = [
  {id:"mia",username:"buildwithmia",displayName:"Mia Carter",avatarUrl:null,currentFollowers:482,gain:128,growthPercent:36.2,league:"101-500",plan:"pro",productName:"ShipFast",productUrl:"https://shipfast.so"},
  {id:"noah",username:"noahbuilds",displayName:"Noah Kim",avatarUrl:null,currentFollowers:411,gain:97,growthPercent:30.9,league:"101-500",plan:"pro",productName:"LaunchKit",productUrl:"https://example.com"},
  {id:"sam",username:"samships",displayName:"Sam Reed",avatarUrl:null,currentFollowers:390,gain:85,growthPercent:27.9,league:"101-500",plan:"pro",productName:"FeedbackLoop",productUrl:"https://example.com"},
  {id:"lina",username:"linabuilds",displayName:"Lina Park",avatarUrl:null,currentFollowers:356,gain:72,growthPercent:25.4,league:"101-500",plan:"pro",productName:"BuildLens",productUrl:"https://example.com"},
  {id:"aiden",username:"aidenmakes",displayName:"Aiden Cole",avatarUrl:null,currentFollowers:320,gain:56,growthPercent:21.2,league:"101-500",plan:"member",productName:null,productUrl:null},
  {id:"zara",username:"zarahacks",displayName:"Zara Ali",avatarUrl:null,currentFollowers:298,gain:52,growthPercent:21.1,league:"101-500",plan:"member",productName:null,productUrl:null},
  {id:"evan",username:"brooksbuilds",displayName:"Evan Brooks",avatarUrl:null,currentFollowers:274,gain:41,growthPercent:17.6,league:"101-500",plan:"member",productName:null,productUrl:null},
  {id:"tori",username:"toricodes",displayName:"Tori Lane",avatarUrl:null,currentFollowers:261,gain:38,growthPercent:17,league:"101-500",plan:"member",productName:null,productUrl:null},
  {id:"jay",username:"jaybuilds",displayName:"Jay Miles",avatarUrl:null,currentFollowers:95,gain:21,growthPercent:28.4,league:"10-100",plan:"pro",productName:"TinyCRM",productUrl:"https://example.com"},
  {id:"leo",username:"leomakes",displayName:"Leo Grant",avatarUrl:null,currentFollowers:864,gain:101,growthPercent:13.2,league:"501-1k",plan:"max",productName:"LaunchBase",productUrl:"https://example.com"},
  {id:"nora",username:"noraships",displayName:"Nora Vale",avatarUrl:null,currentFollowers:1740,gain:122,growthPercent:7.5,league:"1k-5k",plan:"max",productName:"MakerMail",productUrl:"https://example.com"}
];
const miaHistory = [
  {date:"Sep 08",followers:354,change:0},{date:"Sep 09",followers:361,change:7},{date:"Sep 10",followers:373,change:12},
  {date:"Sep 11",followers:391,change:18},{date:"Sep 12",followers:413,change:22},{date:"Sep 13",followers:441,change:28},{date:"Sep 14",followers:482,change:41}
];
export function getDemoLeaderboard(o:{days:LeaderboardPeriod;league?:LeagueSlug;sort:LeaderboardSort}) {
  const factor=o.days===1?.17:o.days===30?2.4:1;
  return rows.filter(r=>!o.league||r.league===o.league).map(r=>{const gain=Math.round(r.gain*factor);const base=Math.max(1,r.currentFollowers-gain);return {...r,gain,growthPercent:Number(((gain/base)*100).toFixed(1))};}).sort((a,b)=>o.sort==="growth"?b.growthPercent-a.growthPercent:o.sort==="followers"?b.currentFollowers-a.currentFollowers:b.gain-a.gain);
}
export function getDemoCreator(username:string):CreatorProfile|null {
  const row=rows.find(r=>r.username===username.replace(/^@/,"")); if(!row)return null;
  const rank=getDemoLeaderboard({days:7,league:row.league,sort:"gain"}).findIndex(x=>x.username===row.username)+1;return {...row,rank:rank||null,bio:row.username==="buildwithmia"?"Building in public. Sharing what I learn about product, growth and indie hacking.":"Building products in public and sharing the journey.",location:row.username==="buildwithmia"?"San Francisco, CA":null,productDescription:row.productName?"Boilerplates and launch tools for indie hackers.":null,history:row.username==="buildwithmia"?miaHistory:[{date:"Today",followers:row.currentFollowers,change:row.gain}]};
}
