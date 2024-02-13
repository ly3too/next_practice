"use client"

import Link from "next/link"
import { Icons } from "./icons"
import { SiteConfig } from "@/config/site-config"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BsSearch, BsGithub , BsTwitterX, BsSun, BsMoonStars, BsCloudSun} from "react-icons/bs";
import { useTheme } from "next-themes"
import {useState, useEffect} from "react"

export function SiteHeader() {
  // icon + home, nav docs, theme, search, github, x, modeswitch 
  return <div className="w-full bg-base-100">
    <div className="px-4 md:px-8 w-auto container flex items-center h-12 max-w-screen-2xl border-b">
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
  <button className="flex flex-1 h-8 justify-start md:flex-none text-sm items-center md:w-72 text-base-content/60 border rounded-[0.5rem] hover:bg-base-200">
    <BsSearch className="mx-2"/>
    <span className="hidden md:inline-flex"> Search Documentations... </span>
    <span className="inline-flex md:hidden"> Search... </span>
    <div className="flex-grow"></div>
    <kbd className="border rounded justify-self-end w-auto font-mono text-[10pt] bg-base-200 gap-1 px-1.5 mx-1.5">
        <span>⌘</span> k
    </kbd>
  </button>
  </>
}

function Links() {
  return <div className="flex gap-4 mx-4">
    <BsGithub/>
    <BsTwitterX/>
  </div>
}

function Modeswitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <div className="flex mr-2">
    { theme == "light" && <BsSun onClick={() => {setTheme("cupcake")}}/>}
    { theme == "cupcake" &&  <BsCloudSun onClick={() => setTheme("dark")}/>}
    { theme == "dark" &&  <BsMoonStars onClick={() => setTheme("light")}/>}
  </div>
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