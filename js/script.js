// Adds  and remove button for a small screen
const bar = document.querySelector("#bar");
const exit = document.querySelector("#exit");
const nav = document.querySelector(".navbar");

//to show or activate the navbar

bar.addEventListener("click", () => {
  nav.classList.add("active");
});

// Removes the class to hide or deactivate the navbar

exit.addEventListener("click", () => {
  nav.classList.remove("active");
});
//Sorting product by catgies
document
  .getElementById("toggleDropdown")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    const dropdown = this.querySelector(".dropdown");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });

window.onclick = function (event) {
  if (!event.target.closest("#toggleDropdown")) {
    document.querySelector(".dropdown").style.display = "none";
  }
};

function sortProducts(category) {
  if (category === "all") {
    window.location.href = "html/product.html";
  } else if (category === "men") {
    window.location.href = "html/product-catagroies/men.html";
  } else if (category === "women") {
    window.location.href = "html/product-catagroies/women.html";
  }
}
const buyNowButton = document.querySelector(".button-cta");
buyNowButton.addEventListener("click", () => {
  const selectedSize = document.querySelector("#product-size").value;
  const quantity = document.querySelector(".quantity-input").value;

  if (selectedSize === "Select Size") {
    alert("Please select a size before proceeding to checkout.");
    return;
  }

  // Store the product details in localStorage
  localStorage.setItem(
    "selectedProduct",
    JSON.stringify({
      product: product, // The current product
      selectedSize: sizeOption,
      quantity: parseInt(quantity),
    })
  );
});

// this is for delievery tracking
document.addEventListener("DOMContentLoaded", () => {
  const statusText = document.getElementById("status-text");
  const trackOrderButton = document.getElementById("track-order");
  const orderInput = document.getElementById("order-input");

  // Array of status messages
  const statuses = ["Order Prepared", "Out for Delivery", "Order Delivered"];
  let statusIndex = 0;

  // Function to update the status text
  setInterval(() => {
    statusIndex = (statusIndex + 1) % statuses.length; // Cycle through statuses
    statusText.textContent = statuses[statusIndex];
  }, 3000);

  // Order tracking validation
  trackOrderButton.addEventListener("click", () => {
    const orderNumber = orderInput.value.trim();

    // Check if input is exactly 11 digits and contains only numbers
    if (!/^\d{11}$/.test(orderNumber)) {
      alert("Invalid tracking number. Please enter an 11-digit number.");
    } else {
      alert("Tracking number accepted. Please wait for updates.");
    }
  });
});

// this is for acccount login password creditional be be valued with any for this assignment

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }
    //accept any value
    alert("Login successful! Welcome.");
    window.location.href = "index.html";
  });
