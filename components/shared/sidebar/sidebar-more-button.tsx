import { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

export const SidebarMoreButton = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"button">) => {
  return (
    <button
      className={cn(
        "hover:bg-muted-foreground/10 transition-colors px-3 h-10 rounded-full text-start flex items-center justify-between typo-label-md",
        className
      )}
      {...props}
    ></button>
  )
} 