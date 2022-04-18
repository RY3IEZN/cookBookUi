/** @format */

const trendingRecipes = [
  {
    id: 1,
    name: "Spaghetti With Shrimp Sauce",
    image: require("../assets/spagetti.png"),
    duration: "30 mins",
    serving: 1,
    isBookmark: false,
    category: "Pasta",
    author: {
      profilePic: require("../assets/dummy_profiles/profile-pic-5.png"),
      name: "Maria",
    },
    ingredients: [
      {
        id: 1,
        icon: require("../assets/laksa.png"),
        description: "Spaghetti pasta",
        quantity: "100g",
      },
      {
        id: 2,
        icon: require("../assets/icons/oil.png"),
        description: "Olive Oil",
        quantity: "2 tbsp",
      },
      {
        id: 3,
        icon: require("../assets/icons/shrimp.png"),
        description: "Fresh Shrimp",
        quantity: "100g",
      },
      {
        id: 4,
        icon: require("../assets/icons/tomato.png"),
        description: "Campari tomatoes",
        quantity: "100g",
      },
      {
        id: 5,
        icon: require("../assets/icons/salt.png"),
        description: "Salt",
        quantity: "¾ tbsp",
      },
      {
        id: 6,
        icon: require("../assets/icons/pepper.png"),
        description: "Black Pepper",
        quantity: "¼ tbsp",
      },
    ],
    viewers: [
      {
        id: 1,
        profilePic: require("../assets/dummy_profiles/profile-pic-1.png"),
      },
      {
        id: 2,
        profilePic: require("../assets/dummy_profiles/profile-pic-2.png"),
      },
      {
        id: 3,
        profilePic: require("../assets/dummy_profiles/profile-pic-3.png"),
      },
      {
        id: 4,
        profilePic: require("../assets/dummy_profiles/profile-pic-4.png"),
      },
    ],
  },
  {
    id: 2,
    name: "Malaysian Chicken Satay",
    image: require("../assets/satay.png"),
    duration: "50 mins",
    serving: 10,
    isBookmark: true,
    category: "Local",
    author: {
      profilePic: require("../assets/dummy_profiles/profile-pic-8.png"),
      name: "Mandy",
    },
    ingredients: [
      {
        id: 1,
        icon: require("../assets/icons/chicken.png"),
        description: "Boneless Chicken Thighs",
        quantity: "1kg",
      },
      {
        id: 2,
        icon: require("../assets/icons/lemongrass.png"),
        description: "Lemongrass stalk",
        quantity: "1 stalk",
      },
      {
        id: 3,
        icon: require("../assets/icons/onion.png"),
        description: "Large Onion",
        quantity: "1",
      },
      {
        id: 4,
        icon: require("../assets/icons/garlic.png"),
        description: "Garlic cloves",
        quantity: "5",
      },
      {
        id: 5,
        icon: require("../assets/icons/coriander.png"),
        description: "Coriander",
        quantity: "1 tsp",
      },
    ],
    viewers: [
      {
        id: 1,
        profilePic: require("../assets/dummy_profiles/profile-pic-1.png"),
      },
      {
        id: 2,
        profilePic: require("../assets/dummy_profiles/profile-pic-4.png"),
      },
      {
        id: 3,
        profilePic: require("../assets/dummy_profiles/profile-pic-1.png"),
      },
      {
        id: 4,
        profilePic: require("../assets/dummy_profiles/profile-pic-2.png"),
      },
      {
        id: 5,
        profilePic: require("../assets/dummy_profiles/profile-pic-3.png"),
      },
    ],
  },
  {
    id: 3,
    name: "Sarawak Laksa",
    image: require("../assets/laksa.png"),
    duration: "30 mins",
    serving: 1,
    isBookmark: true,
    category: "Local",
    author: {
      profilePic: require("../assets/dummy_profiles/profile-pic-9.png"),
      name: "Jessie",
    },
    ingredients: [
      {
        id: 1,
        icon: require("../assets/icons/garlic.png"),
        description: "Garlic cloves",
        quantity: "3",
      },
      {
        id: 2,
        icon: require("../assets/icons/lemongrass.png"),
        description: "Lemongrass",
        quantity: "2 stalks",
      },
      {
        id: 3,
        icon: require("../assets/icons/egg.png"),
        description: "Egg",
        quantity: "2",
      },
      {
        id: 4,
        icon: require("../assets/icons/shrimp.png"),
        description: "Fresh Shrimp",
        quantity: "100g",
      },
      {
        id: 5,
        icon: require("../assets/icons/shallot.png"),
        description: "Shallot",
        quantity: "4",
      },
      {
        id: 6,
        icon: require("../assets/icons/settings.png"),
        description: "vermicelli",
        quantity: "100g",
      },
    ],
    viewers: [
      {
        id: 1,
        name: "User 1",
        profilePic: require("../assets/dummy_profiles/profile-pic-1.png"),
      },
      {
        id: 2,
        name: "User 2",
        profilePic: require("../assets/dummy_profiles/profile-pic-2.png"),
      },
      {
        id: 3,
        name: "User 3",
        profilePic: require("../assets/dummy_profiles/profile-pic-3.png"),
      },
    ],
  },
  {
    id: 4,
    name: "Nasi Lemak",
    image: require("../assets/nasi-lemak.webp"),
    duration: "1 hour",
    serving: 10,
    isBookmark: true,
    category: "Local",
    author: {
      profilePic: require("../assets/dummy_profiles/profile-pic-7.png"),
      name: "Ali Baba",
    },
    ingredients: [
      {
        id: 1,
        icon: require("../assets/icons/chilli.png"),
        description: "Dried Chilli",
        quantity: "30g",
      },
      {
        id: 2,
        icon: require("../assets/icons/garlic.png"),
        description: "Garlic cloves",
        quantity: "3",
      },
      {
        id: 3,
        icon: require("../assets/icons/egg.png"),
        description: "Egg",
        quantity: "10",
      },
      {
        id: 4,
        icon: require("../assets/icons/rice.png"),
        description: "rice",
        quantity: "1kg",
      },
      {
        id: 5,
        icon: require("../assets/icons/anchovy.png"),
        description: "Dried anchovies",
        quantity: "3 cups",
      },
    ],
    viewers: [],
  },
];

const categories = trendingRecipes;

export default {
  trendingRecipes,
  categories,
};
