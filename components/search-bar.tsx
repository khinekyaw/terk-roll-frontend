import { Search } from "lucide-react"
import { useSidebarStore } from "@/lib/store/sidebar-store"
import { cn } from "@/lib/utils"

const SearchBar = () => {
  const { sidebarSheetOpen } = useSidebarStore()

  return (
    <div className={cn(
      "bg-input/40 h-10 rounded-s-full px-1 cursor-pointer rounded-e-full flex items-center",
      sidebarSheetOpen ? "w-10" : "w-full"
    )}>
      <div className="flex items-center justify-center w-8 h-8 shrink-0">
        <Search className="w-5 h-5" />
      </div>
      <p className={cn(
        "typo-body-sm text-gray-400 shrink-0 w-fit",
        sidebarSheetOpen && "hidden"
      )}>
        Search
      </p>
    </div>
  )
}

export default SearchBar
