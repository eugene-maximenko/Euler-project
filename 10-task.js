/* Сумма простых чисел меньше 10 равна 2 + 3 + 5 + 7 = 17.

Найдите сумму всех простых чисел меньше двух миллионов. */

let sum = 2

for (let number = 3; number < 2000000; number+=2) {

    for (let integer = 2; integer < number; integer++) {

        if (number % integer === 0) {
            break
        } else if (number % integer !== 0 && integer === number - 1) {
            sum += number
        }
    }
}

console.log(sum) // 142913828922