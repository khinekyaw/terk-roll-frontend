"use client"

import { useTranslations } from "next-intl"
import { Fragment } from "react"
import Link from "next/link"

import NavLinkList from "@/components/shared/sidebar-nav-link-list"
import SearchBar from "@/components/shared/search-bar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useSidebarStore } from "@/lib/store/sidebar-store"
import { cn } from "@/lib/utils"
import { AbstractLogo } from "@/components/icons/abstract-logo"
import { Logo } from "@/components/icons/logo"
import SidebarSheet from "./sidebar-sheet"

export function Sidebar() {
  const t = useTranslations("common")
  const { sidebarSheetOpen } = useSidebarStore()

  return (
    <Fragment>
      <aside
        data-collapsed={sidebarSheetOpen}
        className={cn(
          "fixed left-0 top-0 bottom-0 border-r lg:border-0 overflow-hidden px-4 py-5 gap-y-4 flex flex-col bg-background transition-all duration-300 z-[51]",
          "lg:data-[collapsed=true]:w-sidebar-collapsed-width lg:data-[collapsed=true]:border-r lg:w-sidebar-width"
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
                {
                  <p className="text-foreground/50 typo-body-xs">
                    © 2025 TrekRoll
                  </p>
                }
              </Fragment>
            )}
          </div>
        </ScrollArea>
      </aside>

      <SidebarSheet />
    </Fragment>
  )
}
