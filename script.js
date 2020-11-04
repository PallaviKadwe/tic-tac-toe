
let lastClicked = "blue";
let whoseTurn = document.querySelector("#playerTurn");
let moves = ["", "", "", 
            "", "", "",
            "", "", ""];

function changeColor(x){
    if(lastClicked == "blue"){
        x.style.background = "red";
        lastClicked = "red";
        moves[x.id] = "red"
        whoseTurn.innerHTML = "Blue's turn next"
    }
    else{
        x.style.background = "blue";
        lastClicked = "blue";
        moves[x.id] = "blue"
        whoseTurn.innerHTML = "Red's turn next"
    }

    x.style.pointerEvents = "none";
    winLogic();
}

function resetColors(){
    let x = document.querySelectorAll("div > div")
    x.forEach( (y) =>{
        y.style.background = "wheat"
        y.style.pointerEvents = "auto"
    })

    moves = ["", "", "", 
    "", "", "",
    "", "", ""];
    whoseTurn.innerHTML = "Start Game";

}

/*
0,1,2
3,4,5
6,7,8

0,3,6
1,4,7
2,5,8

0,4,8
2,4,6
*/

function winLogic(){
    wonFlag = 0;

    if(moves[4] != ""){
        if((moves[4] === moves[0] && moves[4] === moves[8]) ||
        (moves[4] === moves[6] && moves[4] === moves[2]) ||
        (moves[4] === moves[1] && moves[4] === moves[7]) ||
        (moves[4] === moves[3] && moves[4] === moves[5]) )
        {
            whoseTurn.innerHTML =  moves[4].toUpperCase() + " You won!!"
            wonFlag = 1;
        }
    }
    if(moves[6] != ""){
        if((moves[6] === moves[3] && moves[6] === moves[0]) ||
        (moves[6] === moves[7] && moves[6] === moves[8]) )
        {
            whoseTurn.innerHTML = moves[6].toUpperCase() + " You won!!"
            wonFlag = 1;
        }
    }
    if(moves[2] != ""){
        if((moves[2] === moves[1] && moves[2] === moves[0]) ||
        (moves[2] === moves[5] && moves[2] === moves[8]) )
        {
            whoseTurn.innerHTML = moves[2].toUpperCase() + "You won!!"
            wonFlag = 1;
        }
    }

    // disable the board for play if player has won
    if(wonFlag){
        let x = document.querySelectorAll("div > div")
        x.forEach( (y) =>{
            y.style.pointerEvents = "none"
        })
    }
}