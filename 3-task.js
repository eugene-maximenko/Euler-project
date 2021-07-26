/* Простые делители числа 13195 - это 5, 7, 13 и 29.

Каков самый большой делитель числа 600851475143, являющийся простым числом? */

/* 


1. Создать цикл for для итерации по частному числа, начиная с 2-х.
2. Проверять каждое целое число на простоту.
3. Если оно простое, добавить его в массив простых чисел. Если нет, то брейкнуть цикл

39/2 - не целый результат, континью
39/3 - результат 13 он целый, проверка. 13 простое число. Выводим 13 и прекращаем работу

20/2 - результат 10, видим что он делится на что-то еще кроме 10, выходим из подцикла

 */

const number = 39

for (let divideOn = 2; divideOn < number; divideOn++) {
    let divideResult = number / divideOn;

    // Console the whole numbers
    if (number % divideOn === 0) {
        console.log(`${number} / ${divideOn} = ${divideResult}`)

        for (let integer2nd = 2; integer2nd < divideResult; integer2nd++) {
            
            if (Number.isInteger(divideResult / integer2nd)) {
                console.log(`${divideResult} не является простым числом`)
                break;
            } else if (divideResult / integer2nd === divideResult - 1) {
                console.log(`${divideResult} / ${integer2nd} = ${divideResult / integer2nd}`)
            }

        }
    }

}