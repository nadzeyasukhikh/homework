// Написать цикл, который создает множество параграфов
//  с каждым десятым числом в промежутке от 100 до 50 
//  (т.е. 100, 90, 80, 70, 60, 50).
//   Добавить созданные параграфы в div с классом numbers.

const body = document.querySelector("body") 

     for(let i = 100; i >= 50; i -= 10) {
         body.innerHTML += `<div class="numbers"><p>${i}</p></div> `
      }

    // Написать цикл, который проходится по массиву строк, 
    // для каждой строки создает параграф и добавляет его 
    // в div с классом strings_container. Строки взять произвольные.

 const strings = ["Первая строка", "Вторая строка", "Третья строка"];
 for(let i = 0; i < strings.length; i++) {
     body.innerHTML += `<div class="strings_container"><p>${strings[i]}</p></div>`
 }


// Написать цикл, который проходится по массиву с объектами -
//  у объектов свойства first_name, last_name и  age (данные взять произвольные) -
//   и создает карточки только для совершеннолетних пользователей.
//    Карточка должна содержать информацию об имени, фамилии и возрасте пользователя.
//     Добавить все карточки в div с классом users_container.

 const users = [
   {
     first_name: "Ivan",
     last_name: "Ivanov",
     age: 25,
  },
   {
     first_name: "Maria",
     last_name: "Petrova",
    age: 32,
   },
   {
    first_name: "Anna",
    last_name: "Sokolova",
    age: 17,
   },
   {
    first_name: "Alexandr",
    last_name: "Volkov",
     age: 18,
  },
  {
    first_name: "Elena",
     last_name: "Prekrasnaya",
     age: 40,
   },
 ]
for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
        body.innerHTML += `<div class="users_container">
        <p>${users[i].first_name} ${users[i].last_name} ${users[i].age}</p>
        </div>` 
    }
 }