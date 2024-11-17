import products from "./data.js";

function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("productId");
}

// Function to display the product details
function displayProduct() {
  const productId = getProductId(); // Get productId from the URL
  if (productId !== null) {
    // Find the product based on the productId
    const product = products.find((p) => p.id === parseInt(productId));
    if (product) {
      // Map content from product to HTML elements
      document.querySelector("#main-img").src = product.image;
      document.querySelector("#main-img").alt = product.altText;

      // Here we're mapping the data to corresponding elements on the page
      document.querySelector("#product-brand").textContent = product.brand;
      document.querySelector("#product-title").textContent = product.title;
      document.querySelector("#product-price").textContent = product.price;
      document.querySelector("#product-description").textContent =
        product.description;

      // Additional code to handle dynamic size and quantity
      // Select size dropdown can be populated or handled dynamically
      // Quantity input is already available to adjust the quantity to add to cart
    } else {
      // If product is not found, display an error message
      document.querySelector("#product-details").innerHTML =
        "<p>Product not found</p>";
    }
  }
}

// Call the function when the page loads
window.onload = displayProduct;
