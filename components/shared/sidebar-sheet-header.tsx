import { ChevronLeft, XIcon } from "lucide-react"
import { useSidebarStore } from "@/lib/store/sidebar-store"

import { Button } from "@/components/ui/button"

interface SidebarSheetHeaderProps {
  title?: string
}

export const SidebarSheetHeader = ({ title }: SidebarSheetHeaderProps) => {
  const { setSidebarSheetContentId, sidebarSheetContentId } = useSidebarStore()
  const idsList = sidebarSheetContentId.split("/")
  const backId =
    idsList.length > 1 ? idsList.slice(0, idsList.length - 1).join("/") : ""

  return (
    <div className="flex items-center justify-between w-full px-2 h-[4.375rem] mb-1">
      <div className="flex gap-2 items-center">
        {backId && (
          <Button
            color="muted"
            size={"icon-xs"}
            onClick={() => setSidebarSheetContentId(backId)}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
        )}
        <h5 className="typo-heading-h5">{title}</h5>
      </div>
      {!backId && (
        <Button
          color="muted"
          size="icon-sm"
          onClick={() => {
            setSidebarSheetContentId("")
          }}
        >
          <XIcon className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}
