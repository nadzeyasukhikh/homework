// Напишите функцию, которая принимает два числовых аргумента
// и выводит в консоль все четные числа от большего к меньшему.

// function getArrey(number1, number2) {
//      const numbers = [];
//      if (number1 > number2) {
//        for (let i = number1; i >= number2; i--) {
//          numbers.push(i);
//       }
//      } else  {
//       for (let i = number2; i >= number1; i--) {
//         numbers.push(i);
//       }
//      }

//      for (let i = 0; i < numbers.length; i++) {
//        if (numbers[i] % 2 == 0) {
//          console.log(numbers[i]);
//        }

//     }
//    }
//   getArrey(80, 90);

// Напишите функцию power, которая принимает два числовых аргумента
// (основание степени и саму степень) и возвращает число в указанной степени.
// Значение степени должно быть указано по умолчанию 2.

// function power(num1,num2 = 2) {
//     console.log(num1 ** num2)
// }
// power(3)

// Напишите функцию, которая принимает числовой аргумент n
// и считает сумму чисел от 1 до n.

// function sumNumbers(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//    return sum;
// }
// console.log(sumNumbers(3))

// Напишите функцию, которая принимает два числовых аргумента n и m
//  и считает сумму четных чисел и нечетных чисел от n до m.
//  Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

// function sumNumbers(n, m) {
//   let sumEven = 0;
//   let sumOdd = 0;
//   for (let i = n; i <= m; i++) {
//     if (i % 2 == 0) {
//       sumEven += i;
//     } else {
//       sumOdd += i;
//     }
//   }
//   console.log(sumEven);
//   console.log(sumOdd);
// }

// sumNumbers(1, 3);

// Напишите функцию, которая принимает в качестве аргументов массив строк,
//  а возвращает первый самый длинный элемент массива. Если входной массив пуст,
//  функция возвращает null. Если есть несколько одинаковых по длине элементов -
//  функция возвращает первый из этих элементов.

 function longestString(word) {
    if (word.length == 0) {
      console.log(null);
   }
    let longest = word[0];
  for (let i = 1; i < word.length; i++) {
    if (word[i].length > longest.length) {
            longest = word[i];
      }
    }
    console.log(longest);
 }
  longestString(["one", "two","erty","hgfj","oiuy" ])



