"use client"

import Link from "next/link"
import { Icons } from "./icons"
import { SiteConfig } from "@/config/site-config"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BsSearch, BsGithub ,BsListNested, BsTwitterX, BsSun, BsMoonStars, BsCloudSun, BsX} from "react-icons/bs";
import { useTheme } from "next-themes"
import {useState, useEffect} from "react"

export function SiteHeader() {
  // icon + home, nav docs, theme, search, github, x, modeswitch 
  return <div className="w-full bg-base-100">
    <div className="px-4 md:px-8 w-full container flex items-center h-12 max-w-screen-2xl border-b">
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
  <button className="flex flex-1 h-8 justify-start md:flex-none text-sm items-center md:w-48 lg:w-72 text-base-content/60 border rounded-[0.5rem] hover:bg-base-200">
    <BsSearch className="mx-2"/>
    <span className="hidden lg:inline-flex"> Search Documentations... </span>
    <span className="inline-flex lg:hidden"> Search... </span>
    <div className="flex-grow"></div>
    <kbd className="border rounded justify-self-end w-auto font-mono text-[10pt] bg-base-200 gap-1 px-1.5 mx-1.5 hidden sm:inline-block">
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
  const { resolvedTheme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

// todo: fix this
  return <div className="flex mr-2">
    { (resolvedTheme == "light" || !resolvedTheme) && <BsSun onClick={() => {setTheme("cupcake")}}/>}
    { resolvedTheme == "cupcake" &&  <BsCloudSun onClick={() => setTheme("dark")}/>}
    { resolvedTheme == "dark" &&  <BsMoonStars onClick={() => setTheme("light")}/>}
  </div>
}

function MainNav() {
  const pathName = usePathname()

  return <div className="hidden md:flex mr-4">
    <Link href="/" className="flex items-center ml-2 space-x-2 mr-6">
      <Icons.home className="w-4 h-4 "/>
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
  const [checked, setChecked] = useState(false)

  const closeNav = () => setChecked(false)

  return <div className="inline-block md:hidden mr-2">
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={checked} readOnly/>
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="drawer-button">
          <BsListNested onClick={()=>setChecked(true)}/>
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" onClick={() => setChecked(false)}></label>
        <div className="menu p-4 w-80 min-h-full bg-base-100 text-base-content relative">
          <button className=" absolute top-4 right-4 rounded-sm focus:ring focus:ring-base-content/30 opacity-70 hover:opacity-100" onClick={()=>setChecked(false)}> <BsX className="w-5 h-5"/> </button>

          <Link href="/" onClick={()=>setChecked(false)} className="flex items-center ml-2  mt-2">
            <Icons.home className="w-4 h-4 "/>
            <span className="ml-1 font-bold"> {SiteConfig.name} </span>
          </Link>

          <ul className="menu w-full rounded-box">
            <li>
              <Link href="/docs" onClick={closeNav} className="text-base-content">
                Docs
              </Link>
            </li>

            <li>
              <Link href="/themes" onClick={closeNav} className="text-base-content">
                Themes
              </Link>
            </li>

            <li className="mt-2">
              <details open>
                <summary className="font-semibold"> Parent </summary>
                <ul>
                  <li><a className=" text-base-content/70">Submenu 1</a></li>
                  <li><a className=" text-base-content/70">Submenu 2</a></li>
                  <li>
                    <details open>
                      <summary>Parent</summary>
                      <ul>
                        <li><a className=" text-base-content/70">Submenu 1</a></li>
                        <li><a className=" text-base-content/70">Submenu 2</a></li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li className="mt-2"><a className="text-base-content/50">Item 3</a></li>
          </ul>

        </div>
      </div>
    </div>
  </div> 
}