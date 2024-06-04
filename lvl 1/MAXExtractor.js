
console.log("este script está corriendo!");

const productsFromHTML = document.querySelectorAll(".product-small");
let productsToUpload = []

productsFromHTML.forEach((product) => {
  const text = product.innerText;
  const values = text.split("\n");
  const filteredValues = values.filter((value) => value != "");
  const productObject = {
    category: filteredValues[1],
    description: filteredValues[2],
  };
  productsToUpload.push(productObject)
});

console.log("productsToUpload: ", productsToUpload);
