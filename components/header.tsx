"use client"

import Link from "next/link"
import { ShoppingCart, User, Search } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-[#065053] shadow-b bg-[#065053] text-white shadow-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-white/80">
              Accueil
            </Link>
            <Link href="/commander" className="text-sm font-medium transition-colors hover:text-white/80">
              Commander
            </Link>
            <Link href="/commander-sur-mesure" className="text-sm font-medium transition-colors hover:text-white/80">
              Sur mesure
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="relative w-64">
            <Input
              type="search"
              placeholder="Rechercher..."
              className="w-full rounded-full bg-[#043c3e] border-[#043c3e] text-white placeholder:text-white/60 pr-8 focus-visible:ring-[#ceae1d] focus-visible:ring-offset-[#065053]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Search className="h-4 w-4 text-white/70" />
            </div>
          </div>
          <Button className="bg-[#ceae1d] hover:bg-[#ceae1d]/90 text-[#065053] font-medium" size="sm" asChild>
            <Link href="/commander-sur-mesure">Commander sur mesure</Link>
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#043c3e] hover:text-white">
            <User className="h-5 w-5" />
            <span className="sr-only">Mon compte</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-[#043c3e] hover:text-white">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Panier</span>
          </Button>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-transparent border-white/20 text-white hover:bg-[#043c3e] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#065053] text-white border-r-[#043c3e]">
            <div className="flex flex-col gap-6 py-4">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Logo />
                <span className="text-xl font-bold">Mernache Meuble</span>
              </Link>
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Rechercher..."
                  className="w-full rounded-full bg-[#043c3e] border-[#043c3e] text-white placeholder:text-white/60 pr-8 focus-visible:ring-[#ceae1d] focus-visible:ring-offset-[#065053]"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Search className="h-4 w-4 text-white/70" />
                </div>
              </div>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-lg font-medium transition-colors hover:text-white/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  href="/commander"
                  className="text-lg font-medium transition-colors hover:text-white/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Commander
                </Link>
                <Link
                  href="/commander-sur-mesure"
                  className="text-lg font-medium transition-colors hover:text-white/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sur mesure
                </Link>
              </nav>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-white hover:bg-[#043c3e] hover:text-white">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Mon compte</span>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-[#043c3e] hover:text-white">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Panier</span>
                </Button>
              </div>
              <Button className="bg-[#ceae1d] hover:bg-[#ceae1d]/90 text-[#065053] font-medium w-full" asChild>
                <Link href="/commander-sur-mesure" onClick={() => setIsMenuOpen(false)}>
                  Commander sur mesure
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
