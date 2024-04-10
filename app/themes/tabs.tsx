import React from "react"
import { CardsStat } from "@/components/themes/cards/stats"

export default function ThemesTabs() {
    return <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 lg:grid-cols-10 xl:gap-6">
            <div className="space-y-4 lg:col-span-6">
                <CardsStat/>
            </div>
            <div>

            </div>
        </div>
        
    </div>
}