import { useSidebarStore } from "@/lib/store/sidebar-store"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentPropsWithoutRef } from "react"
import { IconType } from "react-icons"

interface SidebarNavLinkProps extends ComponentPropsWithoutRef<"a"> {
  icon: IconType
  activeIcon: IconType
  title: string
  href?: string
  className?: string
  onClick?: () => void
}

export function SidebarNavLink({
  icon: Icon,
  activeIcon: ActiveIcon,
  title,
  href,
  className,
  id,
  ...props
}: SidebarNavLinkProps) {
  const pathname = usePathname()
  const { sidebarSheetOpen, sidebarSheetContentId } = useSidebarStore()
  const isActive =
    (pathname === href && !sidebarSheetOpen) || sidebarSheetContentId === id

  const IconComponent = isActive ? ActiveIcon : Icon

  return (
    <Link
      id={id}
      href={href || ""}
      className={cn(
        // Base styles
        "typo-heading-h6 flex items-center gap-x-4 py-3 rounded-lg transition-colors",
        "hover:bg-accent",
        // Icon-only state (mobile/collapsed)
        "lg:px-2 lg:py-2",
        // Active state
        isActive && "text-primary",
        // Collapsed state when sidebar sheet is open
        sidebarSheetOpen && "w-10 justify-center",
        className
      )}
      {...props}
    >
      <IconComponent className="h-6 w-6 shrink-0 transition-colors pointer-events-none" />
      <span
        className={cn(
          "hidden lg:block shrink-0 w-fit pointer-events-none",
          sidebarSheetOpen && "hidden lg:hidden"
        )}
      >
        {title}
      </span>
    </Link>
  )
}
