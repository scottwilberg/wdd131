const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const seedImageMap = {
    "acorn-squash": "acorn.jpg",
    "armenian-cucumber": "armenian.jpg",
    "bush-beans": "bush-bean.jpg",
    "butternut-squash": "butternut.jpg",
    "cabbage": "cabbage.jpg",
    "carrots": "carrots.jpg",
    "cucumber": "cucumber.jpg",
    "dark-red-beets": "dark-beet.jpg",
    "radishes": "radishes.jpg",
    "red-beet": "red-beet.jpg",
    "straightneck-squash": "straightneck.jpg",
    "sugar-snap-pea": "sugar-snap-pea.jpg",
    "turnip": "turnip.jpg",
    "zucchini": "zucchini.jpg"
};

const seedData = {
    "acorn-squash": {
        germination: "7–10 days",
        depth: "1 inch",
        spacing: "6 feet apart",
        harvest: "75 days",
        planting: "Late May to June"
    },
    "armenian-cucumber": {
        germination: "6 days",
        depth: "1/2 inch",
        spacing: "4 feet apart",
        harvest: "55 days",
        planting: "Late May to June"
    },
    "bush-beans": {
        germination: "6–8 days",
        depth: "1 inch",
        spacing: "3–4 inches apart",
        harvest: "52 days",
        planting: "Late May to June"
    },
    "butternut-squash": {
        germination: "7–10 days",
        depth: "1 inch",
        spacing: "6 feet apart",
        harvest: "85 days",
        planting: "Late May to June"
    },
    "cabbage": {
        germination: "10–12 days",
        depth: "1/2 inch",
        spacing: "21 inches apart",
        harvest: "71 days",
        planting: "April - June"
    },
    "carrots": {
        germination: "14-21 days",
        depth: "1/2 inch",
        spacing: "3 inches apart",
        harvest: "75 days",
        planting: "April - June"
    },
    "cucumber": {
        germination: "6–10 days",
        depth: "1/2 inch",
        spacing: "4 feet apart",
        harvest: "80 days",
        planting: "Late May to June"
    },
    "dark-red-beets": {
        germination: "14–21 days",
        depth: "1/2 inch",
        spacing: "1/2 inches apart",
        harvest: "59 days",
        planting: "April - June"
    },
    "radishes": {
        germination: "4–7 days",
        depth: "1/2 inch",
        spacing: "1 inches apart",
        harvest: "22 days",
        planting: "April - June"
    },
    "red-beet": {
        germination: "14-21 days",
        depth: "1/2 inch",
        spacing: "3 inches apart",
        harvest: "49 days",
        planting: "April - June"
    },
    "straightneck-squash": {
        germination: "7–10 days",
        depth: "1 inch",
        spacing: "3–4 feet apart",
        harvest: "50 days",
        planting: "Late May to June"
    },
    "sugar-snap-pea": {
        germination: "7–10 days",
        depth: "2 inch",
        spacing: "6 inches apart",
        harvest: "64 days",
        planting: "April - June"
    },
    "turnip": {
        germination: "7–10 days",
        depth: "1/2 inch",
        spacing: "18 inches apart",
        harvest: "55 days",
        planting: "April - June"
    },
    "zucchini": {
        germination: "8–10 days",
        depth: "1 inch",
        spacing: "4 feet apart",
        harvest: "50 days",
        planting: "Late May to June"
    }
};

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('product').addEventListener('change', showSeedImage);
    populateDropdown();
    populateAllSeedImages();
});

function populateAllSeedImages() {
    const allImagesContainer = document.getElementById('all-seed-images');
    allImagesContainer.innerHTML = ''; 
    Object.keys(seedImageMap).forEach(seed => {
        const img = document.createElement('img');
        img.src = `images/${seedImageMap[seed]}`;
        img.alt = seed.replace(/-/g, ' ');
        img.classList.add('seed-image');
        img.loading = 'lazy';
        img.style.width = '200px'; 
        img.style.margin = '10px';
        allImagesContainer.appendChild(img);
    });
    allImagesContainer.style.display = 'flex';
    allImagesContainer.style.flexWrap = 'wrap';
    allImagesContainer.style.justifyContent = 'center';
    allImagesContainer.style.marginTop = '20px';
}

function showSeedImage() {
    const selectedSeed = document.getElementById('product').value;
    const seedImage = document.getElementById('selected-seed-image');
    const seedCaption = document.getElementById('selected-seed-caption');
    const allImagesContainer = document.getElementById('all-seed-images');

    if (seedImageMap[selectedSeed]) {
        seedImage.src = `images/${seedImageMap[selectedSeed]}`;
        seedImage.alt = selectedSeed.replace(/-/g, ' ');
        seedCaption.textContent = selectedSeed.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
        seedImage.style.display = 'block';
        allImagesContainer.style.display = 'none'; // Hide all seed images
    } else {
        seedImage.src = "";
        seedCaption.textContent = "";
        seedImage.style.display = 'none';
        allImagesContainer.style.display = 'flex'; // Show all images again
    }
}

function updateSeedDetails() {
    const selectedSeed = document.getElementById('product').value;
    const detailsContainer = document.getElementById('seed-details');

    if (seedData[selectedSeed]) {
        const { germination, depth, spacing, harvest, planting } = seedData[selectedSeed];
        detailsContainer.innerHTML = `
            <p><strong>Days to Germinate:</strong> ${germination}</p>
            <p><strong>Depth to Plant:</strong> ${depth}</p>
            <p><strong>Spacing:</strong> ${spacing}</p>
            <p><strong>Days to Harvest:</strong> ${harvest}</p>
            <p><strong>When to Plant:</strong> ${planting}</p>
        `;
    } else {
        detailsContainer.innerHTML = '<p>Please select a seed to see details.</p>';
    }
}

document.getElementById('product').addEventListener('change', updateSeedDetails);

function displayGreeting() {
    const currentHour = new Date().getHours();
    const greeting = document.getElementById('greeting');
    if (currentHour < 12) {
        greeting.textContent = `Good morning! 🌞 Welcome to Wilberg Vegetable Garden.`;
    } else if (currentHour < 18) {
        greeting.textContent = `Good afternoon! 🌻 Keep your garden growing!`;
    } else {
        greeting.textContent = `Good evening! 🌙 Relax and plan your next planting.`;
    }
}

window.onload = displayGreeting;

function populateDropdown() {
    const dropdown = document.getElementById('product');
    dropdown.innerHTML = '<option value="" disabled selected>Choose a Seed...</option>'; // Clear existing options
    const seeds = Object.keys(seedData); 
    seeds.forEach(seed => {
        const option = document.createElement('option');
        option.value = seed; 
        option.textContent = seed.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()); // Format text
        dropdown.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateDropdown);

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent page refresh
    const firstName = document.querySelector('[name="fname"]').value;
    const lastName = document.querySelector('[name="lname"]').value;
    const email = document.querySelector('[name="email"]').value;
    const message = document.querySelector('#message').value;

    // Simple conditional branching
    if (!firstName || !lastName || !email) {
        alert('Please fill out all required fields!');
        return;
    }

    // Save to localStorage as an object
    const contactInfo = { firstName, lastName, email, message };
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));

    // Display feedback
    alert(`Thank you, ${firstName}! Your message has been submitted.`);
}

document.querySelector('form').addEventListener('submit', handleFormSubmit);

