"use client"

import { Fragment } from "react"
import { useTranslations } from "next-intl"

import SearchBar from "@/components/search-bar"
import NavLinkList from "@/components/nav-link-list"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useSidebarStore } from "@/lib/store/sidebar-store"
import { cn } from "@/lib/utils"
import { AbstractLogo } from "./icons/abstract-logo"
import { Logo } from "./icons/logo"
import Link from "next/link"

export function Sidebar() {
  const t = useTranslations("common")
  const { sidebarSheetOpen } = useSidebarStore()

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 bottom-0 border-r lg:border-0 overflow-hidden px-4 py-5 gap-y-4 z-50 flex flex-col bg-background transition-all",
        sidebarSheetOpen ? "w-[4.5rem] lg:border-r" : "lg:w-[240px] w-[72px]"
      )}
    >
      <Link href={"/"} className="pl-2 h-9 w-full shrink-0 mb-1.5">
        {sidebarSheetOpen ? (
          <AbstractLogo className="h-full w-fit" />
        ) : (
          <Logo className="h-full w-fit" />
        )}
      </Link>
      <SearchBar />
      <ScrollArea>
        <div className="flex flex-col gap-y-4 w-full">
          <NavLinkList />
          {!sidebarSheetOpen && (
            <Fragment>
              <Button>{t("login")}</Button>
              <Separator />
              {<p className="text-gray-400 typo-body-xs">© 2025 TrekRoll</p>}
            </Fragment>
          )}
        </div>
      </ScrollArea>
    </aside>
  )
}
