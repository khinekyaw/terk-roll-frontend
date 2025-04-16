"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Moon, Globe, HelpCircle, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { cn } from "@/lib/utils"

interface MoreMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MoreMenu({ isOpen, onClose }: MoreMenuProps) {
  const t = useTranslations("More")

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-sm z-50 lg:hidden",
          isOpen ? "block" : "hidden"
        )}
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className={cn(
          "fixed top-0 bottom-0 left-0 w-[320px] bg-background border-r z-50",
          "transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-[72px]" : "translate-x-[-100%]"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <h2 className="text-xl font-semibold">{t("title")}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Menu Items */}
        <div className="py-4 px-2">
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-base font-normal h-12"
            >
              <Moon className="h-5 w-5" />
              <span>{t("darkMode")}</span>
              <ThemeToggle />
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-base font-normal h-12"
            >
              <Globe className="h-5 w-5" />
              <span>{t("language")}</span>
              <LanguageSwitcher />
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-base font-normal h-12"
            >
              <HelpCircle className="h-5 w-5" />
              <span>{t("help")}</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
} 