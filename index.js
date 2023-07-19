const buttons=document.querySelectorAll('button');
const resultEl=document.getElementById('result');
let playerScore=0;
let computerScore=0;
const playerScoreEl=document.getElementById('user-score');
const computerScoreEl=document.getElementById('computer-score');

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        // console.log("User choice!", button.className,"computer choice!",computerPlay());
        const result=playRound(button.className,computerPlay());
        resultEl.textContent=result;
        // console.log(result);
    });
});

function computerPlay(){
    const choices=['Rock','Paper','Scissors'];
    const randomChoice=Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection)
    {
        return "It's a tie!"
    }
    else if((playerSelection==='Rock' && computerSelection==='Scissors') || (playerSelection==='Paper' && computerSelection==='Rock') || (playerSelection==='Scissors' && computerSelection==='Paper'))
    {
        playerScore++;
        playerScoreEl.textContent=playerScore;
        return "You Win! " + playerSelection+" beats "+computerSelection;
    }
    else
    {
        computerScore++;
        computerScoreEl.textContent=computerScore;
        return "You Lose! " + computerSelection+" beats "+playerSelection;
    }
}