// Function to display the selected product's details and calculate the total price
function displayCheckoutProduct() {
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

  if (selectedProduct) {
    const product = selectedProduct.product;
    const selectedSize = selectedProduct.selectedSize;
    const quantity = selectedProduct.quantity;
    const price = parseFloat(
      product.price.replace(" kr", "").replace(",", ".")
    ); // Extract price as a number

    // Map the selected product data to the checkout page
    document.querySelector(".checkout h4").textContent = product.title;
    document.querySelector(".checkout p").textContent = product.brand;
    document.querySelector(".checkout .pro-image img").src = product.image;
    document.querySelector(".checkout .pro-image img").alt = product.altText;
    document.querySelector(
      ".checkout #sizeOptions"
    ).textContent = `Size: ${selectedSize}`;
    document.querySelector(".checkout .checkout-title p").textContent =
      product.description;

    // Calculate the total and display it
    const totalPrice = price * quantity;
    document.querySelector(
      ".checkout #total p"
    ).textContent = `Total: ${totalPrice.toFixed(2)} kr`;

    // Handle quantity change and update total
    const quantityInput = document.querySelector(".quantity-input");
    quantityInput.value = quantity; // Set the initial quantity

    quantityInput.addEventListener("input", () => {
      const updatedQuantity = quantityInput.value;
      document.querySelector(".checkout #total p").textContent = `Total: ${(
        price * updatedQuantity
      ).toFixed(2)} kr`;
    });
  } else {
    // If no product is selected, show an error message
    document.querySelector("#checkout-container").innerHTML =
      "<p>No product selected</p>";
  }
}

function displayCheckoutProduct() {
  const selectedProductData = localStorage.getItem("selectedProduct");
  if (!selectedProductData) {
    document.querySelector("#checkout-container").innerHTML =
      "<p>No product selected for checkout.</p>";
    return;
  }

  const { product, selectedSize, quantity } = JSON.parse(selectedProductData);

  // Update the checkout page elements with the selected product data
  document.querySelector(".checkout img").src = product.image;
  document.querySelector(".checkout img").alt = product.altText;
  document.querySelector(".checkout h4").textContent = product.title;
  document.querySelector(".checkout p").textContent = product.brand;
  document.querySelector(".checkout .checkout-detail p").textContent =
    product.description;
  document.querySelector(
    ".checkout #sizeOptions"
  ).textContent = `Selected Size: ${sizeOptions}`;
  document.querySelector(".checkout .quantity-input").value = quantity;
  document.querySelector(
    ".checkout .checkout-title #price"
  ).textContent = `Total: ${parseFloat(product.price) * parseInt(quantity)} kr`;
}

// Call the function after the DOM is loaded
document.addEventListener("DOMContentLoaded", displayCheckoutProduct);
