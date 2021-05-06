import {computerPlay} from "./computerPlay.js"
import {playRound} from "./playRound.js"


function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt('Choose Rock Paper or Scissors');
        const computerSelection = computerPlay();
        console.log('computer selects ' + computerSelection + ' player selects ' + playerSelection )
        console.log(playRound(playerSelection,computerSelection))
    }
}

export {game}