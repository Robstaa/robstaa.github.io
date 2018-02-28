// The age calculator

function calculateAge(birthYear) {
  const date = new Date();
  const currentYear = date.getFullYear(); // Gets the current year as integer

  if (birthYear == currentYear) {         // Using double equal signs so that the same number as string or integer would be equal
    return "You were just born or are about to be!";
  } else if (birthYear > currentYear) {
    return "You are not born yet...";
  } else if (birthYear < currentYear) {
    const possibleAgeOne = currentYear - birthYear - 1;
    const possibleAgeTwo = currentYear - birthYear;
    return `You are either ${possibleAgeOne} or ${possibleAgeTwo} years old.`;
  } else {
    return "Please type in your birthyear as a number.";
  }
};

calculateAge(1993);
calculateAge("hello");
calculateAge("2018");


// The lifetyme supply calculator

function calculateSupply(age, amountPerDay) {
  const maxAge = 81  // Average life expectancy in Denmark

  if (maxAge == age) {
    return "I bet you need more, but I cannot tell you how much...";
  } else if (maxAge < age) {
    return "Oh wow, that snack must have really kept you going over all these years.";
  } else if (maxAge > age) {
    const totalSnackAmount = (maxAge - age) * amountPerDay * 365;
    return `You will need ${Math.round(totalSnackAmount)} to last you until the ripe old age of ${maxAge}!`;
  } else {
    return "Your input must be viable numbers."
  }
};

calculateSupply(60, 1.5)
calculateSupply("hi", 20)
calculateSupply("82", "12.2")
