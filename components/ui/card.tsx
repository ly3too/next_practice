import { cn } from "@/lib/utils"
import React, { HtmlHTMLAttributes } from "react"

export const Card = React.forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>>(
    ({className, ...props}, ref) => (
        <div ref={ref} 
            className={cn("rounded-lg border bg-base-100 shadow-sm card", className)} 
            {...props}
        />
    )
)

export const CardHeader = React.forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>>(({className, ...props}, ref) => (
    <div ref={ref} className={cn("flex items-center p-6", className)} {...props}/>
))

export const CardContent = React.forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>>(({className, ...props}, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props}/>
))

export const CardFooter = React.forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>>(({className, ...props}, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props}/>
))
