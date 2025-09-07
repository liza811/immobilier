export function Footer() {
  return (
    <footer className="bg-[#065053] text-white py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Mernache Meuble</h3>
              <p className="text-sm text-white/80">
                Votre spécialiste en mobilier de qualité depuis 2010. Nous proposons une large gamme de meubles pour
                tous les espaces de votre maison.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Accueil</li>
                <li>Catalogue</li>
                <li>Commander sur mesure</li>
                <li>À propos</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <address className="not-italic text-sm text-white/80 space-y-2">
                <p>123 Avenue des Meubles</p>
                <p>75000 Paris, France</p>
                <p>Téléphone: 01 23 45 67 89</p>
                <p>Email: contact@mernachemeuble.fr</p>
              </address>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Meuble. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
  )
}
