"use client"

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts"

const data = [
    {
        revenue: 10400,
        subscription: 240,
    },
    {
        revenue: 14405,
        subscription: 300,
    },
    {
        revenue: 9400,
        subscription: 200,
    },
    {
        revenue: 8200,
        subscription: 278,
    },
    {
        revenue: 7000,
        subscription: 189,
    },
    {
        revenue: 9600,
        subscription: 239,
    },
    {
        revenue: 11244,
        subscription: 278,
    },
    {
        revenue: 26475,
        subscription: 189,
    },
]

export const CardsStat = function() {
    return <div className="grid gap-4 sm:grid-cols-2">
        <Card>
            <CardHeader className="pb-2">
                <h3 className="font-normal text-sm text-base-content"> Total Revenue </h3>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold"> $15,231.89 </div>
                <p className="text-xs text-base-content/50"> +20.1% from last month </p>

                <div className="h-[80px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart  data={data} margin={{top: 5, left: 10, right: 10, bottom: 0}}>
                            <Line type="monotone" dataKey="revenue" stroke="oklch(var(--p))" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="pb-2">
                <h3 className="font-normal text-sm text-base-content"> Subscriptions </h3>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold"> +2350 </div>
                <p className="text-xs text-base-content/50"> +180.1% from last month </p>

                <div className="h-[80px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <Bar dataKey="subscription" style={ { fill: "oklch(var(--p))",  opacity: 1,} as React.CSSProperties}/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    </div>
}