"use client"

import Link from "next/link"
import { Icons } from "./icons"
import { SiteConfig } from "@/config/site-config"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  // icon + home, nav docs, theme, search, github, x, modeswitch 
  return <div className="w-full bg-base-100">
    <div className="mx-2 w-auto container flex items-center h-12 max-w-screen-2xl border-b">
      <Nav />
      <div className="flex flex-1 items-center justify-center md:justify-end">
        <SearchBar />
        <Links />
        <Modeswitch />
      </div>
    </div>
  </div>
}

function Nav() {
  return <>
    <MainNav />
    <MobileNav />
  </>
}

function SearchBar() {
  return <>
  <button className="flex flex-1 justify-start md:flex-none text-sm md:w-64 text-base-content/60 border rounded-[0.5rem] hover:bg-base-200">
    <span className="mx-2 hidden md:inline-flex"> Search Documentations... </span>
    <span className="mx-2 inline-flex md:hidden"> Search... </span>
    <div className="flex-grow"></div>
    <kbd className="border rounded-[0.5rem] justify-self-end w-auto font-mono text-[10pt] bg-base-200 px-1">
        <span className="text-xs">⌘</span> k
    </kbd>
  </button>
  </>
}

function Links() {
  return <></>
}

function Modeswitch() {
  return <></>
}

function MainNav() {
  const pathName = usePathname()

  return <div className="hidden md:flex mr-4">
    <Link href="/" className="flex items-center ml-2 space-x-2 mr-6">
      <Icons.home className="w-6 h-6 "/>
      <span className="ml-1 font-bold"> {SiteConfig.name} </span>
    </Link>

    <nav className="flex items-center text-sm gap-6">
      <Link href="/docs" className={cn("hover:text-base-content", pathName?.startsWith("/docs")? "text-base-content" :"text-base-content/50")}>
        Docs
      </Link>

      <Link href="/themes" className={cn("hover:text-base-content", pathName?.startsWith("/themes")? "text-base-content" :"text-base-content/50")}>
        Themes
      </Link>
    </nav>
  </div>
}

function MobileNav() {
  return <></>
}