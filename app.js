let gameSeq = [];
let userSeq = [];
 let maxlevel = 0;
let btns = ["yellow","red", "purple", "green"];

let started = false;

let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function () {
    if(started == false){
        console.log("game started");
        started = true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function() {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}
   

function  levelup() {
    userSeq =[];
    level++;
    h2.innerText = `level ${level}`;

    let randomIndex= Math.floor(Math.random() * 4);
    let randomColor = btns[randomIndex];
    let ranbtn = document.querySelector(`.${randomColor}`);
    
    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(ranbtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(ranbtn);
    
}
function checkAns(inx){
    
  if(userSeq[inx] === gameSeq[inx]) {
    if(userSeq.length == gameSeq.length) {
        setTimeout(levelup, 1000);
    }
}
  else {
    if(level > maxlevel){
        maxlevel = level;
        document.querySelector("h3").innerHTML = maxlevel;
    }
    h2.innerHTML = `game over! your score was<b>${level}</b> <br> press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor = "white";
        console.log("game over")

    },150);
    reset();
  }
  }



function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
   
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
    console.log (btn);

}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;


}