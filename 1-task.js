/* Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.

Найдите сумму всех чисел меньше 1000, кратных 3 или 5. */

const numbers = new Set();
let sum = 0;

for (let i = 3; i < 1000; i += 3) {
    numbers.add(i)
}

for (let i = 5; i < 1000; i += 5) {
    numbers.add(i)
}

numbers.forEach(value => sum += value)

console.log(sum) // 233168