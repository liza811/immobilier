import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "small" | "medium" | "large"
}

export function Logo({ className, size = "medium" }: LogoProps) {
  const sizes = {
    small: { width: 40, height: 40 },
    medium: { width: 50, height: 50 },
    large: { width: 80, height: 80 },
  }

  const { width, height } = sizes[size]

  return (
    <div className={cn("relative rounded-full -mb-1 w-[120px] h-[120px]", className)}>
      <Image src="https://brdnzyd05d.ufs.sh/f/GGYNM8xudcj6cq4OgtwgXLCbJH5weO8nY4FsDmAUQSRi3ofq" alt="Mernache Meuble" width={120} height={120} className="object-contain rounded-full" />
    </div>
  )
}
