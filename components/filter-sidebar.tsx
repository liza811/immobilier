"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, X, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { categories, couleurs, materiaux } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface FilterSidebarProps {
  className?: string
  onFilterChange?: (filters: FilterState) => void
  isMobile?: boolean
  onClose?: () => void
}

interface FilterState {
  categories: string[]
  couleurs: string[]
  materiaux: string[]
  prix: [number, number]
  enStock: boolean
  nouveautes: boolean
  promotions: boolean
}

export function FilterSidebar({ className, onFilterChange, isMobile, onClose }: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    couleurs: [],
    materiaux: [],
    prix: [0, 1000],
    enStock: false,
    nouveautes: false,
    promotions: false,
  })

  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    couleurs: true,
    materiaux: true,
    prix: true,
    autres: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  const toggleCategory = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category]

    updateFilters({ ...filters, categories: newCategories })
  }

  const toggleCouleur = (couleur: string) => {
    const newCouleurs = filters.couleurs.includes(couleur)
      ? filters.couleurs.filter((c) => c !== couleur)
      : [...filters.couleurs, couleur]

    updateFilters({ ...filters, couleurs: newCouleurs })
  }

  const toggleMateriau = (materiau: string) => {
    const newMateriaux = filters.materiaux.includes(materiau)
      ? filters.materiaux.filter((m) => m !== materiau)
      : [...filters.materiaux, materiau]

    updateFilters({ ...filters, materiaux: newMateriaux })
  }

  const updatePrix = (value: number[]) => {
    updateFilters({ ...filters, prix: [value[0], value[1]] })
  }

  const toggleEnStock = () => {
    updateFilters({ ...filters, enStock: !filters.enStock })
  }

  const toggleNouveautes = () => {
    updateFilters({ ...filters, nouveautes: !filters.nouveautes })
  }

  const togglePromotions = () => {
    updateFilters({ ...filters, promotions: !filters.promotions })
  }

  const updateFilters = (newFilters: FilterState) => {
    setFilters(newFilters)
    if (onFilterChange) {
      onFilterChange(newFilters)
    }
  }

  const resetFilters = () => {
    const resetState: FilterState = {
      categories: [],
      couleurs: [],
      materiaux: [],
      prix: [0, 1000],
      enStock: false,
      nouveautes: false,
      promotions: false,
    }

    setFilters(resetState)
    if (onFilterChange) {
      onFilterChange(resetState)
    }
  }

  const hasActiveFilters = () => {
    return (
      filters.categories.length > 0 ||
      filters.couleurs.length > 0 ||
      filters.materiaux.length > 0 ||
      filters.prix[0] > 0 ||
      filters.prix[1] < 1000 ||
      filters.enStock ||
      filters.nouveautes ||
      filters.promotions
    )
  }

  const activeFiltersCount = () => {
    let count = 0
    if (filters.categories.length > 0) count++
    if (filters.couleurs.length > 0) count++
    if (filters.materiaux.length > 0) count++
    if (filters.prix[0] > 0 || filters.prix[1] < 1000) count++
    if (filters.enStock) count++
    if (filters.nouveautes) count++
    if (filters.promotions) count++
    return count
  }

  return (
    <div className={cn("w-full h-full flex flex-col", className)}>
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b bg-gray-100">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            Filtres
            {activeFiltersCount() > 0 && (
              <Badge className="ml-2 bg-brand-yellow text-brand-green">{activeFiltersCount()}</Badge>
            )}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/10">
            <X className="h-5 w-5" />
            <span className="sr-only">Fermer</span>
          </Button>
        </div>
      )}

      <div className="p-4 flex-1 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          {!isMobile && (
            <h3 className="font-semibold flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-brand-green" />
              Filtres
              {activeFiltersCount() > 0 && (
                <Badge className="ml-2 bg-brand-green text-white">{activeFiltersCount()}</Badge>
              )}
            </h3>
          )}
          {hasActiveFilters() && (
            <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 text-xs text-brand-green">
              Réinitialiser
            </Button>
          )}
        </div>

        {/* Catégories */}
        <div className="mb-6">
          <div
            className="flex justify-between items-center mb-3 cursor-pointer bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => toggleSection("categories")}
          >
            <h4 className="font-medium">Catégories</h4>
            {expandedSections.categories ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>

          {expandedSections.categories && (
            <div className="space-y-2 pl-2 mt-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2 p-1.5 hover:bg-gray-50 rounded-md">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                    className="data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green"
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer w-full"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Couleurs */}
        <div className="mb-6">
          <div
            className="flex justify-between items-center mb-3 cursor-pointer bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => toggleSection("couleurs")}
          >
            <h4 className="font-medium">Couleurs</h4>
            {expandedSections.couleurs ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>

          {expandedSections.couleurs && (
            <div className="grid grid-cols-2 gap-2 pl-2 mt-3">
              {couleurs.map((couleur) => (
                <div key={couleur} className="flex items-center space-x-2 p-1.5 hover:bg-gray-50 rounded-md">
                  <Checkbox
                    id={`couleur-${couleur}`}
                    checked={filters.couleurs.includes(couleur)}
                    onCheckedChange={() => toggleCouleur(couleur)}
                    className="data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green"
                  />
                  <label
                    htmlFor={`couleur-${couleur}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer w-full"
                  >
                    {couleur}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Matériaux */}
        <div className="mb-6">
          <div
            className="flex justify-between items-center mb-3 cursor-pointer bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => toggleSection("materiaux")}
          >
            <h4 className="font-medium">Matériaux</h4>
            {expandedSections.materiaux ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>

          {expandedSections.materiaux && (
            <div className="grid grid-cols-2 gap-2 pl-2 mt-3">
              {materiaux.map((materiau) => (
                <div key={materiau} className="flex items-center space-x-2 p-1.5 hover:bg-gray-50 rounded-md">
                  <Checkbox
                    id={`materiau-${materiau}`}
                    checked={filters.materiaux.includes(materiau)}
                    onCheckedChange={() => toggleMateriau(materiau)}
                    className="data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green"
                  />
                  <label
                    htmlFor={`materiau-${materiau}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer w-full"
                  >
                    {materiau}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Prix */}
        <div className="mb-6">
          <div
            className="flex justify-between items-center mb-3 cursor-pointer bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => toggleSection("prix")}
          >
            <h4 className="font-medium">Prix</h4>
            {expandedSections.prix ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>

          {expandedSections.prix && (
            <div className="space-y-4 px-2 mt-3">
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={10}
                value={[filters.prix[0], filters.prix[1]]}
                onValueChange={updatePrix}
                className="my-6"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{filters.prix[0]} €</span>
                <span className="text-sm font-medium">{filters.prix[1]} €</span>
              </div>
            </div>
          )}
        </div>

        {/* Autres filtres */}
        <div className="mb-6">
          <div
            className="flex justify-between items-center mb-3 cursor-pointer bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => toggleSection("autres")}
          >
            <h4 className="font-medium">Autres filtres</h4>
            {expandedSections.autres ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>

          {expandedSections.autres && (
            <div className="space-y-2 pl-2 mt-3">
              <div className="flex items-center space-x-2 p-1.5 hover:bg-gray-50 rounded-md">
                <Checkbox
                  id="en-stock"
                  checked={filters.enStock}
                  onCheckedChange={toggleEnStock}
                  className="data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green"
                />
                <label
                  htmlFor="en-stock"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer w-full"
                >
                  En stock uniquement
                </label>
              </div>
              <div className="flex items-center space-x-2 p-1.5 hover:bg-gray-50 rounded-md">
                <Checkbox
                  id="nouveautes"
                  checked={filters.nouveautes}
                  onCheckedChange={toggleNouveautes}
                  className="data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green"
                />
                <label
                  htmlFor="nouveautes"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer w-full"
                >
                  Nouveautés
                </label>
              </div>
              <div className="flex items-center space-x-2 p-1.5 hover:bg-gray-50 rounded-md">
                <Checkbox
                  id="promotions"
                  checked={filters.promotions}
                  onCheckedChange={togglePromotions}
                  className="data-[state=checked]:bg-brand-green data-[state=checked]:border-brand-green"
                />
                <label
                  htmlFor="promotions"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer w-full"
                >
                  Promotions
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {isMobile && (
        <div className="p-4 border-t">
          <Button className="w-full bg-brand-green hover:bg-brand-green/90" onClick={onClose}>
            Appliquer les filtres {activeFiltersCount() > 0 && `(${activeFiltersCount()})`}
          </Button>
        </div>
      )}
    </div>
  )
}
