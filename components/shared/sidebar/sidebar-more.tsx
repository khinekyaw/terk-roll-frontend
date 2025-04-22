import { ChevronRight } from "lucide-react"
import { useLocale } from "next-intl"

import { SidebarSheetHeader } from "./sidebar-sheet-header"
import { SidebarMoreButton } from "./sidebar-more-button"
import { SIDEBAR_MORE_DARK_MODE, SIDEBAR_MORE_LANGUAGE, useSidebarStore } from "@/lib/store/sidebar-store"
import { getLocaleName } from "@/i18n/routing"

export const SidebarMore = () => {
  const { setSidebarSheetContentId } = useSidebarStore()
  const locale = useLocale()

  return (
    <div>
      <SidebarSheetHeader title="More" />
      <div className="w-full flex flex-col gap-2">
        <SidebarMoreButton
          onClick={() => setSidebarSheetContentId(SIDEBAR_MORE_LANGUAGE)}
        >
          {getLocaleName(locale)} <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </SidebarMoreButton>
        <SidebarMoreButton
          onClick={() => setSidebarSheetContentId(SIDEBAR_MORE_DARK_MODE)}
        >
          Dark mode <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </SidebarMoreButton>
      </div>
    </div>
  )
}
