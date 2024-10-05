let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choices");
let msg = document.querySelector(".msg");
let userScoreShow = document.querySelector("#userScore")
let compScoreShow = document.querySelector("#compScore")

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const drawGame = () =>{
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#4a5759"
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin){
        userScore++;
        userScoreShow.innerText = userScore;
        msg.innerText = `You Win!`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScoreShow.innerText = compScore;
        msg.innerText = `You lose!`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame()
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "scissors" ? true : false;
        }else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }else{
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
    
});