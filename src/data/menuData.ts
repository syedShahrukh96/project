export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "chaats-snacks",
    name: "CHAATS & SNACKS",
    items: [
      {
        id: "pani-puri",
        name: "Pani Puri",
        price: 7.99,
        description: "Hollow crispy puris filled with spicy potato mixture and tangy tamarind water"
      },
      {
        id: "samosa",
        name: "Samosa",
        price: 5.99,
        description: "Crispy pastry filled with spiced potatoes and peas"
      },
      {
        id: "bhel-puri",
        name: "Bhel Puri",
        price: 6.99,
        description: "Puffed rice, vegetables and tangy tamarind sauce"
      },
      {
        id: "aloo-tikki",
        name: "Aloo Tikki",
        price: 6.99,
        description: "Spiced potato patties served with chickpea curry and chutneys"
      }
    ]
  },
  {
    id: "south-indian",
    name: "SOUTH INDIAN",
    items: [
      {
        id: "masala-dosa",
        name: "Masala Dosa",
        price: 10.99,
        description: "Crispy rice crepe filled with spiced potato filling, served with sambar and chutney"
      },
      {
        id: "idli-sambar",
        name: "Idli Sambar",
        price: 8.99,
        description: "Steamed rice cakes served with lentil soup and coconut chutney"
      },
      {
        id: "uttapam",
        name: "Uttapam",
        price: 9.99,
        description: "Thick rice pancake topped with onions, tomatoes, and cilantro"
      },
      {
        id: "vada",
        name: "Vada",
        price: 7.99,
        description: "Crispy lentil donuts served with sambar and coconut chutney"
      }
    ]
  },
  {
    id: "entrees",
    name: "ENTREES",
    items: [
      {
        id: "paneer-butter-masala",
        name: "Paneer Butter Masala",
        price: 14.99,
        description: "Cottage cheese cubes in rich tomato and butter gravy"
      },
      {
        id: "chana-masala",
        name: "Chana Masala",
        price: 12.99,
        description: "Chickpeas cooked with onions, tomatoes and aromatic spices"
      },
      {
        id: "dal-makhani",
        name: "Dal Makhani",
        price: 13.99,
        description: "Black lentils and kidney beans slow-cooked with cream and butter"
      },
      {
        id: "vegetable-korma",
        name: "Vegetable Korma",
        price: 13.99,
        description: "Mixed vegetables in a creamy cashew and coconut sauce"
      }
    ]
  },
  {
    id: "swati-specials",
    name: "SWATI SPECIALS",
    items: [
      {
        id: "chole-bhature",
        name: "Chole Bhature",
        price: 15.99,
        description: "Spiced chickpea curry served with deep-fried bread"
      },
      {
        id: "pav-bhaji",
        name: "Pav Bhaji",
        price: 12.99,
        description: "Spiced vegetable mash served with buttered bread rolls"
      },
      {
        id: "thali",
        name: "Swati Special Thali",
        price: 19.99,
        description: "Complete meal with assorted breads, rice, curries, and dessert"
      },
      {
        id: "biryani",
        name: "Vegetable Biryani",
        price: 16.99,
        description: "Fragrant basmati rice cooked with vegetables and aromatic spices"
      }
    ]
  },
  {
    id: "mini-meals",
    name: "MINI MEALS",
    items: [
      {
        id: "rajma-chawal",
        name: "Rajma Chawal",
        price: 11.99,
        description: "Kidney bean curry served with steamed rice"
      },
      {
        id: "kadhi-chawal",
        name: "Kadhi Chawal",
        price: 11.99,
        description: "Yogurt-based curry with pakoras served with steamed rice"
      },
      {
        id: "dal-chawal",
        name: "Dal Chawal",
        price: 10.99,
        description: "Yellow lentil curry served with steamed rice"
      },
      {
        id: "curd-rice",
        name: "Curd Rice",
        price: 9.99,
        description: "Yogurt mixed with rice, tempered with mustard seeds and curry leaves"
      }
    ]
  },
  {
    id: "parathas",
    name: "PARATHAS",
    items: [
      {
        id: "aloo-paratha",
        name: "Aloo Paratha",
        price: 8.99,
        description: "Whole wheat bread stuffed with spiced potatoes"
      },
      {
        id: "gobi-paratha",
        name: "Gobi Paratha",
        price: 8.99,
        description: "Whole wheat bread stuffed with spiced cauliflower"
      },
      {
        id: "paneer-paratha",
        name: "Paneer Paratha",
        price: 9.99,
        description: "Whole wheat bread stuffed with spiced cottage cheese"
      },
      {
        id: "laccha-paratha",
        name: "Laccha Paratha",
        price: 7.99,
        description: "Layered whole wheat bread"
      }
    ]
  },
  {
    id: "lentils-legumes-rice",
    name: "LENTILS, LEGUMES & RICE",
    items: [
      {
        id: "yellow-dal",
        name: "Yellow Dal Tadka",
        price: 11.99,
        description: "Yellow lentils tempered with cumin, garlic, and spices"
      },
      {
        id: "rajma",
        name: "Rajma",
        price: 12.99,
        description: "Kidney beans cooked in a thick tomato-based gravy"
      },
      {
        id: "jeera-rice",
        name: "Jeera Rice",
        price: 6.99,
        description: "Basmati rice tempered with cumin seeds"
      },
      {
        id: "pulao",
        name: "Vegetable Pulao",
        price: 9.99,
        description: "Basmati rice cooked with mixed vegetables and spices"
      }
    ]
  },
  {
    id: "breads",
    name: "BREADS",
    items: [
      {
        id: "naan",
        name: "Butter Naan",
        price: 3.99,
        description: "Leavened bread baked in tandoor and brushed with butter"
      },
      {
        id: "roti",
        name: "Tandoori Roti",
        price: 2.99,
        description: "Whole wheat bread baked in tandoor"
      },
      {
        id: "garlic-naan",
        name: "Garlic Naan",
        price: 4.99,
        description: "Leavened bread topped with garlic and cilantro"
      },
      {
        id: "kulcha",
        name: "Onion Kulcha",
        price: 4.99,
        description: "Leavened bread stuffed with spiced onions"
      }
    ]
  },
  {
    id: "desserts",
    name: "DESSERTS",
    items: [
      {
        id: "gulab-jamun",
        name: "Gulab Jamun",
        price: 5.99,
        description: "Deep-fried milk solids soaked in sugar syrup"
      },
      {
        id: "rasgulla",
        name: "Rasgulla",
        price: 5.99,
        description: "Soft cheese balls soaked in light sugar syrup"
      },
      {
        id: "kheer",
        name: "Rice Kheer",
        price: 6.99,
        description: "Rice pudding with nuts and cardamom"
      },
      {
        id: "gajar-halwa",
        name: "Gajar Halwa",
        price: 7.99,
        description: "Carrot pudding with nuts and cardamom"
      }
    ]
  },
  {
    id: "beverages",
    name: "BEVERAGES",
    items: [
      {
        id: "masala-chai",
        name: "Masala Chai",
        price: 3.99,
        description: "Spiced tea with milk"
      },
      {
        id: "mango-lassi",
        name: "Mango Lassi",
        price: 4.99,
        description: "Yogurt drink blended with mango pulp"
      },
      {
        id: "sweet-lassi",
        name: "Sweet Lassi",
        price: 4.99,
        description: "Sweetened yogurt drink with cardamom"
      },
      {
        id: "nimbu-pani",
        name: "Nimbu Pani",
        price: 3.99,
        description: "Fresh lime juice with water, sugar, and a hint of salt"
      }
    ]
  }
];