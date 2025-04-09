document.querySelector('#contactForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default behavior (e.g., page reload)

    // Get form input values
    const firstName = document.querySelector('[name="fname"]').value;
    const lastName = document.querySelector('[name="lname"]').value;
    const email = document.querySelector('[name="email"]').value;
    const inquiry = document.querySelector('[name="inquiry"]:checked')?.value || 'No Inquiry Selected';
    const message = document.querySelector('#message').value;

    // Save details to localStorage
    const contactDetails = {
        firstName,
        lastName,
        email,
        inquiry,
        message,
    };
    localStorage.setItem('contactDetails', JSON.stringify(contactDetails));

    // Redirect to the review confirmation page
    window.location.href = 'review-confirmation.html';
});

document.addEventListener("DOMContentLoaded", () => {
    // Review count logic
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCount", reviewCount);

    const counterDisplay = document.createElement("p");
    counterDisplay.textContent = `You have submitted ${reviewCount} review(s).`;
    document.body.appendChild(counterDisplay);

    // Retrieve and display form data
    const contactDetails = JSON.parse(localStorage.getItem("contactDetails")) || {};
    const detailsDisplay = document.createElement("div");
    detailsDisplay.innerHTML = `
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> ${contactDetails.firstName || 'N/A'} ${contactDetails.lastName || 'N/A'}</p>
        <p><strong>Email:</strong> ${contactDetails.email || 'N/A'}</p>
        <p><strong>Inquiry:</strong> ${contactDetails.inquiry || 'N/A'}</p>
        <p><strong>Message:</strong> ${contactDetails.message || 'N/A'}</p>
    `;
    document.body.appendChild(detailsDisplay);
});