console.log("PSBonCatalog running!");

let products = document.querySelectorAll(".product-small.box");

// Convertir NodeList a Array ⬇️⬇️⬇️
products = Array.from(products);

let savedProducts = products;

let updatableProductList = [];

savedProducts.forEach((product) => {
  let productData = {
    category: undefined,
    description: undefined,
    thumbnail: [],
  };

  //extraigo los valores del producto desde los children en mi htmlElement
  productData.category = product.children[1].children[0].children[0].innerText;
  productData.description =
    product.children[1].children[0].children[1].innerText;

    productData.thumbnail.push(
      product.children[0].children[0].children[0].children[0].attributes
        .src.value
    );

  updatableProductList.push(productData);
});

console.log("updatableProductList: ", updatableProductList);
