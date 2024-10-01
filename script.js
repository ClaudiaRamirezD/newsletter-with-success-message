// Select the elements
const subscribeButton = document.querySelector(".button");
const dismissButton = document.querySelector(".dismiss-button");
const subscribePage = document.querySelector(".subscribe-page");
const containerSuccess = document.querySelector(".container-success");
const emailInput = document.querySelector("#emailInput");
const emailDisplay = document.querySelector(".emailDisplay");
const errorMessage = document.querySelector(".error");

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to hide subscribe page and show success message
subscribeButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    const emailValue = emailInput.value;

    if (!emailRegex.test(emailValue)) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        //Show success message and display the mail
        emailDisplay.textContent = emailValue;
        subscribePage.style.display = "none"; // Hide the subscribe page
        containerSuccess.style.display = "flex"; // Show the success container
    }
    e.stopPropagation();
});

// Function to go back to subscribe page 
dismissButton.addEventListener("click", () => {
    subscribePage.style.display = ""; // Show the subscribe page again
    containerSuccess.style.display = "none"; // Hide the success container
});
