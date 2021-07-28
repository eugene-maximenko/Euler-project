/* Сумма квадратов первых десяти натуральных чисел равна

12 + 22 + ... + 102 = 385
Квадрат суммы первых десяти натуральных чисел равен

(1 + 2 + ... + 10)2 = 552 = 3025
Следовательно, разность между суммой квадратов и квадратом суммы первых десяти натуральных чисел составляет 3025 − 385 = 2640.

Найдите разность между суммой квадратов и квадратом суммы первых ста натуральных чисел. */

let squareSum = 0
let sumSquare = 0

for (let i = 1; i <= 100; i++) {
    squareSum += Math.pow(i, 2)
    sumSquare += i;
}

console.log(Math.pow(sumSquare, 2) - squareSum);
