let numOnDiceOne = Math.floor((Math.random()*6)+1);
console.log(numOnDiceOne);
function diceChangeOne(){
    if(numOnDiceOne===1){
       dice_one = document.getElementById("random_Dice_1").innerHTML = ("<img id = 'random_Dice' src='assets/dice__face_1.png' alt='an dice face'>");
    }else if(numOnDiceOne===2){
        dice_one = document.getElementById("random_Dice_1").innerHTML = ("<img id = 'random_Dice' src='assets/dice__face_2.png' alt='an dice face'>");
    }else if(numOnDiceOne===3){
        dice_one = document.getElementById("random_Dice_1").innerHTML = ("<img id = 'random_Dice' src='assets/dice__face_3.png' alt='an dice face'>");
    }else if(numOnDiceOne===4){
        dice_one = document.getElementById("random_Dice_1").innerHTML = ("<img id = 'random_Dice' src='assets/dice__face_4.png' alt='an dice face'>");
    }else if(numOnDiceOne===5){
        dice_one = document.getElementById("random_Dice_1").innerHTML = ("<img id = 'random_Dice' src='assets/dice__face_5.png' alt='an dice face'>");
    }else if(numOnDiceOne===6){
        dice_one = document.getElementById("random_Dice_1").innerHTML = ("<img id = 'random_Dice' src='assets/dice__face_6.png' alt='an dice face'>");
    }
    return dice_one;
}

let numOnDicetwo = Math.floor((Math.random()*6)+1);
console.log(numOnDicetwo);

function diceChangeTwo(){
    if(numOnDicetwo===1){
        dice_two = document.getElementById("random_Dice_2").innerHTML = ("<img id = 'random_Dice' src='assets/dice__face_1.png' alt='an dice face'>");
     }else if(numOnDicetwo===2){
         dice_two = document.getElementById("random_Dice_2").innerHTML = ("<img id = 'random_Dice' src='assets/dice__face_2.png' alt='an dice face'>");
     }else if(numOnDicetwo===3){
         dice_two = document.getElementById("random_Dice_2").innerHTML = ("<img id = 'random_Dice' src='assets/dice__face_3.png' alt='an dice face'>");
     }else if(numOnDicetwo===4){
         dice_two = document.getElementById("random_Dice_2").innerHTML = ("<img id = 'random_Dice' src='assets/dice__face_4.png' alt='an dice face'>");
     }else if(numOnDicetwo===5){
         dice_two = document.getElementById("random_Dice_2").innerHTML = ("<img id = 'random_Dice' src='assets/dice__face_5.png' alt='an dice face'>");
     }else if(numOnDicetwo===6){
         dice_two = document.getElementById("random_Dice_2").innerHTML = ("<img id = 'random_Dice' src='assets/dice__face_6.png' alt='an dice face'>");
     }
     return dice_two;
}

function winner(){
    if(numOnDiceOne>numOnDicetwo){
       realWinner = document.getElementById("realWinner").innerText = "Winner is Player 1";
    }else if(numOnDiceOne<numOnDicetwo){
       realWinner = document.getElementById("realWinner").innerText = "Winner is Player 2";
    }else{
        realWinner = document.getElementById("realWinner").innerText = "It's a draw!!";
    }
    return realWinner;
}


winner();
diceChangeTwo();
diceChangeOne();

