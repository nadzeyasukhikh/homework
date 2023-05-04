// Создать кнопку и красный квадрат с размерами 200х200px.
// При клике на кнопку менять у квадрата цвет заднего фона на зеленый и
// уменьшать его до размеров 100х100px.

const redBoxDiv = document.querySelector(".redbox");
const button1 = document.querySelector(".btn1");
const redBoxDivColors = ["green","red"]
const redBoxDivHeidht = ["100px","200px"]
const redBoxDivWidth = ["100px","200px"]
let color1 = 0;
let height1 = 0;
let width1 = 0;
button1.addEventListener("click", function () {
  redBoxDiv.style.backgroundColor = redBoxDivColors[color1]
  redBoxDiv.style.height = redBoxDivHeidht[height1]
  redBoxDiv.style.width = redBoxDivWidth[width1]
  color1 = (color1 + 1) % redBoxDivColors.length
  height1 = (height1 + 1) % redBoxDivHeidht.length
  width1 = (width1 + 1) % redBoxDivWidth.length
  
});

// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку
// менять цвет на синий и выводить в консоль обновленный цвет квадрата.

const pinkBoxDiv = document.querySelector(".pinkbox");
const button2 = document.querySelector(".btn2");
const pinkBoxDivColors = ["blue","pink"];
let color2 = 0;
button2.addEventListener("click",function () {
    pinkBoxDiv.style.backgroundColor = pinkBoxDivColors[color2]
    color2 = (color2 + 1) % pinkBoxDivColors.length
    console.log(pinkBoxDiv.style.backgroundColor)
});

// Создать кнопку и квадрат с размерами 150х150px. 
// При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

const smallBoxDiv = document.querySelector(".smallbox");
const button3 = document.querySelector(".btn3");
const smallBoxDivHeigths = ["170px","150px"];
const smallBoxDivWidths = ["170px","150px"]
let height2 = 0;
let width2 = 0;

button3.addEventListener("click", function () {
  smallBoxDiv.style.height = smallBoxDivHeigths[height2]
  smallBoxDiv.style.width =smallBoxDivWidths[width2]
  height2 = (height2 + 1) % smallBoxDivHeigths.length
  width2 = (width2 + 1) % smallBoxDivWidths.length
    // smallBoxDiv.style.heigth = "170px"
    // smallBoxDiv.style.width = "170px"
})

// Создать кнопку и div с классом root. При клике на кнопку
//  в div создается параграф синего цвета. Текст параграфа произвольный.

const rootDiv1 = document.querySelector("#root1")
const button4 = document.querySelector(".btn4")

button4.addEventListener("click",function () {
    const paragraph = document.createElement("p");
    paragraph.style.color = 'blue';
    paragraph.textContent = 'У меня все получится!!!';
     rootDiv1.appendChild(paragraph);
  });

//   Создать кнопку и div с классом root. При клике на кнопку в div создаются 
//   по очереди параграфы синего и зеленого цветов. Первый цвет синий.

const rootDiv2 = document.querySelector("#root2")
const button5 = document.querySelector(".btn5")

const colors = ["blue", "green"];
let color = 0;

button5.addEventListener("click",function () {

    const paragraph1 = document.createElement("p");
    paragraph1.style.color = colors[color];
     paragraph1.textContent = "Надеюсь это будет работать"
     rootDiv2.appendChild(paragraph1);
     color = (color + 1) % colors.length;
    
})

