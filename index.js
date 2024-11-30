let userScore=0;
let compScore=0;
let drawscore=0;
const choices=document.querySelectorAll(".choice");
let newGame = document.querySelector(".new-game-btn");
let msgDisp=document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const genCompChoice =()=>{
    let options=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx]
};

const drawGame=()=>{
    drawscore++;
    msgDisp.innerText="Game was draw . Play again.";
    msgDisp.style.backgroundColor="#081b31";
       
};

const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        msgDisp.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        msgDisp.style.backgroundColor="green";
        userScorePara.innerHTML=userScore;
        
    }   
    else{
        
        compScore++;
        msgDisp.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msgDisp.style.backgroundColor="red";
        compScorePara.innerHTML=compScore;
    }
};
const playGame=(userChoice)=>{
    console.log("user choice " , userChoice);
    const compChoice=genCompChoice();
    console.log("Comp choice = ",compChoice)
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if((userChoice === "rock" && compChoice==="paper") ||
           (userChoice === "paper" && compChoice==="scissors") ||
           (userChoice === "scissors" && compChoice==="rock") )
           {
            userWin=false;
        }
        else{
            userWin=true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    newGame.classList.remove("hide");
    })
});

const restart=()=>{
 userScore=0;
 compScore=0;
 compScorePara.innerHTML=compScore;
 userScorePara.innerHTML=userScore;
 msgDisp.innerText="Play your move";
 msgDisp.style.backgroundColor="#081b31";

}

newGame.addEventListener("click",restart);