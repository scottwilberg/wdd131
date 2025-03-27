const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const templeContainer = document.getElementById('container');
const homeLink = document.querySelector('#home');
const oldLink = document.querySelector('#old');
const newLink = document.querySelector('#new');
const largeLink = document.querySelector('#large');
const smallLink = document.querySelector('#small');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
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
		templeName: "Louisville Kentucky",
		location: "Louisville, Kentucky, United States ",
		dedicated: "2000, March, 19",
		area: 10890,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/louisville-kentucky/400x250/louisville-temple-lds-408094-wallpaper.jpg"
	},
	{
		templeName: "Laie Hawaii",
		location: "Laie, Hawaii, United States",
		dedicated: "1983, August, 5-7",
		area: 42100,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-772761-wallpaper.jpg"
	},
	{
		templeName: "Brisbane Australia",
		location: "Kangaroo Point, Queensland, Australia",
		dedicated: "2003, June, 15",
		area: 10700,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brisbane-australia/400x250/brisbane-australia-temple-lds-745088-wallpaper.jpg"
	},
];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
	// document.querySelector(".container").innerHTML = "";
  	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		card.classList.add("temple-card");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let imageUrl = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
		imageUrl.setAttribute("src", temple.imageUrl);
		imageUrl.setAttribute("alt", `${temple.templeName} Temple`);
		imageUrl.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(imageUrl);

		document.querySelector(".container").appendChild(card);
  });
}


function clearTempleContainer() {
  templeContainer.innerHTML = ''; // Clears content before rendering new cards
}

// Event listeners for filtering
oldLink.addEventListener('click', () => {
  clearTempleContainer();
  let old = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  createTempleCard(old);
});

newLink.addEventListener('click', () => {
  clearTempleContainer();
  let newTemple = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 1900);
  createTempleCard(newTemple);
});

largeLink.addEventListener('click', () => {
  clearTempleContainer();
  let large = temples.filter(temple => temple.area > 90000);
  createTempleCard(large);
});

smallLink.addEventListener('click', () => {
  clearTempleContainer();
  let small = temples.filter(temple => temple.area < 10000);
  createTempleCard(small);
});

homeLink.addEventListener('click', () => {
  clearTempleContainer();
  createTempleCard(temples);
});
