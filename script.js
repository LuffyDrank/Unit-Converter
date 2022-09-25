const meterFeet = document.getElementById("meter-feet");
const literGallon = document.getElementById("liter-gallon");
const kilogramPound = document.getElementById("kilogram-pound");
const inputEl = document.getElementById("input");
const bigNum = document.getElementById("big-num")

let result;

function meterToFeet() {
    result = inputEl.value + " Meters = " + (inputEl.value * 3.281).toFixed(2) + " Feet | " + inputEl.value + " Feet = " + (inputEl.value / 3.281 ).toFixed(2) + " Meters";
    meterFeet.textContent = result;
    console.log("input changed!");
    literToGallon();
    kilogramToPound();
    bigNum.textContent = inputEl.value;
}
function literToGallon() {
    result = inputEl.value + " Liters = " + (inputEl.value * 0.264).toFixed(2) + " Gallons | " + inputEl.value + " Gallons = " + (inputEl.value / 0.264 ).toFixed(2) + " Liters";
    literGallon.textContent = result;
    console.log("input changed!");
}
function kilogramToPound() {
    result = inputEl.value + " Kilograms = " + (inputEl.value * 2.204).toFixed(2) + " Pounds | " + inputEl.value + " Pounds = " + (inputEl.value / 2.204 ).toFixed(2) + " Kilograms";
    kilogramPound.textContent = result;
    console.log("input changed!");
}

inputEl.addEventListener("input", meterToFeet)



