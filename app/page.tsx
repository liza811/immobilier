"use client"

import { useState } from "react"
import { Filter, Search, X, Grid3X3, LayoutGrid } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FurnitureCard } from "@/components/furniture-card"
import { FilterSidebar } from "@/components/filter-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { meubles, categories } from "@/lib/data"
import { HeroSlider } from "@/components/hero-slider"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const handleCategoryClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null) // Désélectionner si déjà sélectionné
    } else {
      setActiveCategory(category) // Sélectionner la nouvelle catégorie
    }
  }

  const filteredMeubles = meubles.filter((meuble) => {
    const matchesSearch =
      meuble.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meuble.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meuble.categorie.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory ? meuble.categorie === activeCategory : true

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Slider */}
        <HeroSlider />

        {/* Catalogue Section */}
        <section id="catalogue" className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Notre Catalogue</h2>
                <p className="text-muted-foreground">Découvrez notre sélection de meubles de qualité</p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className={viewMode === "grid" ? "bg-gray-200" : ""}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                  <span className="sr-only">Vue grille</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className={viewMode === "list" ? "bg-gray-200" : ""}
                  onClick={() => setViewMode("list")}
                >
                  <LayoutGrid className="h-4 w-4" />
                  <span className="sr-only">Vue liste</span>
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex space-x-2 pb-2">
                <Button
                  variant={activeCategory === null ? "default" : "outline"}
                  className={activeCategory === null ? "bg-brand-green hover:bg-brand-green/90" : ""}
                  onClick={() => setActiveCategory(null)}
                >
                  Tous
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className={activeCategory === category ? "bg-brand-green hover:bg-brand-green/90" : ""}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar for desktop */}
              <aside className="hidden md:block w-72 shrink-0">
                <div className="bg-white rounded-lg shadow-sm border p-1">
                  <FilterSidebar />
                </div>
              </aside>

              {/* Mobile filter button and sheet */}
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="md:hidden flex items-center gap-2 mb-4">
                    <Filter className="h-4 w-4" />
                    Filtres
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full sm:w-[350px] p-0">
                  <FilterSidebar isMobile onClose={() => setIsFilterOpen(false)} />
                </SheetContent>
              </Sheet>

              {/* Main content */}
              <div className="flex-1">
                <div className="mb-6">
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Rechercher un meuble..."
                      className="w-full pr-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery ? (
                      <button className="absolute right-3 top-1/2 -translate-y-1/2" onClick={() => setSearchQuery("")}>
                        <X className="h-4 w-4 text-muted-foreground" />
                        <span className="sr-only">Effacer la recherche</span>
                      </button>
                    ) : (
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </div>

                {filteredMeubles.length > 0 ? (
                  <div
                    className={
                      viewMode === "grid"
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "flex flex-col gap-4"
                    }
                  >
                    {filteredMeubles.map((meuble) => (
                      <FurnitureCard key={meuble.id} meuble={meuble} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium mb-2">Aucun résultat trouvé</h3>
                    <p className="text-muted-foreground">
                      Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nos meubles populaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {meubles
                .filter((m) => m.liked)
                .slice(0, 3)
                .map((meuble) => (
                  <FurnitureCard key={meuble.id} meuble={meuble} />
                ))}
            </div>
            <div className="text-center mt-8">
              <Button className="bg-brand-green hover:bg-brand-green/90">Voir plus de meubles</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
