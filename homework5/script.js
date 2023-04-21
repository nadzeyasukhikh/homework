// const number = +prompt("Введите число")
// console.log(number / 100 * 10)

// const number1 = +prompt("введите первое число")
// const number2 = +prompt("введите второе  число")
// if(number1 < number2) {
//     console.log(number1)
// } else if(number2 < number1) {
//     console.log(number2)
// }

// const number = +prompt("Введите число")
// if(number < 100) {
//     console.log("Число меньше 100")
// } else if(number > 100) {
//     console.log("Число больше 100")
// } else {
//     console.log("Число равно 100")
// }

const userName = prompt("Как вас зовут?")
const userAge = +prompt("Сколько вам лет?")
if(userAge < 18) {
    console.log("Hi, " + userName)
} else if(userAge > 18) {
    console.log("Hello, " + userName)
} else {
    console.log("Hello, " + userName)
}