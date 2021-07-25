/* Простые делители числа 13195 - это 5, 7, 13 и 29.

Каков самый большой делитель числа 600851475143, являющийся простым числом? */

/* 


1. Создать цикл for для итерации по частному числа, начиная с 2-х.
2. Проверять каждое целое число на простоту.
3. Если оно простое, добавить его в массив простых чисел. Если нет, то брейкнуть цикл

 */

const number = 600851475143
let anser = 0

for (let deviant = 2; deviant < number; deviant++) {

    console.log(number / deviant);

    if (divide !== 0) {
        continue;
    }

    for (let iter2 = 2; iter2 < divider; iter2++) {

        if (divider % iter2 === 0) {
            break;
        }

        answer = divider;
        break
    }
    
    if (answer) return;

}