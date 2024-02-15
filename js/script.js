let isCelcius = true;

let rumus = document.getElementById("rumus");

let label_pertama = document.getElementById("label1");
let label_kedua = document.getElementById("label2");

let input_pertama = document.getElementById("input_pertama");
let input_kedua = document.getElementById("input_kedua");

let kalkulasi;

function calculateCelcius() {
  kalkulasi = input_pertama.value * (9 / 5) + 32;
  input_kedua.value = `${kalkulasi}`;
  rumus.value = `${input_pertama.value} * (9/5) + 32 = ${kalkulasi}°F`;
}

function calculateFahrenheit() {
  kalkulasi = input_pertama.value - 32 * (5 / 9);
  input_kedua.value = `${kalkulasi}`;
  rumus.value = `(${input_pertama.value} - 32) * (5/9) = ${kalkulasi}°C`;
}

function reset() {
  input_pertama.value = "";
  input_kedua.value = "";
  rumus.value = "";
}

function calculate() {
  if (label_pertama.innerText == "Celcius (℃):") {
    calculateCelcius();
  } else {
    calculateFahrenheit();
  }
}

function reverse() {
    let temporary = input_pertama.value;
    isCelcius = !isCelcius;
    input_pertama.value = input_kedua.value;
    input_kedua.value = temporary;
  if (isCelcius) {
    label_pertama.innerText = "Fahrenheit (℉):";
    label_kedua.innerText = "Celcius (℃):";
    calculateCelcius();
  } else {
    label_pertama.innerText = "Celcius (℃):";
    label_kedua.innerText = "Fahrenheit (℉):";
    calculateFahrenheit();
  }
}
