// Select the elements
const subscribeButton = document.querySelector(".button");
const dismissButton = document.querySelector(".dismiss-button");
const subscribePage = document.querySelector(".subscribe-page");
const containerSuccess = document.querySelector(".container-success");

// Function to hide subscribe page and show success message
subscribeButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    subscribePage.style.display = "none"; // Hide the subscribe page
    containerSuccess.style.display = "flex"; // Show the success container
    e.stopPropagation();
});

// Function to go back to subscribe page 
dismissButton.addEventListener("click", () => {
    subscribePage.style.display = ""; // Show the subscribe page again
    containerSuccess.style.display = "none"; // Hide the success container
});
