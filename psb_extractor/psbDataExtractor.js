document.addEventListener("DOMContentLoaded", function () {
  // Objeto que almacenará los datos extraídos
  let productData = {};

  // Extraigo la categoria
  let categoryElement = document.querySelector(".category");
  if (categoryElement) {
    productData.category = categoryElement.textContent.trim();
  }

  // Extraigo la descripción
  let descriptionElement = document.querySelector(".product-title a");
  if (descriptionElement) {
    productData.description = descriptionElement.textContent.trim();
  }

  // Extraigo las imagenes
  let thumbnailElements = document.querySelectorAll(".box-image img");
  productData.thumbnail = [];
  thumbnailElements.forEach(function (img) {
    productData.thumbnail.push(img.src);
  });

  // Imprimo el objeto
  console.log("productData from psbDataExtractor.js: ", productData);
});
