import jsdom from "jsdom";

const { JSDOM } = jsdom;
async function catalogPagesExtractor(url) {
  try {
    let productPageURLS = [];
    const response = await fetch(url);
    const html = await response.text();

    const dom = new JSDOM(html);
    const doc = dom.window.document;

    let urls = doc.querySelectorAll(".product-small .box a");
    productPageURLS = Array.from(urls).map((url) => url.href);
    productPageURLS = productPageURLS.filter(
      (url) => url != "about:blank#quick-view"
    );

    return productPageURLS;
  } catch (error) {
    return error;
  }
}
const catalogPageURL =
  "https://maximportaciones.com.pe/tienda-importadores-directos-de-alternadores-y-arrancadores/";

async function productPageExtractor(url) {
  try {
    /*
    variable for product object */
    let productData = {
      title: "undefined",
      SKU: "undefined",
      thumbnails: ["n/a"],
      categories: ["n/a"],
      specifications: "undefined",
    };

    /*
     http request using fetch method:*/
    const response = await fetch(url);
    const html = await response.text();

    /*
    object jsDOM by html text:*/
    const dom = new JSDOM(html);
    const doc = dom.window.document;
    /*
  productData updating:*/

    //title:

    if (doc.querySelector("h1") != null) {
      productData.title = doc
        .querySelector("h1")
        .textContent.replace(/\n+/g, " ")
        .trim();
    }

    //SKU:

    if (doc.querySelector(".sku") != null) {
      productData.SKU = doc.querySelector(".sku").textContent;
    }

    //thumbnails:

    const thumbnails = doc.querySelectorAll(
      ".woocommerce-product-gallery__wrapper a"
    );
    if (Array.from(thumbnails).length > 0) {
      productData.thumbnails = Array.from(thumbnails).map(
        (thumbnail) => thumbnail.href
      );
    }

    //categories:

    const categories = doc.querySelectorAll(".posted_in a");
    if (Array.from(categories).length > 0) {
      productData.categories = Array.from(categories).map(
        (category) => category.textContent
      );
    }

    //specifications

    if (doc.querySelector("tbody") != null) {
      productData.specifications = doc
        .querySelector("tbody")
        .textContent.replace(/\n+/g, " ")
        .trim();
    }

    //console.log("productData from function: ", productData);
    return productData;
  } catch (error) {
    console.error("Error al obtener el contenido del body:", error);
  }
}

//const productPageURL = "https://maximportaciones.com.pe/product/arrancador-mx2-00-00-trk-2380-mercedes-benz-24v-10t/";

const productPages = await catalogPagesExtractor(catalogPageURL);
console.log("productPages.length: ", productPages.length);
const testingProductPage = productPages.slice(53, 104);
let data = [];
/*
const product = await productPageExtractor(
  "https://maximportaciones.com.pe/product/34-312p-pollak-6-terminales-machos/"
);*/
await testingProductPage.forEach(async (productPage) => {
  const product = await productPageExtractor(productPage);
  data.push(product);
});

console.log("data: ", data);
