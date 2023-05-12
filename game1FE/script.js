const count_score = document.querySelector("#count_score");
const area = document.querySelector("#area");
let score = 0;
let object = document.querySelector("#object");
const hit_suond = new Audio("songs/hit.wav");
const miss_suond = new Audio("songs/miss.wav");
const game_over_suond = new Audio("songs/game_over.wav");

 function start_game() { 
  object.classList.toggle("start");
   score = 0;
   count_score.innerText = `0`;
   
  
 }


 function finish_game() {
  area.innerHTML = `<p>${"КОНЕЦ ИГРЫ"}</p>`
   object.classList.remove('start');
   game_over_suond.currentTime = 0;
   game_over_suond.play();
 



   start_game();
  
 }


function miss(event) {
  if (event.target.id == "area") {
    
     score--;
     count_score.innerText = `${score}`;
     if(score <= 0) {
      finish_game()
     
     }
  }
}

function hit() {
  score++;
  count_score.innerText =  `${score}`;
  object.classList.remove("start");
  void object.offsetWidth;
  object.classList.add("start");

  let random_offset = Math.random() * 340;
  object.style.left = `${random_offset}px`;
  hit_suond.currentTime = 0;
  hit_suond.play();
}

