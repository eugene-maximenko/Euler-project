/* 2^15 = 32768, сумма цифр этого числа равна 3 + 2 + 7 + 6 + 8 = 26.

Какова сумма цифр числа 2^1000? */

/* 

1. Возвести число 2 в степень 1000.
2. Вытащить цифры из резульаата.
3. Просуммировать цифры.

*/

let result = BigInt(Math.pow(2, 1000))
result = result.toString()

let max = 0

for (let i = 0; i < result.length; i++) {
    max += parseInt(result[i], 10)
}

console.log(max)