import data from "./data.js"

let dataFormatted = data
  .replace(/^\d+:\sObject\s{\scategory:\s+/gm, "")
  .replace(/\s}$/, "},");

  dataFormatted = dataFormatted.replace(/,\s+"/g, ',"');

console.log("dataNow: ", dataFormatted);

export default dataFormatted;