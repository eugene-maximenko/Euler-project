/* Выписав первые шесть простых чисел, получим 2, 3, 5, 7, 11 и 13. Очевидно, что 6-е простое число - 13.

Какое число является 10001-м простым числом? */ 

let counter = 6


for (let number = 14; number > 0; number++) {

    for (let integer = 2; integer <= number; integer++) {

        if (number % integer === 0 && integer < number) {
            break;
        } else if (integer === number) {
            counter++;

            if (counter === 10001) {
                return console.log(number);
            }
        }
    }
}