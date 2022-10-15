const meterFeet = document.getElementById("meter-feet");
const literGallon = document.getElementById("liter-gallon");
const kilogramPound = document.getElementById("kilogram-pound");
const inputEl = document.getElementById("input");
const bigNum = document.getElementById("big-num")

let result;

//This function just takes all the other calculations functions and calls them all
//Afterwards it renders the input value in the "big Number Element" and if it's empty it renders
//"0"
calculateAll();
function calculateAll() {
  meterToFeet()
  literToGallon();
  kilogramToPound();
  bigNum.textContent = inputEl.value;
  if(inputEl.value == "") {
    bigNum.textContent = 0;
  }
}

//Calculating each one below

function meterToFeet() {
    result = `<p><b>${inputEl.value} Meters =</b> ${(inputEl.value * 3.281).toFixed(2)} Feet |  ${(inputEl.value * 1000).toFixed()} Milimeters <br><br> <b>${inputEl.value} Feet = </b>${(inputEl.value / 3.281 ).toFixed(2)}Meters | ${(inputEl.value * 304.8).toFixed(2)} Milimeters <br><br> <b>${inputEl.value} Milimeters = </b>${(inputEl.value / 1000).toFixed(3)} Meters | ${(inputEl.value / 304.8).toFixed(4)} Feet</p>`;
    meterFeet.innerHTML = result;
}
function literToGallon() {
    result = `<p><b>${inputEl.value} Liters =</b> ${(inputEl.value * 0.264).toFixed(2)} Gallons |  ${(inputEl.value * 1000).toFixed()} Mililiters <br><br> <b>${inputEl.value} Gallons = </b>${(inputEl.value / 0.264 ).toFixed(2)}Liters | ${(inputEl.value / 0.264 * 1000).toFixed(2)} Mililiters <br><br> <b>${inputEl.value} Mililiters = </b>${(inputEl.value / 1000).toFixed(3)} Liters | ${(inputEl.value * 0.264 / 1000).toFixed(4)} Gallons</p>`
    literGallon.innerHTML = result;
}
function kilogramToPound() {
  result = `<p><b>${inputEl.value} Kilograms =</b> ${(inputEl.value * 2.204).toFixed(2)} Pounds|  ${(inputEl.value * 1000).toFixed()} Grams <br><br> <b>${inputEl.value} Pounds = </b>${(inputEl.value / 2.204 ).toFixed(2)}Kilograms | ${(inputEl.value / 2.204 * 1000).toFixed(2)} Grams <br><br> <b>${inputEl.value} Grams = </b>${(inputEl.value / 1000).toFixed(3)} Kilograms | ${(inputEl.value * 2.204 / 1000).toFixed(4)} Pounds</p>`//" Kilograms = " + (inputEl.value * 2.204).toFixed(2) + " Pounds | " + inputEl.value + " Pounds = " + (inputEl.value / 2.204 ).toFixed(2) + " Kilograms";
    kilogramPound.innerHTML = result;
}

inputEl.addEventListener("input", calculateAll)

