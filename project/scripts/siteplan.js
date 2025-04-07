const seeds = [
    'Acorn Squash',
    'Armenian Cucumber',
    'Bush Beans',
    'Butternut Squash',
    'Cabbage',
    'Carrot',
    'Cucumber',
    'Dark Red Beets',
    'Radishes',
    'Red Beets',
    'Straightneck Squash',
    'Sugar Snap Peas',
    'Turnips',
    'Zucchini'
];
const seedData = {
    "acorn-squash": {
        germination: "7–10 days",
        depth: "1 inch",
        spacing: "3–4 feet apart",
        harvest: "80–100 days",
        planting: "After last frost"
    },
    "armenian-cucumber": {
        germination: "7–14 days",
        depth: "1/2 inch",
        spacing: "18 inches apart",
        harvest: "60–75 days",
        planting: "After last frost"
    },
    "bush-beans": {
        germination: "6–10 days",
        depth: "1 inch",
        spacing: "3–4 inches apart",
        harvest: "50–60 days",
        planting: "After last frost"
    },
    // Add more seed details here...
};

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
    seeds.forEach(seed => {
        const option = document.createElement('option');
        option.value = seed.toLowerCase().replace(/\s+/g, '-'); // Creates a URL-friendly value
        option.textContent = seed;
        dropdown.appendChild(option);
    });
}

window.onload = populateDropdown;

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
