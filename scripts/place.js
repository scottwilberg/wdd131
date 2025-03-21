
window.addEventListener('resize', debounce(adjustPositions, 100));

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function adjustPositions() {
    const dataCard = document.querySelector('.data-card');
    const weatherCard = document.querySelector('.weather-card');
    const heroImage = document.querySelector('.hero img');

    if (!dataCard || !weatherCard || !heroImage) {
        console.error('One or more elements not found');
        return;
    }

    const headerHeight = document.querySelector('header').offsetHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;

    dataCard.style.top = `${headerHeight + 20}px`;
    weatherCard.style.bottom = `${footerHeight + 20}px`;

    if (window.innerWidth >= 500) {
        dataCard.style.left = '20px';
        weatherCard.style.right = '20px';
    } else {
        dataCard.style.left = '0';
        weatherCard.style.right = '0';
    }
}

adjustPositions();

// Static values for temperature and wind speed
const temperature = 50; // in Fahrenheit
const windSpeed = 50; // in mph

// Function to calculate windchill factor
function calculateWindChill(temp, speed) {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
}

// Function to display windchill factor
function displayWindChill() {
    const windChillElement = document.querySelector('.weather-card table tr:last-child td:last-child');
    let windChill;

    // Check if conditions are met for windchill calculation
    if (temperature <= 50 && windSpeed > 3) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(2);
    } else {
        windChill = "N/A";
    }

    windChillElement.textContent = `${windChill} degrees`;
}

// Call the function to display windchill when the page loads
window.addEventListener('load', displayWindChill);