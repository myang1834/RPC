import {computerPlay} from "./computerPlay.js"

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'rock' ){
        return "draw rock vs rock"
    }else if(playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors' ){
        return 'player wins rock beats scissors'
    }else if(playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper' ){
        return 'computer wins paper covers rock'
    }else if(playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock' ){
        return 'player wins paper covers rock'
    }else if(playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors' ){
        return 'computer wins paper loses to rock'
    }else if(playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'paper' ){
        return "draw paper vs paper"
    }else if(playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock' ){
        return 'computer wins rock beats scissors'
    }else if(playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper' ){
        return 'player wins scissors beats paper'
    }else if(playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'scissors' ){
        return 'draw scissors vs scissors'
    }
}


export {playRound} 
