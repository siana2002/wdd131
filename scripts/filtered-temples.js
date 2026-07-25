const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const title = document.querySelector(".title");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
	title.classList.toggle("hide");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Nuku'alofa, Tonga",
    location: "Nuku'alofa, Tonga",
    dedicated: "1983, August, 9-11",
    area: 21184,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/nuku'alofa-tonga-temple/nuku'alofa-tonga-temple-12094-main.jpg"
  },
  {
    templeName: "Apia, Samoa",
    location: "Apia, Samoa",
    dedicated: "1983, August, 5-7",
    area: 18691,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
  },
  {
    templeName: "Suva, Fiji",
    location: "Suva, Fiji",
    dedicated: "2000, June, 18",
    area: 12755,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/suva-fiji-temple/suva-fiji-temple-8571-main.jpg"
  },
];

const templeCards = document.querySelector("#templeCards");
function displayTemples(temples) {
  templeCards.innerHTML = ""

  temples.forEach(temple => {
    const card = document.createElement("section");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedication = document.createElement("p");
    dedication.textContent = `Dedication: ${temple.dedicated}`;

    const size = document.createElement("p");
    size.textContent = `Size: ${temple.area} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(size);
    card.appendChild(image);

    templeCards.appendChild(card);
  })
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", () => {
  pageTitle.textContent = "Home";
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
  const oldTemples = temples.filter(temple => 
    parseInt(temple.dedicated) < 1900
  );
  pageTitle.textContent = "Old Temples";
  displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
  const newTemples = temples.filter(temple =>
    parseInt(temple.dedicated) > 2000
  );
  pageTitle.textContent = "New Temples";
  displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
  const largeTemples = temples.filter(temple =>
    parseInt(temple.area) > 90000
  );
  pageTitle.textContent = "Large Temples";
  displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
  const smallTemples = temples.filter(temple =>
    parseInt(temple.area) > 10000
  );
  pageTitle.textContent = "Small Temples";
  displayTemples(smallTemples);
});