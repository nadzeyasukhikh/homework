const count_score = document.querySelector("#count_score"); // Ищем счетчик
const area = document.querySelector("#area"); // Ищем объект игровое поле
const gameOver = document.querySelector(".game-over"); // Ищем сообщение Вы проиграли

let score = 0; // очки
let object = document.querySelector("#object"); // Ищем снежок
const hit_sound = new Audio("songs/hit.wav"); // Звук
const miss_sound = new Audio("songs/miss.wav"); // Звук

// Старт
function start_game() {
  area.classList.remove("finish");
  object.classList.toggle("start");
  gameOver.style.display = "none";
  score = 0; // обнуление очков
  count_score.innerText = `0`;
}

function hit() {
  // действие при попадании
  score++;
  count_score.innerText = `${score}`; // Счётчик очков

  object.classList.remove("start");
  void object.offsetWidth; // перекомпоновка DOM (API)
  object.classList.add("start");

  // Случайное появление снежка
  let random_offset = Math.floor(Math.random() * 400);
  object.style.left = `${random_offset}px`;

  hit_sound.currentTime = 0; // Звук
  hit_sound.play(); // Звук
}

function miss(event) {
  // дойствие при промахе
  if (event.target.id == "area" || event.target.id == "wrapper-game-over") {
    score--;
    count_score.innerText = `${score}`;
    if (score < 0) {
      finish_game();
    }
    miss_sound.currentTime = 0; // Звук
    miss_sound.play(); // Звук
  }
}

function finish_game() {
  const gameOver = document.querySelector(".game-over");
  object.classList.remove("start");
  count_score.innerText = `0`;
  gameOver.style.display = "block";
}
