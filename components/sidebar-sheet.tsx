import { XIcon } from "lucide-react"
import { useEffect, useRef } from "react"

import { useSidebarStore } from "@/lib/store/sidebar-store"
import { cn } from "@/lib/utils"
import { Input } from "./ui/input"

const SidebarSheetHeader = ({ title }: { title?: string }) => {
  const { setSidebarSheetContentId } = useSidebarStore()

  return (
    <div className="flex items-center justify-between w-full px-2 h-[4.375rem]">
      <h5 className="typo-heading-h5">{title}</h5>
      <button
        onClick={() => {
          setSidebarSheetContentId("")
        }}
        className="bg-muted-foreground/5 p-1 rounded-full hover:bg-muted-foreground/10 transition-colors"
      >
        <XIcon className="w-5 h-5" />
      </button>
    </div>
  )
}

const SidebarMore = () => {
  return (
    <div>
      <SidebarSheetHeader title="More" />
    </div>
  )
}

const SidebarSearch = () => {
  return (
    <div>
      <SidebarSheetHeader title="Search" />
      <Input
        autoFocus
        placeholder="Dynamic placeholder"
        className="rounded-full px-4"
      />
    </div>
  )
}

const SidebarSheet = () => {
  const { sidebarSheetOpen, sidebarSheetContentId, setSidebarSheetContentId } =
    useSidebarStore()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(event: MouseEvent | TouchEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !["sidebar-more", "sidebar-search"].includes((event.target as HTMLElement).id)
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
      <div className="border-border border-r w-full h-full p-2">
        {sidebarSheetContentId === "sidebar-more" && <SidebarMore />}
        {sidebarSheetContentId === "sidebar-search" && <SidebarSearch />}
      </div>
    </aside>
  )
}

export default SidebarSheet
