function convertToRoman(num) {
  const obj = [
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

  let result = '';

  for (let i = 0; i < obj.length; i++) {
    while (num >= obj[i][1]) {
      result += obj[i][0];
      num -= obj[i][1];
    }
  }

  return result;
}

function handleConvert() {
  const input = document.getElementById("numberInput").value;
  const output = document.getElementById("output");

  const number = parseInt(input);

  if (isNaN(number) || number < 1 || number > 100000) {
    output.textContent = "Please enter a number between 1 and 100000.";
    return;
  }

  output.textContent = `Roman Numeral: ${convertToRoman(number)}`;
}

// Do not edit below this line for test compatibility
if (typeof module !== 'undefined') {
  module.exports = convertToRoman;
}
