function convertToRoman(num) {
  if (num <= 0 || num > 100000) {
    return "Invalid input";
  }

  const romanNumerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = "";

  for (let [roman, value] of romanNumerals) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

function convert() {
  const input = document.getElementById("number").value;
  const output = document.getElementById("output");

  const num = parseInt(input);

  if (isNaN(num)) {
    output.innerText = "Please enter a valid number.";
    return;
  }

  const roman = convertToRoman(num);
  output.innerText = roman;
}
