import { notFound } from "next/navigation"; import { CreatorProfileView } from "@/components/creator/creator-profile"; import { getCreatorProfileData } from "@/lib/data";
export const dynamic="force-dynamic";
export default async function CreatorPage({params}:{params:Promise<{username:string}>}){const{username}=await params;const creator=await getCreatorProfileData(username);if(!creator){notFound();return null;}return <section className="page-section wide"><CreatorProfileView creator={creator}/></section>}
