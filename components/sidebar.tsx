"use client"

import Logo from "@/components/logo"
import SearchBar from "@/components/search-bar"
import NavLinkList from "@/components/nav-link-list"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useTranslations } from "next-intl"

export function Sidebar() {
  const t = useTranslations('common');

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[72px] lg:w-[240px] px-4 py-5 gap-y-4 z-50 flex flex-col bg-background">
      <Logo />
      <SearchBar />
      <ScrollArea>
        <div className="flex flex-col gap-y-4 w-full">
          <NavLinkList />
          <Button>{t('login')}</Button>
          <Separator />
          <p className="text-gray-400 typo-body-xs">© 2025 TrekRoll</p>
        </div>
      </ScrollArea>
    </aside>
  )
}
