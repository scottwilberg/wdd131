const currentYear = new Date().getFullYear();

const lastModified = document.lastModified;

document.getElementById('currentyear').textContent = currentYear;

document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;