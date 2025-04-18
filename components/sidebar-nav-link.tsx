import { cn } from "@/lib/utils"
import { IconType } from "react-icons"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSidebarStore } from "@/lib/store/sidebar-store"

interface SidebarNavLinkProps {
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
  onClick,
  ...props
}: SidebarNavLinkProps) {
  const pathname = usePathname()
  const { sidebarSheetOpen } = useSidebarStore()
  const isActive = pathname === href

  const IconComponent = isActive ? ActiveIcon : Icon

  return (
    <Link
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
      onClick={(e) => {
        if (onClick) {
          e.preventDefault()
          onClick()
        }
      }}
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
    </Link>
  )
}
