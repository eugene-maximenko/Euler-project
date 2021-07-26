/* Простые делители числа 13195 - это 5, 7, 13 и 29.

Каков самый большой делитель числа 600851475143, являющийся простым числом? */

const number = 13

for (let divideOn = 2; divideOn < number; divideOn++) {
    let divideResult = number / divideOn;

    if (number % divideOn === 0) {

        for (let simpleNumberDivider = 2; simpleNumberDivider < divideResult; simpleNumberDivider++) {

            if (divideResult % simpleNumberDivider === 0) {
                break;
            } else if (simpleNumberDivider === divideResult - 1) {
                return console.log(`${divideResult} - наибольший простой делитель числа ${number}!`)
            }

        }
    }

}