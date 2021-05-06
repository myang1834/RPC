function computerPlay(){
    let choices = ['rock','paper','scissors']
    let rand = Math.floor(Math.random()*3)
    
    return choices[rand]
}   

export {computerPlay} 