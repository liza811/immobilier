"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Commander() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto py-8">
          <div className="bg-white border rounded-lg p-6 mb-8 shadow-sm">
            <h1 className="text-3xl font-bold text-gray-900">Commander</h1>
            <p className="mt-2 text-gray-600">Complétez votre commande en quelques étapes simples</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              {/* Stepper */}
              <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step >= 1 ? "bg-[#065053] text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    1
                  </div>
                  <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-[#065053]" : "bg-gray-200"}`}></div>
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step >= 2 ? "bg-[#065053] text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    2
                  </div>
                  <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-[#065053]" : "bg-gray-200"}`}></div>
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step >= 3 ? "bg-[#065053] text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    3
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className={step >= 1 ? "text-gray-900 font-medium" : "text-gray-500"}>Informations</span>
                  <span className={step >= 2 ? "text-gray-900 font-medium" : "text-gray-500"}>Livraison</span>
                  <span className={step >= 3 ? "text-gray-900 font-medium" : "text-gray-500"}>Paiement</span>
                </div>
              </div>

              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm border">
                  <h2 className="text-xl font-semibold text-gray-900">Informations personnelles</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prenom">Prénom</Label>
                      <Input id="prenom" placeholder="Votre prénom" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom</Label>
                      <Input id="nom" placeholder="Votre nom" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="votre.email@exemple.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input id="telephone" placeholder="Votre numéro de téléphone" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="adresse">Adresse</Label>
                    <Input id="adresse" placeholder="Votre adresse" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="code-postal">Code postal</Label>
                      <Input id="code-postal" placeholder="Code postal" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="ville">Ville</Label>
                      <Input id="ville" placeholder="Ville" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pays">Pays</Label>
                    <Select defaultValue="france">
                      <SelectTrigger id="pays">
                        <SelectValue placeholder="Sélectionnez un pays" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="france">France</SelectItem>
                        <SelectItem value="belgique">Belgique</SelectItem>
                        <SelectItem value="suisse">Suisse</SelectItem>
                        <SelectItem value="luxembourg">Luxembourg</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <label
                      htmlFor="newsletter"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Je souhaite recevoir la newsletter et les offres promotionnelles
                    </label>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={nextStep} className="bg-[#065053] hover:bg-[#065053]/90">
                      Continuer
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Shipping */}
              {step === 2 && (
                <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm border">
                  <h2 className="text-xl font-semibold text-gray-900">Options de livraison</h2>

                  <div className="space-y-4">
                    <RadioGroup defaultValue="standard">
                      <div className="flex items-start space-x-2 border p-4 rounded-md hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value="standard" id="standard" className="mt-1" />
                        <div className="grid gap-1.5">
                          <label htmlFor="standard" className="font-medium">
                            Livraison standard (3-5 jours ouvrés)
                          </label>
                          <p className="text-sm text-gray-500">Gratuite pour toute commande supérieure à 500€</p>
                        </div>
                        <div className="ml-auto font-medium">Gratuit</div>
                      </div>

                      <div className="flex items-start space-x-2 border p-4 rounded-md hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value="express" id="express" className="mt-1" />
                        <div className="grid gap-1.5">
                          <label htmlFor="express" className="font-medium">
                            Livraison express (1-2 jours ouvrés)
                          </label>
                          <p className="text-sm text-gray-500">Livraison rapide par transporteur</p>
                        </div>
                        <div className="ml-auto font-medium">15,00 €</div>
                      </div>

                      <div className="flex items-start space-x-2 border p-4 rounded-md hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value="installation" id="installation" className="mt-1" />
                        <div className="grid gap-1.5">
                          <label htmlFor="installation" className="font-medium">
                            Livraison avec installation
                          </label>
                          <p className="text-sm text-gray-500">Livraison et installation par nos équipes</p>
                        </div>
                        <div className="ml-auto font-medium">50,00 €</div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instructions">Instructions de livraison (optionnel)</Label>
                    <Textarea
                      id="instructions"
                      placeholder="Informations complémentaires pour la livraison (code d'entrée, étage, etc.)"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Retour
                    </Button>
                    <Button onClick={nextStep} className="bg-[#065053] hover:bg-[#065053]/90">
                      Continuer
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm border">
                  <h2 className="text-xl font-semibold text-gray-900">Paiement</h2>

                  <div className="space-y-4">
                    <RadioGroup defaultValue="card">
                      <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value="card" id="card" />
                        <label htmlFor="card" className="font-medium flex-1">
                          Carte bancaire
                        </label>
                        <div className="flex gap-2">
                          <div className="w-10 h-6 bg-gray-200 rounded"></div>
                          <div className="w-10 h-6 bg-gray-200 rounded"></div>
                          <div className="w-10 h-6 bg-gray-200 rounded"></div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <label htmlFor="paypal" className="font-medium flex-1">
                          PayPal
                        </label>
                        <div className="w-10 h-6 bg-gray-200 rounded"></div>
                      </div>

                      <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value="virement" id="virement" />
                        <label htmlFor="virement" className="font-medium flex-1">
                          Virement bancaire
                        </label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4 border p-4 rounded-md">
                    <h3 className="font-medium">Informations de carte</h3>

                    <div className="space-y-2">
                      <Label htmlFor="card-number">Numéro de carte</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Date d'expiration</Label>
                        <Input id="expiry" placeholder="MM/AA" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="card-name">Nom sur la carte</Label>
                      <Input id="card-name" placeholder="Nom complet" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      J'accepte les conditions générales de vente et la politique de confidentialité
                    </label>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Retour
                    </Button>
                    <Button className="bg-[#065053] hover:bg-[#065053]/90">Confirmer la commande</Button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="border rounded-lg p-6 sticky top-24 bg-white shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Récapitulatif de commande</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 bg-gray-100 rounded-md">
                      <Image
                        src="https://i.pinimg.com/736x/56/29/10/562910b1479f94df2dcd13f46a6bebfb.jpg"
                        alt="Canapé Confort Plus"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Canapé Confort Plus</h3>
                      <p className="text-sm text-gray-500">Gris, 3 places</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm">Qté: 1</span>
                        <span className="font-medium">899,00 €</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 bg-gray-100 rounded">
                      <Image
                        src="https://i.pinimg.com/736x/3b/6a/59/3b6a5949392dd80b1a1db345c48f8c71.jpg"
                        alt="Table Basse Moderne"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Table Basse Moderne</h3>
                      <p className="text-sm text-gray-500">Noir, Verre</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm">Qté: 1</span>
                        <span className="font-medium">254,15 €</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Sous-total</span>
                    <span>1 153,15 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Livraison</span>
                    <span>Gratuite</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>1 153,15 €</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="coupon">
                      <AccordionTrigger className="text-sm">Ajouter un code promo</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex gap-2">
                          <Input placeholder="Code promo" className="flex-1" />
                          <Button variant="outline" size="sm">
                            Appliquer
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <span className="font-medium">Paiement sécurisé</span>
                  </div>
                  <p className="text-sm mt-2 text-gray-500">
                    Toutes vos informations de paiement sont sécurisées et cryptées
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
