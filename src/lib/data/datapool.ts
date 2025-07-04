export const services = [
  {
    name: "Manicure",
    image: "/icons/Manicure.png",
    anchor: "manicure",
  },
  {
    name: "Pedicure",
    image: "/icons/Pedicure.png",
    anchor: "pedicure",
  },
  {
    name: "Nail Enhancement",
    image: "/icons/enhancement.png",
    anchor: "nail-enhancement",
  },
  {
    name: "Nail Art",
    image: "/icons/NailArt.png",
    anchor: "nail-art",
  },
  {
    name: "Removal",
    image: "/icons/PolishRemoval.png",
    anchor: "removal",
  },
  {
    name: "Waxing",
    image: "/icons/waxing.png",
    anchor: "waxing",
  },
  {
    name: "Eyelash Extension",
    image: "/icons/lashExtension.png",
    anchor: "eyelash-extension",
  },
] as const;

export const clientStories = [
  {
    name: "Priya Shrestha",
    service: "Manicure",
    story:
      "Every detail, from the polish to the pampering, felt so thoughtful. My hands have never looked or felt better!",
  },
  {
    name: "Anisha Giri",
    service: "Eyelash Extension",
    story:
      "The lashes are so light and fluttery. I honestly forget they're not mine! I feel glam even without makeup.",
  },
  {
    name: "Sneha K.C.",
    service: "Nail Art",
    story:
      "I showed them a design from Pinterest, and they made it even better! The precision and creativity blew me away.",
  },
] as const;

export const serviceData = {
  Manicure: {
    id: "manicure",
    image: "/images/manicure.jpg",
    services: [
      {
        name: "Express Manicure",
        price: "$25",
        description:
          "Short on time? Our express manicure includes trimming, shaping, cuticle care, a quick massage, and buff or polish.",
      },
      {
        name: "Signature Organic Herbal Manicure",
        price: "$45",
        description:
          "Soothing soak, sugar scrub, organic mask with warm towels, nail shaping, cuticle care, and a 7-minute massage.",
      },
      {
        name: "VIP Timeless Five Manicure",
        price: "$60",
        description:
          "Luxurious soak, Timeless Five sugar scrub, nourishing mask, 10-minute massage, and warm paraffin treatment.",
      },
      { name: "Paraffin Wax", price: "$10", description: "" },
      { name: "Shiny Buff", price: "$10", description: "" },
      { name: "Nail Fix", price: "$5+", description: "" },
    ],
  },
  Pedicure: {
    id: "pedicure",
    image: "/images/pedicure.jpg",
    services: [
      {
        name: "Express Pedicure",
        price: "$35",
        description:
          "Fruit salt soak, essential foot care, quick massage, warm towel wrap, finished with buff or polish.",
      },
      {
        name: "Signature Organic Herbal Pedicure",
        price: "$55",
        description:
          "Organic soak, sugar scrub, callus removal, hot towels, 7-minute massage, and your choice of polish.",
      },
      {
        name: "VIP Timeless Five Pedicure",
        price: "$70",
        description:
          "Deep exfoliation, Timeless Five scrub, hydrating mask, 10-minute massage, paraffin wax, and polish.",
      },
      {
        name: "Paradise 24k Golden Pedicure",
        price: "$90",
        description:
          "24K gold soak, scrub, mask, 15-minute hot stone massage, candle oil, paraffin wax, and polish.",
      },
      { name: "Extra Massage (10 Mins)", price: "$15", description: "" },
      { name: "Toenail Fix", price: "$5+", description: "" },
    ],
  },
  "Nail Enhancements": {
    id: "nail-enhancement",
    image: "/images/nailenhancement.jpg",
    services: [
      {
        name: "Dip Powder On Natural Nails",
        price: "$65+",
        description:
          "Durable dip powder manicure that lasts up to a month and promotes healthy nail growth.",
      },
      {
        name: "Structure Modern Gel On Natural Nails",
        price: "$70+",
        description:
          "Bio/Russian Gel application that strengthens and supports brittle nails with 4–5 weeks of durability.",
      },
      {
        name: "Gel-X Extension",
        price: "$75+",
        description:
          "Soft gel extensions that are safe, odorless, and provide full coverage with no dust or filing.",
      },
      {
        name: "Structure Modern Gel Extension",
        price: "$100+",
        description:
          "Lengthening gel using nail forms for a natural, sculpted finish with enhanced durability.",
      },
      { name: "Cateye", price: "$20", description: "" },
      { name: "Gel-X Medium", price: "$85", description: "" },
    ],
  },
  "Nail Art": {
    id: "nail-art",
    image: "/images/nailart.jpg",
    services: [
      {
        name: "Entry Level Nail Art",
        price: "$15+",
        description: "Glitter, chrome, holograms, and basic accents.",
      },
      {
        name: "Medium Level Nail Art",
        price: "$30+",
        description: "French tips, simple dots, gold flakes, and lines.",
      },
      {
        name: "High Level Nail Art",
        price: "$50+",
        description: "Swirls, marbles, abstract, negative space designs.",
      },
      {
        name: "Custom Level Nail Art",
        price: "$70+",
        description: "Fully custom and artistic design work.",
      },
    ],
  },
  Removal: {
    id: "removal",
    image: "/images/removal.jpg",
    services: [
      { name: "Regular Gel", price: "$5+", description: "" },
      { name: "Dip/Modern Gel/Gel-X", price: "$10+", description: "" },
      { name: "Hard Gel/Acrylic", price: "$20+", description: "" },
      {
        name: "* Removal without additional nail service",
        price: "+$5",
        description: "",
      },
    ],
  },
  Waxing: {
    id: "waxing",
    image: "/images/waxing.jpg",
    services: [
      { name: "Eyebrows", price: "$20", description: "" },
      { name: "Lip", price: "$12", description: "" },
      { name: "Chin", price: "$15", description: "" },
      { name: "Full Face", price: "$45", description: "" },
      { name: "Ears", price: "$15", description: "" },
      { name: "Nose", price: "$15", description: "" },
      { name: "Side Burns", price: "$20", description: "" },
      { name: "Underarms", price: "$25", description: "" },
      { name: "Half Arms", price: "$35", description: "" },
      { name: "Full Arms", price: "$50", description: "" },
      { name: "Half Legs", price: "$35", description: "" },
      { name: "Full Legs", price: "$60", description: "" },
    ],
  },
  "Eyelash Extensions": {
    id: "eyelash-extension",
    image: "/images/eyelashextension.jpg",
    services: [
      { name: "Eyelash Extensions Full Set", price: "$100+", description: "" },
      { name: "Eyelash Extensions Fill", price: "$65+", description: "" },
      { name: "Lash Lift", price: "$65", description: "" },
      { name: "Eyelash Remover", price: "$15", description: "" },
      { name: "Eyebrows Tint", price: "$30", description: "" },
      { name: "Eyebrows Wax + Tint Combo", price: "$45", description: "" },
    ],
  },
} as const;

export const imagesGallery = [
  "/gallery/eyelashextension.jpg",
  "/gallery/manicure.jpg",
  "/gallery/Model1.jpg",
  "/gallery/Model2.jpg",
  "/gallery/Model3.jpg",
  "/gallery/Model4.png",
  "/gallery/Model5.jpg",
  "/gallery/Model6.jpeg",
  "/gallery/Model7.jpeg",
  "/gallery/nailart.jpg",
  "/gallery/nailenhancement.jpg",
  "/gallery/pedicure.jpg",
  "/gallery/removal.jpg",
  "/gallery/SuriMJ.jpeg",
  "/gallery/waxing.jpg",
] ;
