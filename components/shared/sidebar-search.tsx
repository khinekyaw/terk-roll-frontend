import { Input } from "@/components/ui/input"
import { SidebarSheetHeader } from "./sidebar-sheet-header"

export const SidebarSearch = () => {
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