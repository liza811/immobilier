"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Heart, Minus, Plus, Share2, Truck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FurnitureCard } from "@/components/furniture-card"
import { meubles } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function MeubleDetails({ params }: { params: { id: string } }) {
  const meuble = meubles.find((m) => m.id === params.id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!meuble) {
    notFound()
  }

  const [liked, setLiked] = useState(meuble.liked)
  const [quantity, setQuantity] = useState(1)

  const toggleLike = () => {
    setLiked(!liked)
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const relatedMeubles = meubles.filter((m) => m.categorie === meuble.categorie && m.id !== meuble.id).slice(0, 3)

  const prixAffiche =
    meuble.promotion && meuble.pourcentagePromotion
      ? meuble.prix * (1 - meuble.pourcentagePromotion / 100)
      : meuble.prix

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/catalogue" className="hover:text-foreground">
              Catalogue
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href={`/catalogue?category=${meuble.categorie}`} className="hover:text-foreground">
              {meuble.categorie}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground font-medium truncate">{meuble.nom}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
              <Image src={meuble.image || "/placeholder.svg"} alt={meuble.nom} fill className="object-cover" />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {meuble.nouveaute && <Badge className="bg-brand-green hover:bg-brand-green/90">Nouveau</Badge>}
                {meuble.promotion && meuble.pourcentagePromotion && (
                  <Badge variant="destructive">-{meuble.pourcentagePromotion}%</Badge>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{meuble.nom}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{meuble.categorie}</Badge>
                {!meuble.enStock && (
                  <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">
                    Rupture de stock
                  </Badge>
                )}
              </div>

              <div className="mb-6">
                {meuble.promotion && meuble.pourcentagePromotion ? (
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold">{prixAffiche.toFixed(2)} €</span>
                    <span className="text-lg text-muted-foreground line-through">{meuble.prix.toFixed(2)} €</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold">{meuble.prix.toFixed(2)} €</span>
                )}
              </div>

              <p className="text-muted-foreground mb-6">{meuble.description}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Couleur</span>
                  <span>{meuble.couleur}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Matériaux</span>
                  <span>{meuble.materiaux.join(", ")}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Dimensions</span>
                  <span>
                    L{meuble.dimensions.largeur} x H{meuble.dimensions.hauteur} x P{meuble.dimensions.profondeur} cm
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Disponibilité</span>
                  <span className={meuble.enStock ? "text-green-600" : "text-red-500"}>
                    {meuble.enStock ? "En stock" : "Rupture de stock"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="h-10 w-10 rounded-none"
                  >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Diminuer</span>
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button variant="ghost" size="icon" onClick={incrementQuantity} className="h-10 w-10 rounded-none">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Augmenter</span>
                  </Button>
                </div>

                <Button className="flex-1 bg-brand-green hover:bg-brand-green/90" disabled={!meuble.enStock}>
                  {meuble.enStock ? "Ajouter au panier" : "Indisponible"}
                </Button>

                <Button variant="outline" size="icon" onClick={toggleLike} className="rounded-full">
                  <Heart className={cn("h-5 w-5", liked ? "fill-red-500 text-red-500" : "")} />
                  <span className="sr-only">J'aime</span>
                </Button>

                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Partager</span>
                </Button>
              </div>

              <div className="bg-muted p-4 rounded-lg flex items-start gap-3">
                <Truck className="h-5 w-5 text-brand-green mt-0.5" />
                <div>
                  <p className="font-medium">Livraison gratuite</p>
                  <p className="text-sm text-muted-foreground">Pour toute commande supérieure à 500€</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="description" className="mb-12">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
              <TabsTrigger
                value="description"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-brand-green data-[state=active]:text-foreground py-3"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-brand-green data-[state=active]:text-foreground py-3"
              >
                Spécifications
              </TabsTrigger>
              <TabsTrigger
                value="livraison"
                className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-brand-green data-[state=active]:text-foreground py-3"
              >
                Livraison & Retours
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-6">
              <div className="space-y-4">
                <p>{meuble.description}</p>
                <p>
                  Ce meuble de qualité supérieure est fabriqué avec les meilleurs matériaux pour garantir sa durabilité
                  et sa résistance à l'usage quotidien. Son design élégant et intemporel s'intégrera parfaitement dans
                  votre intérieur.
                </p>
                <p>Chaque pièce est soigneusement inspectée avant expédition pour vous garantir un produit parfait.</p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Dimensions</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Largeur: {meuble.dimensions.largeur} cm</li>
                    <li>Hauteur: {meuble.dimensions.hauteur} cm</li>
                    <li>Profondeur: {meuble.dimensions.profondeur} cm</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Matériaux</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {meuble.materiaux.map((materiau) => (
                      <li key={materiau}>{materiau}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Entretien</h3>
                  <p>
                    Nettoyez avec un chiffon doux légèrement humide. Évitez les produits chimiques agressifs qui
                    pourraient endommager la finition.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="livraison" className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Livraison</h3>
                  <p>Nous proposons plusieurs options de livraison :</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Livraison standard (3-5 jours ouvrés) : Gratuite pour toute commande supérieure à 500€</li>
                    <li>Livraison express (1-2 jours ouvrés) : 15€</li>
                    <li>Livraison avec installation : 50€</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Retours</h3>
                  <p>
                    Vous disposez de 14 jours à compter de la réception de votre commande pour retourner un article qui
                    ne vous conviendrait pas.
                  </p>
                  <p className="mt-2">
                    Les frais de retour sont à votre charge, sauf en cas de produit défectueux ou non conforme.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Garantie</h3>
                  <p>
                    Tous nos meubles sont garantis 2 ans contre tout défaut de fabrication dans des conditions normales
                    d'utilisation.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Produits similaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedMeubles.map((meuble) => (
                <FurnitureCard key={meuble.id} meuble={meuble} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
