import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export const CardsStat = function() {
    return <div className="grid gap-4 sm:grid-cols-2">
        <Card>
            <CardHeader>
                <h3 className="font-normal text-sm"> Total Revenue </h3>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold"> $15,231.89 </div>
                <p className="text-xs text-base-content/50"> +20.1% from last month </p>

            </CardContent>

        </Card>
        <Card>

        </Card>
    </div>
}