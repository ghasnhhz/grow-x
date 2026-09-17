import type { Metadata } from "next"; import { SiteFooter } from "@/components/layout/site-footer"; import { SiteHeader } from "@/components/layout/site-header"; import "./globals.css";
export const metadata:Metadata={title:{default:"GrowLeague",template:"%s · GrowLeague"},description:"Track X follower growth, compete in fair size-based leagues, and turn momentum into attention."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>}
