/* Тройка Пифагора - три натуральных числа a < b < c, для которых выполняется равенство

a2 + b2 = c2
Например, 32 + 42 = 9 + 16 = 25 = 52.

Существует только одна тройка Пифагора, для которой a + b + c = 1000.
Найдите произведение abc. */

for (let a = 2; a > 0; a++) {

    for (let b = a + 1; b > 0; b++) {

        let c = Math.sqrt(a * a + b * b)

        if (a + b + c > 1000) {
            break
        } else if (Number.isInteger(c) && a + b + c === 1000) {
            console.log(a, b, c)
            console.log(a * b * c)
        }
    }
}
