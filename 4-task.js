/* Число-палиндром с обеих сторон (справа налево и слева направо) читается одинаково. Самое большое число-палиндром, полученное умножением двух двузначных чисел – 9009 = 91 × 99.

Найдите самый большой палиндром, полученный умножением двух трехзначных чисел. */

for (let a = 999; a > 950; a--) {

    for (let b = 999; b > 900; b--) {

        const multiplyResultAsString = (a * b).toString()
        const reverseMultiplyResult = multiplyResultAsString.split('').reverse().join('');

        if (multiplyResultAsString === reverseMultiplyResult) {
            return console.log(`${multiplyResultAsString} is a palindrom by ${a} and ${b}`)
        }
    }


}
