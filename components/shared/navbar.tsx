"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { LanguageSwitcher } from "@/components/shared/language-switcher"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Home, Compass, User, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const t = useTranslations("Navigation")
  const pathname = usePathname()

  const isActivePath = (path: string) => pathname.startsWith(path)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container flex items-center h-16 gap-4 md:gap-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <h1 className="text-xl font-bold">TrekRoll</h1>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-md hidden md:flex items-center relative">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={t("search")}
            className="pl-9 w-full bg-muted"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 md:gap-2">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "flex flex-col gap-1 h-auto py-2 px-3",
                isActivePath("/") && "text-primary font-medium"
              )}
            >
              <Home className="h-5 w-5" />
              <span className="text-xs">{t("forYou")}</span>
            </Button>
          </Link>

          <Link href="/explore">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "flex flex-col gap-1 h-auto py-2 px-3",
                isActivePath("/explore") && "text-primary font-medium"
              )}
            >
              <Compass className="h-5 w-5" />
              <span className="text-xs">{t("explore")}</span>
            </Button>
          </Link>

          <Link href="/profile">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "flex flex-col gap-1 h-auto py-2 px-3",
                isActivePath("/profile") && "text-primary font-medium"
              )}
            >
              <User className="h-5 w-5" />
              <span className="text-xs">{t("profile")}</span>
            </Button>
          </Link>

          {/* Settings Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex flex-col gap-1 h-auto py-2 px-3"
              >
                <Settings className="h-5 w-5" />
                <span className="text-xs">{t("settings")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem className="flex items-center gap-2">
                <ThemeToggle />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <LanguageSwitcher />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
} 