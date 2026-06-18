import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-md border border-jj-gold/30 bg-jj-black px-4 py-2 text-sm text-jj-white placeholder:text-jj-gray transition-colors outline-none focus-visible:border-jj-gold focus-visible:ring-1 focus-visible:ring-jj-gold disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
