"use client"

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { BsSearch, BsChevronDown} from "react-icons/bs";
import { Command } from "cmdk";

type TeamMemberData = {
    avator: string
    name: string
    email?: string
    role?: "Owner" | "Member"
    tabIndex: number
}

const OneTeamMember = function(data: TeamMemberData) {
    return <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
            <div className="avatar">
                <div className="w-8 h-8 rounded-full m-1">
                    <img src={data.avator} />
                </div>
            </div>
            <div>
                <p className=" text-sm font-medium"> {data.name} </p>
                <p className=" text-sm text-base-content/50"> {data.email || ""} </p>
            </div>
        </div>
        <div className="dropdown dropdown-end">
            <div tabIndex={data.tabIndex} role="button" className="btn m-1 btn-sm h-10 rounded-md px-3 bg-transparent text-sm font-medium"> 
                <span> {data.role || "Select role"} </span>
                <BsChevronDown className="ml-1"/>
            </div>
            <Command tabIndex={data.tabIndex} className="dropdown-content z-[1] menu p-0 shadow bg-base-100 border rounded-md flex flex-col w-72">
                <div className="flex flex-row items-center border-b px-2">
                    <BsSearch className="w-4 h-4 ml-1"/>
                    <Command.Input className=" ml-3 py-3 outline-none w-full text-sm placeholder:text-base-content/50 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Select new role..."/>
                </div>

                <Command.List>
                    <Command.Empty> No roles found. </Command.Empty>
                    <Command.Item className="flex flex-col px-4 py-2 items-start cursor-default select-none aria-selected:bg-base-200">
                        <p> Viewer </p>
                        <p className=" text-sm text-base-content/50"> Can view and comment. </p>
                    </Command.Item>
                    <Command.Item className="flex flex-col px-4 py-2 items-start aria-selected:bg-base-200">
                        <p> Developer </p>
                        <p className=" text-sm text-base-content/50"> Can view, comment and edit. </p>
                    </Command.Item>
                    <Command.Item className="flex flex-col px-4 py-2 items-start aria-selected:bg-base-200">
                        <p> Billing </p>
                        <p className=" text-sm text-base-content/50"> Can view, comment and manage billing. </p>
                    </Command.Item>
                    <Command.Item className="flex flex-col px-4 py-2 items-start aria-selected:bg-base-200">
                        <p> Owner </p>
                        <p className=" text-sm text-base-content/50"> Admin-level access to all resources. </p>
                    </Command.Item>
                </Command.List>
            </Command>
        </div>
    </div>
}

export const CardTeamMember = function() {
    return (
    <Card>
        <CardHeader className="flex-wrap">
            <h3 className="w-full text-2xl font-semibold"> Team Members </h3>
            <p className="w-full text-sm text-base-content/50 pt-1"> Invite your team members to collaborate. </p>
        </CardHeader>
        <CardContent className="grid gap-6">
            <OneTeamMember avator="/avatars/01.png" name="Sofia Davis" email="m@example.com" role="Owner" tabIndex={0}/> 
            <OneTeamMember avator="/avatars/02.png" name="Jackson Lee" email="p@example.com" role="Member" tabIndex={1}/>
            <OneTeamMember avator="/avatars/03.png" name="Isabella Nguyen" email="i@example.com" role="Member" tabIndex={2}/>
        </CardContent>
    </Card>
    )
}