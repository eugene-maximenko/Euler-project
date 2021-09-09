/* Простые делители числа 13195 - это 5, 7, 13 и 29.

Каков самый большой делитель числа 600851475143, являющийся простым числом? */

const number = 600851475143

for (let divideOn = 2; divideOn < number; divideOn++) {

    // Check the remainder of the devision
    if (number % divideOn === 0) {

        // Get the divide result
        let divideResult = number / divideOn;

        // Find out if the divide result is a simple number
        for (let simpleNumberDivider = 2; simpleNumberDivider < divideResult; simpleNumberDivider++) {

            // Divide result is not a simple number
            if (divideResult % simpleNumberDivider === 0) {
                break;

            //  Divide result is a simple number
            } else if (simpleNumberDivider === divideResult - 1) {
                return console.log(`${divideResult} - наибольший простой делитель числа ${number}!`)
            }

        }
    }

}








































