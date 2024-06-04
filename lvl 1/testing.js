let originalString = `
81: Object { category:              "VACIO DE FRENO",       "VACIO DE FRENO VW1493001 VW / AUDI #2" }
82: Object { category:              "VACIO DE FRENO",       "VACIO DE FRENO VW1493002 VW / AUDI" }
83: Object { category:              "VACIO DE FRENO",       "VACIO DE FRENO VW1493002 VW / AUDI" }
84: Object { category:              "BOSCH ORIGINAL",       "VOLKSWAGEN MOD 10T T001.006.004" }
85: Object { category:              "BOSCH ORIGINAL",       "VOLKSWAGEN MOD 10T T001.006.004" }
86: Object { category:              "BOSCH ORIGINAL",       "VOLVO BARQUITO 12V IB035 9190.087.034" }
87: Object { category:              "BOSCH ORIGINAL",       "VOLVO BARQUITO 12V IB035 9190.087.034" }
`;

// Usamos una expresión regular para extraer las partes relevantes y conservar el "}"
let processedString = originalString
  .replace(/^\d+:\sObject\s{\scategory:\s+/gm, "")
  .replace(/\s}$/, "},");

// Hacemos un "trim" a la descripción después de la coma
processedString = processedString.replace(/,\s+"/g, ',"');

// Imprimimos el resultado
console.log(processedString);
