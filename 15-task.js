/* 
Начиная в левом верхнем углу сетки 2×2 и имея возможность двигаться только вниз или вправо, существует ровно 6 маршрутов до правого нижнего угла сетки.


Сколько существует таких маршрутов в сетке 20×20?
*/

// Useful article https://math.stackexchange.com/questions/286437/arrangement-of-binary-bits
let { factorial } = require('mathjs')

const pathCounter = (gridSize) => {
    let number = factorial(gridSize * 2) / (factorial(gridSize) ** 2)
    return number
}

console.log(pathCounter(20))