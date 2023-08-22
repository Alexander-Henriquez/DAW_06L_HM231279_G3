
const convertirDecimalABinario = (decimal) =>decimal.toString(2);

const convertirDecimalAOctal = (decimal) =>decimal.toString(8);

const convertirDecimalAHexadecimal = (decimal) =>
decimal.toString(16).toUpperCase();

const convertir = () => {
 const decimal =
parseInt(document.getElementById("decimalInput").value);
 document.getElementById("binarioResultado").textContent =`Binario: ${convertirDecimalABinario(decimal)}`;
 document.getElementById("octalResultado").textContent =`Octal: ${convertirDecimalAOctal(decimal)}`;

document.getElementById("hexadecimalResultado").textContent= `Hexadecimal: ${convertirDecimalAHexadecimal(decimal)}`;
};
