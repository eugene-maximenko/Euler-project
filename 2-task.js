/* Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона. */

const fibonachiArray = new Array(1, 2)
let newFibonachiElement = 0
let sum = 2;

while (true) {
    newFibonachiElement = fibonachiArray[fibonachiArray.length - 1] + fibonachiArray[fibonachiArray.length - 2]

    if (newFibonachiElement > 4000000) {
        break
    }

    fibonachiArray.push(newFibonachiElement)

    if (newFibonachiElement % 2 === 0) {
        sum += newFibonachiElement;
    }
}

console.log(fibonachiArray);
console.log(sum); // 4613732