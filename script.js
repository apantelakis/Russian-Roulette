let livesp = 1;
let livesc = 1;
let bullets = 6;
document.getElementById("bullets").textContent = bullets; 

const reload = new Audio();
reload.src="sfx/reload.mp3"

const blank = new Audio();
blank.src="sfx/blank.mp3"

const live = new Audio();
live.src="sfx/live.mp3"

function getRandomInt(min, max) {
  return (Math.random() * (max-min) + min);
}

let liveshell = Math.round(getRandomInt(1, 6)); 
console.log(liveshell);

const buttonc = document.getElementById("shootc"); 
const buttonp = document.getElementById("shootp");


buttonc.addEventListener("click" , () => {
  
  if (liveshell == bullets) {
    live.play();
    document.body.style.background = "green";
    livesc -= 1;
    text = "opp is dead"
    document.getElementById("text").textContent= text;
    setTimeout(() => {
      window.location.href = "endscreenwin.html"      
    }, 1500);
  } else {
    blank.play();
    document.body.style.background = "red";
    text = "you shot opponent with a blank, you lost"
    document.getElementById("text").textContent= text;
    setTimeout(() => {
      window.location.href = "endscreen.html"      
    }, 1500);
  }
  bullets -= 1;
  document.getElementById("bullets").textContent = bullets; 
});

  

buttonp.addEventListener("click" , () => {
  
  if (liveshell == bullets) {
    live.play();
    document.body.style.background = "red";
    livesp -= 1;
    text = "you killed yourself"
    document.getElementById("text").textContent = text;
    setTimeout(() => {
      window.location.href = "endscreen.html"      
    }, 1500);
  } else {
    blank.play();
    text = "blank!"
    document.getElementById("text").textContent= text;
  }
  bullets -= 1;
  document.getElementById("bullets").textContent = bullets; 
  
});

















  
  
