const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// FOODS PAGE
const foods = [
  {
    foodName: "Lamb Lu",
    description: "Tongan lamb wrapped in taro leaves and coconut cream.",
    serving: "Main Dish",
    calories: 550,
    imageUrl: "images/lamb-lu.jpeg"
  },
  {
    foodName: "Roasted Pig",
    description: "Roasted pig, tender and richly flavored.",
    serving: "Main Dish",
    calories: 650,
    imageUrl: "images/roasted-pig.jpeg"
  },
  {
    foodName: "Yam",
    description: "Starchy root vegetable, boiled or roasted until tender.",
    serving: "Side Dish",
    calories: 350,
    imageUrl: "images/yam.jpeg"
  },
  {
    foodName: "Marinated Raw Fish",
    description: "Fresh fish marinated in coconut cream and citrus.",
    serving: "Side Dish",
    calories: 350,
    imageUrl: "images/Marinated-raw-fish.jpeg"
  },
  {
    foodName: "Cooked Octopus",
    description: "Tender octopus, often cooked in coconut cream.",
    serving: "Main Dish",
    calories: 300,
    imageUrl: "images/octopus.jpeg"
  },
  {
    foodName: "Casava Pudding",
    description: "Creamy coconut dessert made with tapioca pearls.",
    serving: "Side Dish",
    calories: 100,
    imageUrl: "images/pudding.jpeg"
  },
  {
    foodName: "Cooked Bananas",
    description: "Fresh tropical fruit, often served as a side.",
    serving: "Side Dish",
    calories: 200,
    imageUrl: "images/bananas.jpeg"
  },
  {
    foodName: "Keke 'isite",
    description: "Sweet fried dough buns.",
    serving: "Side Dish",
    calories: 400,
    imageUrl: "images/keke.jpeg"
  },
] 

const foodCards = document.querySelector("#foodCards");
function displayFoods(foods) {
  foodCards.innerHTML = ""

  foods.forEach(food => {
    const card = document.createElement("section");

    const name = document.createElement("h2");
    name.textContent = food.foodName;

    const serving = document.createElement("p");
    serving.textContent = `SERVING: ${food.serving}`;

    const calories = document.createElement("p");
    calories.textContent = `CALORIES: ${food.calories}`;

    const description = document.createElement("p");
    description.textContent = `DESCRIPTION: ${food.description}`;

    const image = document.createElement("img");
    image.src = food.imageUrl;
    image.alt = food.foodName;
    image.loading = "lazy";

    card.appendChild(name)
    card.appendChild(image);
    card.appendChild(calories);
    card.appendChild(serving);
    card.appendChild(description);

    foodCards.appendChild(card);
  })
}

if (foodCards) {
  displayFoods(foods);
} else{
  console.log("Culture cards container not found. ")
}

// TRADITIONS & CULTURES PAGE

const traditions = [
  {
    tradition: "Family & Respect",
    description: "Respect is one of the most important values in Tongan culture. People show respect to parents, elders, chiefs, and guests through their words, actions, and behavior. Family is central to everyday life, and relatives often support one another through important events and daily responsibilities.",
    imageUrl: "images/family.jpeg"
  },
  {
    tradition: "The Monarchy",
    description: "Tonga is the only remaining constitutional monarchy in the Pacific that has never been fully colonized. The royal family plays an important role in the nation's identity, and many national celebrations honor the King and the royal family.",
    imageUrl: "images/monarchy.jpeg"
  },
  {
    tradition: "Kava Ceremony",
    description: "The Kava Ceremony is a traditional gathering where a drink made from the kava root is shared. It is held during important cultural, religious, and royal events and symbolizes respect, unity, and hospitality.",
    imageUrl: "images/kava.jpeg"
  },
  {
    tradition: "Traditional Dance (Lakalaka)",
    description: "The Lakalaka is Tonga's national dance and is performed at celebrations, festivals, and royal occasions. It combines graceful movements, singing, and storytelling, and has been recognized by UNESCO as an important part of Tonga's cultural heritage.",
    imageUrl: "images/lakalaka.jpeg"
  },
  {
    tradition: "Christianity",
    description: "Christianity has been a major influence in Tonga since the 19th century. Sunday is widely observed as a day of worship and rest, with many businesses closed while families attend church and spend time together.",
    imageUrl: "images/christianity.jpeg"
  },
  {
    tradition: "Traditional Dress",
    description: "Tongans often wear a taʻovala, a woven mat tied around the waist, for church, school, weddings, funerals, and formal occasions. It represents respect and is an important part of traditional attire.",
    imageUrl: "images/traditional-dress.jpeg"
  },
]

const cultureCards = document.querySelector("#cultureCards");
function displayCultures(traditions) {
  cultureCards.innerHTML = ""

  traditions.forEach(tradition => {
    const card = document.createElement("section");
    card.classList.add("culture-card");

    const name = document.createElement("h2");
    name.textContent = tradition.tradition;
    name.classList.add("tradition");

    const description = document.createElement("p");
    description.textContent = tradition.description;
    description.classList.add("description");

    const image = document.createElement("img");
    image.src = tradition.imageUrl;
    image.alt = tradition.tradition;
    image.loading = "lazy";

    card.appendChild(name)
    card.appendChild(image);
    card.appendChild(description);

    cultureCards.appendChild(card);
  })
}

if (cultureCards) {
  displayCultures(traditions);
} else{
  console.log("Culture cards container not found. ")
}

let visits = Number(localStorage.getItem("visits")) || 0;
visits++;
localStorage.setItem("visits", visits);

document.getElementById("visitCount").textContent = `You have visited this page ${visits} times.`;
