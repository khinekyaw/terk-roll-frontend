import { ChevronRight } from "lucide-react"
import { SidebarSheetHeader } from "./sidebar-sheet-header"
import { SidebarMoreButton } from "./sidebar-more-button"

export const SidebarMore = () => {
  return (
    <div>
      <SidebarSheetHeader title="More" />
      <div className="w-full flex flex-col gap-2 mt-1">
        <SidebarMoreButton>English <ChevronRight className="w-5 h-5 text-muted-foreground" /></SidebarMoreButton>
        <SidebarMoreButton>Dark mode <ChevronRight className="w-5 h-5 text-muted-foreground" /></SidebarMoreButton>
      </div>
    </div>
  )
} 