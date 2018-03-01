document.addEventListener("DOMContentLoaded", () =>  {

  // Age calculation render
  const ageCalculatorOutput = document.querySelector("#age-calculator-output");
  const ageCalculatorInput = document.querySelector("#age-calculator-input");
  const ageCalculatorSubmit = document.querySelector("#age-calculator-submit");

  function renderAgeCalculation() {
    ageCalculatorOutput.innerText = calculateAge(ageCalculatorInput.value);
  };

  ageCalculatorSubmit.addEventListener("click", () => {
    renderAgeCalculation();
    ageInput.value = possibleAgeOne // variable from tasks.js is going to be the inout value for the lifetime supply calculation
  });

  // Lifetime Supply calculation render
  const ageInput = document.querySelector("#age-input");

  const lifetimeSupplyOutput = document.querySelector("#lifetime-supply-output");
  const lifetimeSupplyInput = document.querySelector("#lifetime-supply-input");
  const lifetimeSupplySubmit = document.querySelector("#lifetime-supply-submit");

  function renderLifetimeSupplyCalculation() {
    lifetimeSupplyOutput.innerText = calculateSupply(ageInput.value, lifetimeSupplyInput.value);
  };

  lifetimeSupplySubmit.addEventListener("click", () => {
    renderLifetimeSupplyCalculation();
  });


  // Geometizer calculation render
  const radiusInput = document.querySelector("#radius-input");
  const radiusSubmit = document.querySelector("#radius-submit");
  const circumferenceOutput = document.querySelector("#circumference-output");
  const areaOutput = document.querySelector("#area-output");

  function renderGeometizerCalculation() {
    circumferenceOutput.innerText = calcCircumference(radiusInput.value);
    areaOutput.innerText = calcArea(radiusInput.value);
  };

  radiusSubmit.addEventListener("click", () => {
    renderGeometizerCalculation();
  });


  //Temperature calculator

  temperatureInput = document.querySelector("#temperature-input");
  celsiusSubmit  = document.querySelector("#celsius-submit");
  fahrenheitSubmit  = document.querySelector("#fahrenheit-submit");
  temperatureOutput = document.querySelector("#temperature-output");

  function renderFahrenheitCalculation() {
    temperatureOutput.innerText = celsiusToFahrenheit(temperatureInput.value);
  };

  function renderCelsiusCalculation() {
    temperatureOutput.innerText = fahrenheitToCelsius(temperatureInput.value);
  };

  fahrenheitSubmit.addEventListener("click", () => {
    renderCelsiusCalculation();
  })

  celsiusSubmit.addEventListener("click", () => {
    renderFahrenheitCalculation();
  })


});


