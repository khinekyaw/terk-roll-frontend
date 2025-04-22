import { Check } from "lucide-react"

import { useTheme } from "next-themes"
import { SidebarMoreButton } from "./sidebar-more-button"
import { SidebarSheetHeader } from "./sidebar-sheet-header"


export const SidebarMoreDarkMode = () => {
  const { setTheme, theme } = useTheme();
  
  return (
    <div>
      <SidebarSheetHeader title="Dark mode" />
      <div className="w-full flex flex-col gap-1">
        {['system', 'light', 'dark'].map((name) => (
          <SidebarMoreButton className="capitalize" key={name} onClick={() => setTheme(name)}>
            {name}
            {name === theme && (
              <Check className="w-5 h-5 text-muted-foreground" />
            )}
          </SidebarMoreButton>
        ))}
      </div>
    </div>
  )
}
