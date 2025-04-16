"use client"

import { usePathname } from "@/i18n/navigation"
import Link from "next/link"
import { ReactNode } from "react"

interface NavLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={className}
      data-active={isActive}
    >
      {children}
    </Link>
  )
} 