import { XIcon } from "lucide-react"
import { useSidebarStore } from "@/lib/store/sidebar-store"

interface SidebarSheetHeaderProps {
  title?: string
}

export const SidebarSheetHeader = ({ title }: SidebarSheetHeaderProps) => {
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