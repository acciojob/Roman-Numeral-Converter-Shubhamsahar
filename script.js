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

console.log(convertToRoman(36));
