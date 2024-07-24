import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export const Code = ({className,...props}: ComponentPropsWithoutRef<"span">) => {

    return <span className={cn(" bg-purple-500 font-mono border border-accent p-1 text-primary rounded-sm",className)} {...props} />
}