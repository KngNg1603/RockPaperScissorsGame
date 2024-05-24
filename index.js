var randomResult; 
var playerChooseList = document.querySelectorAll(".player");
var computerChooseList = document.querySelectorAll(".computer");

var index = 0;
var intervalId;
var timeoutId;

function startAnimation() {
    intervalId = setInterval(() => {
        for (var i = 0; i < 3; i++) {
            computerChooseList[i].classList.add('hidden');
        }
        computerChooseList[index].classList.remove('hidden');
        index = (index + 1) % 3;
    }, 100);
    document.querySelector(".com-text").textContent = "Computer is choosing";
}

function playerChoose(idx) {
    clearInterval(intervalId); 
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(startAnimation, 1000);
    for (var i = 0; i < playerChooseList.length; i++) {
        if(!playerChooseList[i].classList.contains("hidden")) {
            playerChooseList[i].classList.add("hidden");
        }
    }
    playerChooseList[idx].classList.remove("hidden");
    computerChoose();
    playGame(idx, randomResult);
}

function computerChoose() {
    randomResult = Math.floor(Math.random() * 3); 
    console.log(randomResult);
    for (var i = 0; i < computerChooseList.length; i++) {
        if(!computerChooseList[i].classList.contains("hidden")) {
            computerChooseList[i].classList.add("hidden");
        }
    }
    computerChooseList[randomResult].classList.remove("hidden");
    var compChoice;
    if (randomResult === 0) {
        compChoice = "Rock";
    }
    else if (randomResult === 1) {
        compChoice = "Paper";
    }
    else {
        compChoice = "Scissors";
    }
    document.querySelector(".com-text").textContent = compChoice;
}

function playGame(playerChoice , computerChoice) {
    if (playerChoice === 0) {
        if (computerChoice === 0) {
            document.querySelector("h1").textContent = "🚩 Draw 🚩";
        }
        else if (computerChoice === 1) {
            document.querySelector("h1").textContent = "Computer Win 🚩";
        }
        else {
            document.querySelector("h1").textContent = "🚩 Player Win";
        }
    }
    else if (playerChoice === 1) {
        if (computerChoice === 0) {
            document.querySelector("h1").textContent = "🚩 Player Win";
        }
        else if (computerChoice === 1) {
            document.querySelector("h1").textContent = "🚩 Draw 🚩";
        }
        else {
            document.querySelector("h1").textContent = "Computer Win 🚩";
        }
    }
    else {
        if (computerChoice === 0) {
            document.querySelector("h1").textContent = "Computer Win 🚩";
        }
        else if (computerChoice === 1) {
            document.querySelector("h1").textContent = "🚩 Player Win";
        }
        else {
            document.querySelector("h1").textContent = "🚩 Draw 🚩";
        }
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    startAnimation();
});