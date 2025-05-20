import { cn } from "@/lib/utils"

interface AreaBadgeProps {
  area: number
  className?: string
}

export function AreaBadge({ area, className }: AreaBadgeProps) {
  return (
    <div
      className={cn(
        "h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium",
        `area-badge-${area}`,
        className,
      )}
    >
      {area}
    </div>
  )
}
