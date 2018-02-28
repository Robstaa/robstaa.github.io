function calculateAge(birthYear) {
  const date = new Date();
  const currentYear = date.getFullYear();

  if (birthYear === currentYear) {
    return "You were just born or are about to be!";
  } else if (birthYear > currentYear) {
    return "You are not born yet";
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
