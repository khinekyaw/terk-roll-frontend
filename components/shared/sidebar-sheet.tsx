import { useEffect, useRef } from "react"
import {
  SIDEBAR_MORE,
  SIDEBAR_MORE_DARK_MODE,
  SIDEBAR_MORE_LANGUAGE,
  SIDEBAR_SEARCH,
  useSidebarStore,
} from "@/lib/store/sidebar-store"
import { cn } from "@/lib/utils"
import { SidebarMore } from "@/components/shared/sidebar-more"
import { SidebarSearch } from "@/components/shared/sidebar-search"
import { SidebarMoreLanguage } from "@/components/shared/sidebar-more-language"
import { SidebarMoreDarkMode } from "@/components/shared/sidebar-more-dark-mode"

const SidebarSheet = () => {
  const { sidebarSheetOpen, sidebarSheetContentId, setSidebarSheetContentId } =
    useSidebarStore()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(event: MouseEvent | TouchEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        ![SIDEBAR_MORE, SIDEBAR_SEARCH].includes(
          (event.target as HTMLElement).id
        )
      ) {
        setSidebarSheetContentId("")
      }
    }

    document.addEventListener("mousedown", handleClick)
    document.addEventListener("touchstart", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("touchstart", handleClick)
    }
  }, [ref, setSidebarSheetContentId])

  return (
    <aside
      ref={ref}
      data-open={sidebarSheetOpen}
      className={cn(
        "flex fixed left-0 top-0 bottom-0 w-[24.375rem] bg-background pl-sidebar-collapsed-width z-[50] -translate-x-full opacity-0",
        "transition-all duration-400 data-[open=true]:translate-x-0 data-[open=true]:opacity-100"
      )}
    >
      <div className="border-border border-r w-full h-full px-2 py-1">
        {sidebarSheetContentId === SIDEBAR_MORE && <SidebarMore />}
        {sidebarSheetContentId === SIDEBAR_SEARCH && <SidebarSearch />}
        {sidebarSheetContentId === SIDEBAR_MORE_LANGUAGE && (
          <SidebarMoreLanguage />
        )}
        {sidebarSheetContentId === SIDEBAR_MORE_DARK_MODE && (
          <SidebarMoreDarkMode />
        )}
      </div>
    </aside>
  )
}

export default SidebarSheet
