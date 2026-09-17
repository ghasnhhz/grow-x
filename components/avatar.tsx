import Image from "next/image";
export function Avatar({name,src,size=44}:{name:string;src:string|null;size?:number}){const initials=name.split(" ").slice(0,2).map(p=>p[0]).join("").toUpperCase();return src?<Image className="avatar" src={src} width={size} height={size} alt={name}/>:<span className="avatar avatar-fallback" style={{width:size,height:size}} aria-label={name}>{initials}</span>;}
