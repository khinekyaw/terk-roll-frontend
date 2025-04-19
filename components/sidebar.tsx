"use client"

import { useTranslations } from "next-intl"
import { Fragment, MouseEvent } from "react"

import NavLinkList from "@/components/nav-link-list"
import SearchBar from "@/components/search-bar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useSidebarStore } from "@/lib/store/sidebar-store"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { AbstractLogo } from "./icons/abstract-logo"
import { Logo } from "./icons/logo"

export function Sidebar() {
  const t = useTranslations("common")
  const { sidebarSheetOpen, setSidebarSheetOpen } = useSidebarStore()
  console.log("sb:", sidebarSheetOpen)

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 bottom-0 border-r lg:border-0 overflow-hidden px-4 py-5 gap-y-4 flex flex-col bg-background transition-all z-[51]",
        sidebarSheetOpen ? "w-[4.5rem] lg:border-r" : "lg:w-[240px] w-[72px]"
      )}
    >
      <Sheet
        open={sidebarSheetOpen}
        onOpenChange={(val) => {
          console.log("open chage")
          setSidebarSheetOpen(val)
        }}
        modal={false}
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
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </aside>
  )
}
