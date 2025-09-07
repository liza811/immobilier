export interface Meuble {
  id: string
  nom: string
  prix: number
  description: string
  categorie: string
  couleur: string
  materiaux: string[]
  dimensions: {
    largeur: number
    hauteur: number
    profondeur: number
  }
  image: string
  liked: boolean
  enStock: boolean
  nouveaute: boolean
  promotion: boolean
  pourcentagePromotion?: number
}

export const categories = ["Salon", "Chambre", "Cuisine", "Bureau", "Salle à manger", "Salle de bain", "Extérieur"]

export const couleurs = ["Blanc", "Noir", "Gris", "Marron", "Beige", "Bleu", "Vert", "Rouge", "Jaune"]

export const materiaux = ["Bois", "Métal", "Verre", "Plastique", "Tissu", "Cuir", "Marbre"]

export const meubles: Meuble[] = [
  {
    id: "1",
    nom: "Canapé Confort Plus",
    prix: 899,
    description:
      "Canapé 3 places en tissu avec coussins moelleux et structure en bois massif. Parfait pour votre salon, ce canapé allie confort et élégance.",
    categorie: "Salon",
    couleur: "Gris",
    materiaux: ["Tissu", "Bois"],
    dimensions: {
      largeur: 220,
      hauteur: 85,
      profondeur: 95,
    },
    image: "https://i.pinimg.com/736x/39/7c/f4/397cf480add9d80167380ad355f632cb.jpg",
    liked: false,
    enStock: true,
    nouveaute: true,
    promotion: false,
  },
  {
    id: "2",
    nom: "Table Basse Moderne",
    prix: 299,
    description:
      "Table basse au design épuré avec plateau en verre et pieds en métal noir. Cette table basse apportera une touche de modernité à votre salon.",
    categorie: "Salon",
    couleur: "Noir",
    materiaux: ["Verre", "Métal"],
    dimensions: {
      largeur: 120,
      hauteur: 45,
      profondeur: 60,
    },
    image: "https://i.pinimg.com/736x/f5/c0/67/f5c067bbe753076fe03f3554f83f61e2.jpg",
    liked: true,
    enStock: true,
    nouveaute: false,
    promotion: true,
    pourcentagePromotion: 15,
  },
  {
    id: "3",
    nom: "Lit Queen Size Luxe",
    prix: 799,
    description:
      "Lit queen size avec tête de lit capitonnée et sommier à lattes inclus. Ce lit élégant sera le point central de votre chambre à coucher.",
    categorie: "Chambre",
    couleur: "Beige",
    materiaux: ["Tissu", "Bois"],
    dimensions: {
      largeur: 160,
      hauteur: 120,
      profondeur: 200,
    },
    image: "https://i.pinimg.com/736x/b7/aa/50/b7aa50dfb76fcdbefbaf1f0e3fccd34f.jpg",
    liked: false,
    enStock: true,
    nouveaute: false,
    promotion: false,
  },
  {
    id: "4",
    nom: "Armoire Penderie Grande Capacité",
    prix: 599,
    description:
      "Armoire spacieuse avec penderie, étagères et tiroirs. Cette armoire offre un espace de rangement optimal pour votre garde-robe.",
    categorie: "Chambre",
    couleur: "Blanc",
    materiaux: ["Bois"],
    dimensions: {
      largeur: 180,
      hauteur: 220,
      profondeur: 60,
    },
    image: "https://i.pinimg.com/736x/a5/72/3f/a5723f3bc50fbf7d38482345934d35f9.jpg",
    liked: false,
    enStock: false,
    nouveaute: false,
    promotion: false,
  },
  {
    id: "5",
    nom: "Table à Manger Extensible",
    prix: 649,
    description:
      "Table à manger extensible en bois massif pouvant accueillir jusqu'à 8 personnes. Parfaite pour les dîners en famille ou entre amis.",
    categorie: "Salle à manger",
    couleur: "Marron",
    materiaux: ["Bois"],
    dimensions: {
      largeur: 180,
      hauteur: 75,
      profondeur: 90,
    },
    image: "https://i.pinimg.com/736x/f8/01/84/f801843188ea822a555b68f5c850f3c9.jpg",
    liked: true,
    enStock: true,
    nouveaute: false,
    promotion: false,
  },
  {
    id: "6",
    nom: "Chaise de Salle à Manger",
    prix: 129,
    description:
      "Chaise confortable avec assise rembourrée et structure en bois. Ces chaises élégantes compléteront parfaitement votre table à manger.",
    categorie: "Salle à manger",
    couleur: "Marron",
    materiaux: ["Tissu", "Bois"],
    dimensions: {
      largeur: 45,
      hauteur: 95,
      profondeur: 55,
    },
    image: "https://i.pinimg.com/736x/f2/e5/1f/f2e51f059ec2c9147d41c40d03f8ea96.jpg",
    liked: false,
    enStock: true,
    nouveaute: false,
    promotion: true,
    pourcentagePromotion: 10,
  },
  {
    id: "7",
    nom: "Bureau Informatique Angle",
    prix: 349,
    description:
      "Bureau d'angle avec espace pour ordinateur et rangements intégrés. Ce bureau fonctionnel optimisera votre espace de travail.",
    categorie: "Bureau",
    couleur: "Blanc",
    materiaux: ["Bois", "Métal"],
    dimensions: {
      largeur: 150,
      hauteur: 75,
      profondeur: 150,
    },
    image: "https://i.pinimg.com/736x/7d/3c/f6/7d3cf6bb4dec9d771dd8ee7b133ec59a.jpg",
    liked: false,
    enStock: true,
    nouveaute: true,
    promotion: false,
  },
  {
    id: "8",
    nom: "Fauteuil de Bureau Ergonomique",
    prix: 249,
    description:
      "Fauteuil de bureau ergonomique avec soutien lombaire et accoudoirs réglables. Idéal pour de longues heures de travail confortables.",
    categorie: "Bureau",
    couleur: "Noir",
    materiaux: ["Tissu", "Métal"],
    dimensions: {
      largeur: 65,
      hauteur: 120,
      profondeur: 65,
    },
    image: "https://i.pinimg.com/736x/01/67/f6/0167f6748e1a9f9c01e2ef9b8e6d8137.jpg",
    liked: true,
    enStock: true,
    nouveaute: false,
    promotion: false,
  },
  {
    id: "9",
    nom: "Meuble TV Multimédia",
    prix: 399,
    description:
      "Meuble TV avec multiples rangements pour appareils multimédia et collection de DVD. Ce meuble TV fonctionnel s'intégrera parfaitement dans votre salon.",
    categorie: "Salon",
    couleur: "Noir",
    materiaux: ["Bois", "Verre"],
    dimensions: {
      largeur: 180,
      hauteur: 45,
      profondeur: 40,
    },
    image: "https://i.pinimg.com/736x/80/42/5a/80425a3a6193e337715b67e781ca08e6.jpg",
    liked: false,
    enStock: true,
    nouveaute: false,
    promotion: false,
  },
  {
    id: "10",
    nom: "Étagère Bibliothèque",
    prix: 279,
    description:
      "Étagère bibliothèque avec 5 niveaux de rangement. Parfaite pour exposer vos livres et objets décoratifs.",
    categorie: "Salon",
    couleur: "Marron",
    materiaux: ["Bois"],
    dimensions: {
      largeur: 90,
      hauteur: 180,
      profondeur: 30,
    },
    image: "https://i.pinimg.com/736x/61/10/a5/6110a5c13d595726b239fef04ea84bba.jpg",
    liked: false,
    enStock: true,
    nouveaute: false,
    promotion: true,
    pourcentagePromotion: 20,
  },
  {
    id: "11",
    nom: "Ensemble Table et Chaises de Jardin",
    prix: 599,
    description:
      "Ensemble comprenant une table et 4 chaises pour votre jardin ou terrasse. Résistant aux intempéries et facile d'entretien.",
    categorie: "Extérieur",
    couleur: "Gris",
    materiaux: ["Métal", "Verre"],
    dimensions: {
      largeur: 120,
      hauteur: 75,
      profondeur: 120,
    },
    image: "https://i.pinimg.com/736x/5a/6a/51/5a6a51e2e216cd4b3a7280bd11638371.jpg",
    liked: false,
    enStock: true,
    nouveaute: true,
    promotion: false,
  },
  {
    id: "12",
    nom: "Commode 6 Tiroirs",
    prix: 449,
    description:
      "Commode spacieuse avec 6 tiroirs pour un rangement optimal. Cette commode élégante s'intégrera parfaitement dans votre chambre.",
    categorie: "Chambre",
    couleur: "Blanc",
    materiaux: ["Bois"],
    dimensions: {
      largeur: 120,
      hauteur: 80,
      profondeur: 45,
    },
    image: "https://i.pinimg.com/736x/62/fe/88/62fe88e264d0ddbb565379bc2dfc920e.jpg",
    liked: true,
    enStock: true,
    nouveaute: false,
    promotion: false,
  },
]
