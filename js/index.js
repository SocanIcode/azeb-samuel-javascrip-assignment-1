import products from "./data.js";

// Function to get the productId from the URL
function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("productId"); // Extract the productId from the URL
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

      const buyNowButton = document.querySelector(".button-cta");

      // Add event listener to the "Buy Now" button
      buyNowButton.addEventListener("click", () => {
        const selectedSize = document.querySelector("#product-size").value;
        const quantity = document.querySelector(".quantity-input").value;

        // Store the selected data in localStorage before redirecting
        localStorage.setItem(
          "selectedProduct",
          JSON.stringify({
            product: product,
            selectedSize: selectedSize,
            quantity: quantity,
          })
        );

        // Optionally, you can redirect to checkout page immediately here
        window.location.href = "/html/checkout.html";
      });
    } else {
      // If product is not found, display an error message
      document.querySelector("#product-details").innerHTML =
        "<p>Product not found</p>";
    }
  }
}

// Call the function when the page loads
window.onload = displayProduct;
