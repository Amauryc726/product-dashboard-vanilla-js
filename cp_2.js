function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then(function (response) {
      return response.json();
    })
    .then(function (products) {
      products.forEach(function (product) {
        console.log(product.fields.name);
      });
    })
    .catch(function (error) {
      console.log("An error occurred:", error.message);
    });
}

function handleError(error) {
  console.log("An error occurred:", error.message);
}

async function fetchProductsAsync() {
  try {
    const response = await fetch("https://www.course-api.com/javascript-store-products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

function displayProducts(products) {
  const container = document.getElementById("product-container");

  products.slice(0, 5).forEach(function (product) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const name = document.createElement("h3");
    name.textContent = product.fields.name;

    const image = document.createElement("img");
    image.src = product.fields.image[0].url;
    image.alt = product.fields.name;

    const price = document.createElement("p");
    price.textContent = "$" + product.fields.price / 100;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);
    container.appendChild(card);
  });
}

fetchProductsThen();
fetchProductsAsync();