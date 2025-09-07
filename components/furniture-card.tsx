"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Meuble } from "@/lib/data"
import { useRouter } from "next/navigation"

interface FurnitureCardProps {
  meuble: Meuble
}

export function FurnitureCard({ meuble }: FurnitureCardProps) {
  const [liked, setLiked] = useState(meuble.liked)
  const router = useRouter()

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setLiked(!liked)
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(`/meubles/${meuble.id}`)
    window.scrollTo(0, 0)
  }

  const prixAffiche =
    meuble.promotion && meuble.pourcentagePromotion
      ? meuble.prix * (1 - meuble.pourcentagePromotion / 100)
      : meuble.prix

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div onClick={handleClick} className="cursor-pointer">
        <div className="relative aspect-square">
          <Image src={meuble.image || "/placeholder.svg"} alt={meuble.nom} fill className="object-cover" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white/90 rounded-full z-10"
            onClick={toggleLike}
          >
            <Heart className={cn("h-5 w-5", liked ? "fill-red-500 text-red-500" : "text-gray-500")} />
            <span className="sr-only">J'aime</span>
          </Button>
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {meuble.nouveaute && <Badge className="bg-brand-green hover:bg-brand-green/90">Nouveau</Badge>}
            {meuble.promotion && meuble.pourcentagePromotion && (
              <Badge variant="destructive">-{meuble.pourcentagePromotion}%</Badge>
            )}
            {!meuble.enStock && (
              <Badge variant="outline" className="bg-white/80">
                Rupture de stock
              </Badge>
            )}
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-1">{meuble.nom}</h3>
          <p className="text-muted-foreground text-sm">{meuble.categorie}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div>
            {meuble.promotion && meuble.pourcentagePromotion ? (
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">{prixAffiche.toFixed(2)} €</span>
                <span className="text-muted-foreground line-through text-sm">{meuble.prix.toFixed(2)} €</span>
              </div>
            ) : (
              <span className="font-bold text-lg">{meuble.prix.toFixed(2)} €</span>
            )}
          </div>
          <Button size="sm" variant="outline" className="text-xs">
            Voir détails
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
