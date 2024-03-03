import Link from "next/link"
import { cn } from "@/lib/utils"
import { BsArrowRight } from "react-icons/bs"

type AnnouncementProps = {
    icon?: string
    text: string
    url?: string
    className?: string
}

export default function Announcement(props: AnnouncementProps) {
    return <Link href={props.url || "/"} className={cn("mx-auto inline-flex items-center text-sm rounded-lg bg-base-200 px-3 py-1", props.className)}>
        {props.icon || "🎉"}
        <div className="mx-2 border-r border-base-content/50 border-1 w-[1px] h-4"></div>
        <span>{props.text}</span>
        <BsArrowRight/>
    </Link>
}