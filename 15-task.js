/* 
Начиная в левом верхнем углу сетки 2×2 и имея возможность двигаться только вниз или вправо, существует ровно 6 маршрутов до правого нижнего угла сетки.


Сколько существует таких маршрутов в сетке 20×20?
*/

/* 

Сделать МВП для сетки 2 на 2

1. Сделать граф
2. Нужен глобальный счетчик.
3. Начинаем работать рекурсивной функцией с первого узла. 

Базовый случай, если текущий узел - искомый: обновить счетчик на единицу и стопнуть программу.
Рекурсивный случай, если текущий узел не искомый: вызвать функцию.
4. Вывести счетчик
*/

let map = new Map();
let counter = 0
let destination = '9'

map.set('1', ['2', '4'])
map.set('2', ['3','5'])
map.set('3', ['6'])
map.set('4', ['5','7'])
map.set('5', ['6','8'])
map.set('6', ['9'])
map.set('7', ['8'])
map.set('8', ['9'])


function findAllWays(key) {
    if (key === destination) {
        counter++
        return
    }

    map.get(key).forEach(element => {
        return findAllWays(element)
    });
}

findAllWays('1')

console.log(counter)