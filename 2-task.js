/* Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона. */

let numOne = 1
let numTwo = 2
let sum = 2
while (true) {

    let fibonachiNum = numOne + numTwo

    if (fibonachiNum > 4000000) {
        break
    }

    if (fibonachiNum % 2 === 0) {
        sum += fibonachiNum
    }

    numOne = numTwo
    numTwo = fibonachiNum
}

console.log(sum)