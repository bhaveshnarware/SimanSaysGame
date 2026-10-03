let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["yellow", "red", "purple", "green"];  //1

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log('game is started');
        started = true;

        levelup();
    }
});                                                //2

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameflash(randbtn);                         //3


}

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}                                                 //4

function checkans(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `game over!your score was <b>${level}</b> <br> press any key to start. `;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }                                                              //8
}

function btnpress() {
    let btn = this;
    userflash(btn);                             //6

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkans(userSeq.length - 1);
}



function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);

}                                               //7


let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);        //5
}



function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;                                          //9

}