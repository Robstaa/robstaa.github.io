document.addEventListener("DOMContentLoaded", () =>  {

  // Age calculation
  const ageCalculatorOutput = document.querySelector("#age-calculator-output");
  const ageCalculatorInput = document.querySelector("#age-calculator-input");
  const ageCalculatorSubmit = document.querySelector("#age-calculator-submit");

  function renderAgeCalculation() {
    ageCalculatorOutput.innerText = calculateAge(ageCalculatorInput.value);
  };

  ageCalculatorSubmit.addEventListener("click", () => {
    renderAgeCalculation();
  });

  // Age calculation
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

});


