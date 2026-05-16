// ============================================================
// RESTAURANT SITE DATA - Edit this file to customize your site
// ============================================================

export const siteConfig = {
  name: "Eiffelya",
  tagline: "Where Every Meal Tells a Story",
  description:
    "A family-owned restaurant group rooted in tradition, serving seasonally inspired dishes crafted from locally sourced ingredients across three distinctive locations.",
  url: "https://eiffelya.com",
  ogImage: "/images/og-image.jpg",
  email: "info@eiffelyasyria.com",

  phone: "+963941172242",
  socials: {
    // instagram: "https://instagram.com/eiffelya",
    facebook: "https://www.facebook.com/eiffelyasyria21",
    whatsapp: "https://wa.me/963941172242",
    map: "https://maps.app.goo.gl/y5qcA93mSGymMbuB8",
  },
};

  export const baseUrl = "https://eiffelyasyria.com";
  export const menuUrl = "https://menu.eiffelyasyria.com";
  export const FastfoodUrl = "https://fastfood.eiffelyasyria.com";

 export const MenuSectionsData = [
   {
     id: "family",
     slug: "family-dining",
     phone: "+963946100111",
     // address: "142 Main Street, Suite 100",
     city: "Portland, OR",
     image: "/images/gallery/dish-1.jpg",
     menuLink: menuUrl,
     hours: [{ dayKey: "days1", time: "10:00 AM - 02:00 AM" }],
   },
   {
     id: "fastFood",
     slug: "fast-food",
     phone: "+963948300333",
     // address: "88 Harbor Boulevard",
     city: "Portland, OR",
     image: "/images/gallery/dish-3.jpg",

     menuLink: FastfoodUrl,
     hours: [{ dayKey: "days1", time: "10:00 AM - 02:00 AM" }],
   },
 ];


export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

// export const teamMembers: TeamMember[] = [
//   {
//     name: "Maria Rossi",
//     role: "Founder & Executive Chef",
//     bio: "With over 25 years of culinary experience, Maria brings her Italian heritage and passion for seasonal cooking to every dish she creates.",
//     image: "/images/team/maria.jpg",
//   },
//   {
//     name: "James Chen",
//     role: "Head Chef, Downtown",
//     bio: "A graduate of the Culinary Institute of America, James blends classical technique with bold Asian-fusion flavors that keep guests coming back.",
//     image: "/images/team/james.jpg",
//   },
//   {
//     name: "Sofia Andersson",
//     role: "Head Chef, Waterfront",
//     bio: "Sofia's Scandinavian roots inspire her seafood-forward approach, transforming the freshest catches into unforgettable plates at our waterfront location.",
//     image: "/images/team/sofia.jpg",
//   },
//   {
//     name: "Lucas Moreau",
//     role: "Head Chef, Garden",
//     bio: "A champion of vegetable-forward cooking, Lucas tends our rooftop garden himself, letting the harvest guide each day's menu.",
//     image: "/images/team/lucas.jpg",
//   },
//   {
//     name: "Elena Vasquez",
//     role: "Pastry Chef",
//     bio: "Elena's desserts are edible art, drawing from her travels across South America and France to create pastries that are both nostalgic and surprising.",
//     image: "/images/team/elena.jpg",
//   },
//   {
//     name: "David Okafor",
//     role: "Sommelier & Beverage Director",
//     bio: "David curates our award-winning wine list and craft cocktail program, pairing each drink to complement and elevate the dining experience.",
//     image: "/images/team/david.jpg",
//   },
// ]

export interface MenuItem {
  name: string
  description: string
  price: string
  category: string
  tags?: string[]
  image?: string
}

export interface Location {
  slug: string
  name: string
  shortName: string
  tagline: string
  description: string
  address: string
  city: string
  phone: string
  hours: { days: string; time: string }[]
  image: string
  gallery: string[]
  features: string[]
  menu: MenuItem[]
}

export const locations: Location[] = [
  {
    slug: "Main",
    name: "Eiffelya ",
    shortName: "Eiffelya",
    tagline: "Where It All Began",
    description:
      "Our original location in the heart of the city. Intimate, warm, and full of the spirit that started it all. The exposed brick walls and candlelit tables create the perfect setting for an unforgettable meal.",
    address: "142 Main Street, Suite 100",
    city: "Portland, OR 97201",
    phone: "(555) 234-5678",
    hours: [
      { days: "Monday - Thursday", time: "5:00 PM - 10:00 PM" },
      { days: "Friday - Saturday", time: "5:00 PM - 11:00 PM" },
      { days: "Sunday", time: "4:00 PM - 9:00 PM" },
    ],
    image: "/images/locations/downtown.jpg",
    gallery: [
      "/images/locations/downtown-1.jpg",
      "/images/locations/downtown-2.jpg",
      "/images/locations/downtown-3.jpg",
    ],
    features: [
      "Private dining room",
      "Full bar",
      "Outdoor patio",
      "Chef's table experience",
    ],
    menu: [
      {
        name: "Burrata & Heirloom Tomatoes",
        description:
          "Creamy burrata with ripe heirloom tomatoes, basil oil, and aged balsamic on grilled sourdough.",
        price: "18",
        category: "Starters",
        tags: ["Vegetarian"],
        image: "/images/menu/burrata.jpg",
      },
      {
        name: "Wild Mushroom Risotto",
        description:
          "Arborio rice slowly cooked with a medley of foraged mushrooms, white truffle oil, and Parmigiano-Reggiano.",
        price: "24",
        category: "Starters",
        tags: ["Vegetarian", "Gluten-Free"],
      },
      {
        name: "Tuna Tartare",
        description:
          "Yellowfin tuna with avocado mousse, crispy wontons, and ponzu dressing.",
        price: "22",
        category: "Starters",
      },
      {
        name: "Pan-Seared Branzino",
        description:
          "Mediterranean sea bass with saffron-infused couscous, charred lemon, and caper beurre blanc.",
        price: "38",
        category: "Mains",
        tags: ["Gluten-Free"],
        image: "/images/menu/branzino.jpg",
      },
      {
        name: "Braised Short Rib",
        description:
          "Twelve-hour braised beef short rib with creamy polenta, gremolata, and red wine reduction.",
        price: "42",
        category: "Mains",
        image: "/images/menu/short-rib.jpg",
      },
      {
        name: "Handmade Pappardelle",
        description:
          "House-made pappardelle with slow-cooked lamb ragu, fresh ricotta, and mint.",
        price: "28",
        category: "Mains",
      },
      {
        name: "Grilled Heritage Pork Chop",
        description:
          "Bone-in pork chop with apple mostarda, roasted root vegetables, and sage jus.",
        price: "36",
        category: "Mains",
      },
      {
        name: "Tiramisu Classico",
        description:
          "Our signature recipe: espresso-soaked ladyfingers layered with mascarpone cream and dusted with cocoa.",
        price: "14",
        category: "Desserts",
        image: "/images/menu/tiramisu.jpg",
      },
      {
        name: "Dark Chocolate Fondant",
        description:
          "Warm chocolate cake with a molten center, served with vanilla bean gelato.",
        price: "16",
        category: "Desserts",
      },
      {
        name: "Seasonal Fruit Crostata",
        description:
          "Rustic tart with seasonal fruits, almond frangipane, and whipped cream.",
        price: "13",
        category: "Desserts",
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    slug: "waterfront",
    name: "The Hearth Waterfront",
    shortName: "Waterfront",
    tagline: "Flavors by the Sea",
    description:
      "Perched along the harbor, our waterfront location offers panoramic water views and a seafood-focused menu that celebrates the Pacific Northwest's bountiful coast.",
    address: "88 Harbor Boulevard",
    city: "Portland, OR 97209",
    phone: "(555) 345-6789",
    hours: [
      { days: "Monday - Thursday", time: "11:30 AM - 10:00 PM" },
      { days: "Friday - Saturday", time: "11:30 AM - 11:00 PM" },
      { days: "Sunday", time: "10:00 AM - 9:00 PM" },
    ],
    image: "/images/locations/waterfront.jpg",
    gallery: [
      "/images/locations/waterfront-1.jpg",
      "/images/locations/waterfront-2.jpg",
      "/images/locations/waterfront-3.jpg",
    ],
    features: [
      "Waterfront terrace",
      "Raw bar",
      "Sunday brunch",
      "Private events",
    ],
    menu: [
      {
        name: "Oysters on the Half Shell",
        description:
          "Half dozen Pacific oysters with mignonette, cocktail sauce, and fresh lemon.",
        price: "24",
        category: "Starters",
        tags: ["Gluten-Free"],
        image: "/images/menu/oysters.jpg",
      },
      {
        name: "Lobster Bisque",
        description:
          "Rich and velvety lobster bisque with crème fraiche, chives, and a touch of sherry.",
        price: "18",
        category: "Starters",
      },
      {
        name: "Seared Scallop Crudo",
        description:
          "Thinly sliced scallops with yuzu, jalapeño, and microgreens.",
        price: "20",
        category: "Starters",
        tags: ["Gluten-Free"],
      },
      {
        name: "Whole Grilled Lobster",
        description:
          "Maine lobster grilled over wood fire, served with drawn butter, corn on the cob, and coleslaw.",
        price: "58",
        category: "Mains",
        image: "/images/menu/lobster.jpg",
      },
      {
        name: "Pan-Roasted Halibut",
        description:
          "Wild halibut with English pea purée, crispy pancetta, and a light lemon beurre blanc.",
        price: "44",
        category: "Mains",
        tags: ["Gluten-Free"],
      },
      {
        name: "Seafood Linguine",
        description:
          "Clams, mussels, and shrimp tossed in linguine with a garlic white wine sauce and cherry tomatoes.",
        price: "34",
        category: "Mains",
        image: "/images/menu/seafood-linguine.jpg",
      },
      {
        name: "Cedar-Plank Salmon",
        description:
          "Wild-caught salmon roasted on cedar with maple glaze, wilted greens, and fingerling potatoes.",
        price: "38",
        category: "Mains",
      },
      {
        name: "Key Lime Pie",
        description:
          "Classic key lime pie with graham cracker crust and torched meringue.",
        price: "14",
        category: "Desserts",
      },
      {
        name: "Coconut Panna Cotta",
        description:
          "Silky coconut panna cotta with passion fruit coulis and toasted macadamia.",
        price: "13",
        category: "Desserts",
        tags: ["Gluten-Free"],
      },
    ],
  },
];




export const galleryImages = [
  { src: "/images/gallery/dish-1.jpg", alt: "Signature braised short rib" },
  { src: "/images/gallery/dish-2.jpg", alt: "Waterfront seafood platter" },
  { src: "/images/gallery/interior-1.jpg", alt: "Downtown dining room" },
  { src: "/images/gallery/dish-3.jpg", alt: "Garden seasonal plate" },
  { src: "/images/gallery/interior-2.jpg", alt: "Waterfront terrace view" },
  { src: "/images/gallery/dish-4.jpg", alt: "Artisan dessert presentation" },
]
