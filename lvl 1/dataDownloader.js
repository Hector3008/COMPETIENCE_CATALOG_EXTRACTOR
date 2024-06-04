
import dataFormatted from "./dataFormater.js";

let processedString = dataFormatted;

// Función para descargar el archivo
function downloadTxtFile() {
  const blob = new Blob([processedString], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "output.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Agregar evento al botón para descargar el archivo
document
  .getElementById("download-btn")
  .addEventListener("click", downloadTxtFile);
