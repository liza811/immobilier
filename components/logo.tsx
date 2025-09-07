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
    <div className={cn("relative rounded-full -mb-1", className)}>
      <Image src="https://935l17bwmn.ufs.sh/f/BmvxvmsVGsP2vVOrtdYzBuJEslxAtSIOr2o8HgmFLPR3Ckyp" alt="Mernache Meuble" width={78} height={78} className="object-contain rounded-full" />
    </div>
  )
}
