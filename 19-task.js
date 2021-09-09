/* Дана следующая информация (однако, вы можете проверить ее самостоятельно):

1 января 1900 года - понедельник.

В апреле, июне, сентябре и ноябре 30 дней.
В феврале 28 дней, в високосный год - 29.
В остальных месяцах по 31 дню.

Високосный год - любой год, делящийся нацело на 4, однако последний год века (ХХ00) является високосным в том и только том случае, если делится на 400.
Сколько воскресений выпадает на первое число месяца в двадцатом веке (с 1 января 1901 года до 31 декабря 2000 года)? */

/* Года повторяются */

/* Сколько первых чисел месяца в 20-м веке приходятся на воскресенья*

1. Мне нужно отрицать

2000 - високосный.*/

let date = new Date(2000, 11, 31);
let weekday = date.getDay();

console.log(weekday); // 1
console.log(date); // 1
console.log(new Date(date-500)); // 1