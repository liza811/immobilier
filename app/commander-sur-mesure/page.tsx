"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { categories } from "@/lib/data"

export default function CommanderSurMesure() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <section className="relative h-[250px] w-full">
          <Image
            src="https://i.pinimg.com/736x/2b/63/a7/2b63a7517fd22cb54202b6a9a95c447a.jpg"
            alt="Commander sur mesure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Commander sur mesure</h1>
            <p className="text-lg md:text-xl text-center max-w-2xl">Créez le meuble parfait pour votre intérieur</p>
          </div>
        </section>

        <div className="container mx-auto py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Pourquoi choisir du sur mesure ?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-lg font-bold shrink-0 border">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Adapté à votre espace</h3>
                      <p className="text-gray-600">
                        Nos meubles sur mesure s'adaptent parfaitement aux dimensions et contraintes de votre intérieur.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-lg font-bold shrink-0 border">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Personnalisation complète</h3>
                      <p className="text-gray-600">
                        Choisissez les matériaux, les finitions et les couleurs qui correspondent à vos goûts et à votre
                        décoration.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-lg font-bold shrink-0 border">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Qualité artisanale</h3>
                      <p className="text-gray-600">
                        Nos artisans expérimentés fabriquent votre meuble avec soin et attention aux détails pour un
                        résultat exceptionnel.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-lg font-bold shrink-0 border">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Pièce unique</h3>
                      <p className="text-gray-600">
                        Possédez un meuble unique, fabriqué spécialement pour vous et qui ne se retrouvera nulle part
                        ailleurs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Notre processus</h3>
                <ol className="space-y-4 list-decimal pl-5 text-gray-700">
                  <li>
                    <span className="font-medium">Demande de devis</span> - Remplissez le formulaire avec vos besoins et
                    préférences
                  </li>
                  <li>
                    <span className="font-medium">Consultation</span> - Un de nos designers vous contacte pour discuter
                    de votre projet
                  </li>
                  <li>
                    <span className="font-medium">Proposition</span> - Nous vous envoyons une proposition détaillée avec
                    un devis
                  </li>
                  <li>
                    <span className="font-medium">Fabrication</span> - Après validation, nos artisans fabriquent votre
                    meuble
                  </li>
                  <li>
                    <span className="font-medium">Livraison et installation</span> - Nous livrons et installons votre
                    meuble chez vous
                  </li>
                </ol>
              </div>
            </div>

            <div>
              {formSubmitted ? (
                <div className="bg-white border rounded-lg p-6 text-center shadow-sm">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
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
                      className="text-green-600"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Demande envoyée avec succès !</h3>
                  <p className="text-gray-700 mb-4">
                    Merci pour votre demande de devis. Un membre de notre équipe vous contactera dans les plus brefs
                    délais.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setFormSubmitted(false)}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Nouvelle demande
                  </Button>
                </div>
              ) : (
                <div className="bg-white border rounded-lg shadow-sm">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Demande de devis</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="prenom">Prénom</Label>
                          <Input id="prenom" placeholder="Votre prénom" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="nom">Nom</Label>
                          <Input id="nom" placeholder="Votre nom" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="telephone">Téléphone</Label>
                        <Input id="telephone" placeholder="Votre numéro de téléphone" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="type-meuble">Type de meuble</Label>
                        <Select required>
                          <SelectTrigger id="type-meuble">
                            <SelectValue placeholder="Sélectionnez un type de meuble" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category.toLowerCase()}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dimensions">Dimensions souhaitées (en cm)</Label>
                        <div className="grid grid-cols-3 gap-2">
                          <Input id="largeur" placeholder="Largeur" />
                          <Input id="hauteur" placeholder="Hauteur" />
                          <Input id="profondeur" placeholder="Profondeur" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="materiaux">Matériaux préférés</Label>
                        <Input id="materiaux" placeholder="Ex: Bois, Métal, Verre..." />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget approximatif (€)</Label>
                        <Input id="budget" type="number" placeholder="Votre budget" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description de votre projet</Label>
                        <Textarea
                          id="description"
                          placeholder="Décrivez votre projet en détail (fonctionnalités, style, contraintes particulières...)"
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="fichier">Joindre un fichier (optionnel)</Label>
                        <Input id="fichier" type="file" />
                        <p className="text-xs text-gray-500">
                          Vous pouvez joindre une image, un croquis ou tout autre document utile à la compréhension de
                          votre projet.
                        </p>
                      </div>

                      <Button type="submit" className="w-full bg-[#065053] hover:bg-[#065053]/90">
                        Demander un devis
                      </Button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Nos réalisations sur mesure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             
                <div  className="overflow-hidden rounded-lg shadow-sm border bg-white">
                  <div className="relative aspect-square">
                    <Image
                      src={`https://i.pinimg.com/736x/57/92/1b/57921ba71fe913c93a5c029df9e5d19a.jpg`}
                      alt={`Réalisation sur mesure `}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </div>
                <div  className="overflow-hidden rounded-lg shadow-sm border bg-white">
                  <div className="relative aspect-square">
                    <Image
                      src={`https://i.pinimg.com/736x/1d/22/48/1d2248a50cac7a6abcb4e9afb6a74e11.jpg`}
                      alt={`Réalisation sur mesure `}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </div>
                <div  className="overflow-hidden rounded-lg shadow-sm border bg-white">
                  <div className="relative aspect-square">
                    <Image
                      src={`https://i.pinimg.com/736x/04/ca/f2/04caf2b4f20ce8b8d824e8ed26bebbdf.jpg`}
                      alt={`Réalisation sur mesure `}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </div>
             
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg text-center shadow-sm border">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Des questions ?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant notre service de
              fabrication sur mesure.
            </p>
            <Button className="bg-[#065053] hover:bg-[#065053]/90">Contactez-nous</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
