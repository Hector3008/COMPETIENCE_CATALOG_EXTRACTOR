import jsdom from "jsdom";

const { JSDOM } = jsdom;

async function fetchBodyContent(url) {
  try {
    /*
    variable for product object */
    let productData = {};

    /*
     http request using fetch method:*/
    const response = await fetch(url);
    const html = await response.text();

    /*
    object jsDOM by html text:*/
    const dom = new JSDOM(html);
    const doc = dom.window.document
  /*
  productData updating:*/

    productData.title = doc.querySelector("h1")
      .textContent.replace(/\n+/g, " ")
      .trim();

    productData.SKU = doc.querySelector(".sku").textContent;

    const thumbnails = doc.querySelectorAll(
      ".woocommerce-product-gallery__wrapper a"
    );

    productData.thumbnails = Array.from(thumbnails).map(
      (thumbnail) => thumbnail.href
    );

        const categories = doc.querySelectorAll(".posted_in a");

        productData.categories = Array.from(categories).map(
          (category) => category.textContent
        );
        productData.specifications = doc
          .querySelector("tbody")
          .textContent.replace(/\n+/g, " ")
          .trim();
    console.log("productData: ", productData);
  } catch (error) {
    console.error("Error al obtener el contenido del body:", error);
  }
}

// URL de la página web
const url =
  "https://maximportaciones.com.pe/product/arrancador-mx2-00-00-trk-2380-mercedes-benz-24v-10t/";
fetchBodyContent(url);


