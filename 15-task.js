/* 
Начиная в левом верхнем углу сетки 2×2 и имея возможность двигаться только вниз или вправо, существует ровно 6 маршрутов до правого нижнего угла сетки.


Сколько существует таких маршрутов в сетке 20×20?
*/

/* 

Сгенерировать граф


1. Если число из нижней строки (т.е. число / 21 = 20 и какой-то остаток), то только +1
2. Если число из правого края (т.е. число / 21 = нулевой остаток), то только +21
3. В остальных случаях будет +1 и +21

https://ru.stackoverflow.com/questions/1115207/%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-js

https://math.stackexchange.com/questions/286437/arrangement-of-binary-bits
*/

// let newMap = new Map()

// for (let i = 1; i <= 441; i++) {

//     if (i % 21 === 0 && i !== 441) {
//         newMap.set(i, [i + 21])
//     } else if (i > 420 && i % 21 !== 0) {
//         newMap.set(i, [i + 1])
//     } else if (i !== 441) {
//         newMap.set(i, [i + 1, i + 21])
//     }
// }

// let map = new Map();
// let counter = 0
// let destination = 441

// // map.set('1', ['2', '4'])
// // map.set('2', ['3', '5'])
// // map.set('3', ['6'])
// // map.set('4', ['5', '7'])
// // map.set('5', ['6', '8'])
// // map.set('6', ['9'])
// // map.set('7', ['8'])
// // map.set('8', ['9'])


// function findAllWays(key) {
//     if (key === destination) {
//         counter++
//         return
//     }

//     newMap.get(key).forEach(element => {
//         return findAllWays(element)
//     });
// }

// findAllWays(1)

// console.log(counter)
// console.log(newMap)

let { factorial } = require('mathjs')

const pathCounter = (gridSize) => {
    let p = factorial(gridSize * 2) / (factorial(gridSize) ** 2)
    return p
}

console.log(pathCounter(20))