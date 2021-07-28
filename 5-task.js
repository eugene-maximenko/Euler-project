/* 2520 - самое маленькое число, которое делится без остатка на все числа от 1 до 10.

 */

let integer = 0;

while (true) {
    integer++

    for (let i = 2; i <= 20; i++) {
        if (integer % i !== 0) {
            break
        } else if (integer % i == 0 && i === 20) {
            return console.log(integer)
        }
    }
}