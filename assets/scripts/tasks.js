// Checks if the input is a number (as string or integer), for later purpose
function validateNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


// The age calculator

function calculateAge(birthYear) {
  const date = new Date();
  const currentYear = date.getFullYear(); // Gets the current year as integer
  const birthYearRounded = Math.floor(birthYear) // In case a user types in a float...

  if (birthYearRounded == currentYear) {         // Using double equal signs so that the same number as string or integer would be equal
    return "You were just born or are about to be!";
  } else if (birthYearRounded > currentYear) {
    return "You are not born yet...";
  } else if (birthYearRounded < currentYear) {
    const possibleAgeOne = currentYear - birthYearRounded - 1;
    const possibleAgeTwo = currentYear - birthYearRounded;
    return `You are either ${possibleAgeOne} or ${possibleAgeTwo} years old.`;
  } else {
    return "Please type in your birthyear as a number.";
  }
};
// Refactor this to have to functions, one that gives an age the other to return statements based on it

calculateAge(1993);
calculateAge("hello");
calculateAge("2018");


// The lifetyme supply calculator

function calculateSupply(age, amountPerDay) {
  const maxAge = 81                   // Average life expectancy in Denmark

  if (maxAge == age) {                // Using double equal signs so that the same number as string or integer would be equal
    return "I bet you need more, but I cannot tell you how much...";
  } else if (maxAge < age) {
    return "Oh wow, that snack must have really kept you going over all these years.";
  } else if (maxAge > age) {
    const totalSnackAmount = (maxAge - age) * amountPerDay * 365;
    return `You will need ${Math.round(totalSnackAmount)} to last you until the ripe old age of ${maxAge}!`;
  } else {
    return "Your input must be viable, positive numbers."
  }
};

calculateSupply(60, 1.5);
calculateSupply("hi", 20);
calculateSupply("82", "12.2");


// The Geometizer

function calcCircumference(radius) {
  if (radius >= 0 && validateNumber(radius)) {
    const circumferenceCalculation = (radius * 2 * Math.PI).toFixed(2)
    return `The circumference is ${circumferenceCalculation}`;
  } else {
    return "The radius must be a positive number";
  }
};


function calcArea(radius) {
  if (radius >= 0 && validateNumber(radius)) {
    const areaCalculation = (Math.PI * radius ** 2).toFixed(2)
    return `The area is ${areaCalculation}`;
  } else {
    return "The radius must be a positive number";
  }
}


// The temperature converter

function celsiusToFahrenheit(celsius) {
  if (validateNumber(celsius)) {
    const calcFahrenheit = Math.round(celsius * 9 / 5 + 32);
    return `${celsius}°C is approximately ${calcFahrenheit}°F`;
  } else {
    return "Celsius must be a number"
  }
};

function fahrenheitToCelsius(fahrenheit) {
  if (validateNumber(celsius)) {
    const calcCelsius = Math.round((fahrenheit - 32) * 5 / 9);
    return `${fahrenheit}°F is approximately ${calcCelsius}°C`;
  } else {
    return "Fahrenheit must be a number"
  }
};
