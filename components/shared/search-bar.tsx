import { Search } from "lucide-react"
import { useSidebarStore } from "@/lib/store/sidebar-store"
import { cn } from "@/lib/utils"

const SearchBar = () => {
  const { sidebarSheetOpen, setSidebarSheetContentId } = useSidebarStore()

  return (
    <div
      id="sidebar-search"
      className={cn(
        "bg-input/40 h-10 rounded-s-full overflow-hidden px-1 cursor-pointer rounded-e-full",
        sidebarSheetOpen ? "w-10" : "w-full"
      )}
      onClick={() => setSidebarSheetContentId("sidebar-search")}
    >
      <div className="w-full h-full flex items-center pointer-events-none">
        <div className="flex items-center justify-center w-8 h-8 shrink-0">
          <Search className="w-5 h-5" />
        </div>
        <p
          className={cn(
            "typo-body-sm text-foreground/50 shrink-0 w-fit",
            sidebarSheetOpen && "hidden"
          )}
        >
          Search
        </p>
      </div>
    </div>
  )
}

export default SearchBar
