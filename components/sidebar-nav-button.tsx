import { useSidebarStore } from "@/lib/store/sidebar-store"
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"
import { IconType } from "react-icons"

interface SidebarNavButtonProps extends ComponentPropsWithoutRef<'button'> {
  icon: IconType
  title: string
  className?: string
  activeIcon: IconType
  id:string
}

export function SidebarNavButton({
  id,
  icon: Icon,
  activeIcon: ActiveIcon,
  title,
  className,
  ...props
}: SidebarNavButtonProps) {
  const { sidebarSheetOpen, sidebarSheetContentId } = useSidebarStore()
  const IconComponent = sidebarSheetContentId === id ? ActiveIcon : Icon

  return (
    <button
      className={cn(
        // Base styles
        "typo-heading-h6 flex items-center gap-x-4 py-3 rounded-lg transition-colors",
        "hover:bg-accent",
        // Icon-only state (mobile/collapsed)
        "lg:px-2 lg:py-2",
        // Collapsed state when sidebar sheet is open
        sidebarSheetOpen && "w-10 justify-center",
        className
      )}
      {...props}
    >
      <IconComponent className="h-6 w-6 shrink-0 transition-colors" />
      <span
        className={cn(
          "hidden lg:block shrink-0 w-fit",
          sidebarSheetOpen && "hidden lg:hidden"
        )}
      >
        {title}
      </span>
    </button>
  )
} 