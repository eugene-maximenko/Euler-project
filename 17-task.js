/* Если записать числа от 1 до 5 английскими словами (one, two, three, four, five), то используется всего 3 + 3 + 5 + 4 + 4 = 19 букв.

Сколько букв понадобится для записи всех чисел от 1 до 1000 (one thousand) включительно?


Примечание: Не считайте пробелы и дефисы. Например, число 342 (three hundred and forty-two) состоит из 23 букв, число 115 (one hundred and fifteen) - из 20 букв. Использование "and" при записи чисел соответствует правилам британского английского. */

let num = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    1000: 'one thousand'
}

let lengthOfLetters = 0

for (let i = 1; i <= 1000; i++) {
    if (num[i]) {
        console.log(num[i])
        lengthOfLetters += num[i].replace(/\s/g, '').length
        continue
    }


    if (i > 20 && i < 100) {
        let stringNumber = i.toString().split('')
        let decadeNumber = parseInt(stringNumber[0] + '0', 10)
        let units = parseInt(stringNumber[1], 10)
        console.log(i, decadeNumber, units, `${num[decadeNumber]} ${num[units]}`);
        lengthOfLetters += `${num[decadeNumber]} ${num[units]}`.replace(/\s/g, '').length
    } else if (i > 100) { }
    if (i % 100 === 0) {
        let stringNumber = i.toString().split('')
        let hundredNumber = parseInt(stringNumber[0], 10)
        console.log(i, hundredNumber, `${num[hundredNumber]} hundred`);
        lengthOfLetters += `${num[hundredNumber]} hundred`.replace(/\s/g, '').length
    } else if (i % 10 === 0) {
        let stringNumber = i.toString().split('')
        let hundredNumber = parseInt(stringNumber[0], 10)
        let decadeNumber = parseInt(stringNumber[1] + '0', 10)
        console.log(i, hundredNumber, decadeNumber, `${num[hundredNumber]} hundred and ${num[decadeNumber]}`);
        lengthOfLetters += `${num[hundredNumber]} hundred and ${num[decadeNumber]}`.replace(/\s/g, '').length
    } else {
        let stringNumber = i.toString().split('')
        let hundredNumber = parseInt(stringNumber[0], 10)
        let decadeNumber = parseInt(stringNumber[1] + '0', 10)
        let units = parseInt(stringNumber[2], 10)
        console.log(i, hundredNumber, decadeNumber, units, `${num[hundredNumber]} hundred and ${num[decadeNumber]} ${num[units]}`);
        lengthOfLetters += `${num[hundredNumber]} hundred and ${num[decadeNumber]} ${num[units]}`.replace(/\s/g, '').length
    }

}

console.log(lengthOfLetters)