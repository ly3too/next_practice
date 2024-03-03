import React from "react";
import { cn } from "@/lib/utils";
import Announcement from "./announcement"

interface PageHeaderProps extends  React.ComponentProps<"div"> {
    announcement?: string
    announcementUrl?: string
    header: string
    desc: string
}

export default function PageHeader({className, children, announcement, announcementUrl, header, desc}: PageHeaderProps) {
    return <div className="container">
        <section className={cn("flex items-center text-center py-24 flex-col mx-auto gap-2 max-w-[980px]", className)}>
            <Announcement text={announcement || "New components, cli updates and more."} url={announcementUrl}/>
            <h1 className=" font-bold text-3xl md:text-6xl">{header}</h1>
            <p className=" text-lg md:text-xl text-base-content/70">{desc}</p>
            {children}
        </section>
    </div>
}