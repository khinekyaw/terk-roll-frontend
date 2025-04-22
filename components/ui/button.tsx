import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "typo-body-md inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-mdbfont-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      color: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        muted:
          "bg-muted hover:bg-muted-foreground/15",
        ghost:
          "hover:bg-accent dark:hover:bg-accent/50",
      },
      size: {
        default: "h-10 rounded-md px-6 has-[>svg]:px-4",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        icon: "w-10 h-10 rounded-full",
        "icon-sm": "w-7 h-7 rounded-full",
        "icon-xs": "w-6 h-6 rounded-full",
      },
    },
    defaultVariants: {
      color: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  color,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ color, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
