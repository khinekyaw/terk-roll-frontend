import { cn } from "@/lib/utils"
import { IconType } from "react-icons"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarNavLinkProps {
  icon: IconType
  activeIcon: IconType
  title: string
  href: string
  className?: string
}

export function SidebarNavLink({
  icon: Icon,
  activeIcon: ActiveIcon,
  title,
  href,
  className,
  ...props
}: SidebarNavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  const IconComponent = isActive ? ActiveIcon : Icon

  return (
    <Link
      href={href}
      className={cn(
        // Base styles
        "typo-heading-h6 flex items-center gap-x-4 px-3 py-3 rounded-lg transition-colors",
        "hover:bg-accent",
        // Active state
        isActive && "text-primary",
        // Icon-only state (mobile/collapsed)
        "lg:px-4 lg:py-2",
        className
      )}
      {...props}
    >
      <IconComponent className="h-6 w-6 shrink-0 transition-colors" />
      <span className="hidden lg:block">{title}</span>
    </Link>
  )
}
