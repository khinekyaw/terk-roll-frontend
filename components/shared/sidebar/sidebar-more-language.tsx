import { Check } from "lucide-react"
import { useParams } from "next/navigation"
import { startTransition } from "react"
import { useLocale } from "next-intl"

import { usePathname, useRouter } from "@/i18n/navigation"
import { getLocaleName, routing } from "@/i18n/routing"
import { SidebarMoreButton } from "./sidebar-more-button"
import { SidebarSheetHeader } from "./sidebar-sheet-header"


export const SidebarMoreLanguage = () => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const locale = useLocale()

  const switchLocale = (locale: string) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale }
      )
    })
  }

  return (
    <div>
      <SidebarSheetHeader title="Language" />
      <div className="w-full flex flex-col gap-1">
        {routing.locales.map((cur) => (
          <SidebarMoreButton key={cur} onClick={() => switchLocale(cur)}>
            {getLocaleName(cur)}{" "}
            {cur === locale && (
              <Check className="w-5 h-5 text-muted-foreground" />
            )}
          </SidebarMoreButton>
        ))}
      </div>
    </div>
  )
}
