let x;
let diceOutcome;
let currentScore = 0;
let holdCount = 3;
let totalScore = 0;
const generateDice = () => {

     x = Math.random()*10;
    //console.log(x);
     diceOutcome = Math.trunc(x);
    console.log(diceOutcome);
}

const reset=() => {
    holdCount =3;
    totalScore=0;
    currentScore=0;
    document.querySelector(".roll").classList.remove("hidden");
    document.querySelector(".hold").classList.remove("hidden");
    document.querySelector(".winstatus").textContent=``;
    document.querySelector(".winstatus").style.color="black";
    document.querySelector(".holdleft").textContent=`HoldLeft: ${holdCount}`;
    document.querySelector(".holdleft").style.color="black";
    document.querySelector(".currentScore").textContent=`Current Score: ${currentScore}`;
    document.querySelector(".totalScore").textContent=`Total Score: ${totalScore}`;

}

 
 document.querySelector(".roll").addEventListener("click", function()
 { 
    //7
    do
    {
    generateDice();
    }
    while(diceOutcome<0 || diceOutcome > 6);
    document.querySelector(".diceOutcome1").textContent=`Dice Outcome : ${diceOutcome}`;
    // currentScore =  currentScore + diceOutcome ;
    //document.querySelector(".currentScore").textContent=`Current Score: ${currentScore}`;
    if(diceOutcome == 0)
    {
        currentScore = 0;
        document.querySelector(".currentScore").textContent=`Current Score: ${currentScore}`;
    }
    else
    {
        currentScore =  currentScore + diceOutcome ;
        document.querySelector(".currentScore").textContent=`Current Score: ${currentScore}`;
    }
});

document.querySelector(".hold").addEventListener("click", function(){

    holdCount = holdCount - 1;
    document.querySelector(".holdleft").textContent=`Hold Left: ${holdCount}`;
    
    if(holdCount <0)
    {
        document.querySelector(".roll").classList.add("hidden");
        document.querySelector(".hold").classList.add("hidden");
        document.querySelector(".holdleft").textContent=`You Have exceeded holds limit, you Lost!`;
        document.querySelector(".holdleft").style.color="red";
    }
    else
    {

    totalScore = totalScore + currentScore;
    document.querySelector(".totalScore").textContent=`Total Score: ${totalScore}`;
    currentScore= 0;
    document.querySelector(".currentScore").textContent=`Current Score: ${currentScore}`;
    if(totalScore >=100)
    {
        document.querySelector(".roll").classList.add("hidden");
        document.querySelector(".hold").classList.add("hidden");
        document.querySelector(".winstatus").textContent=`Congratulation, you WON!`;
        document.querySelector(".winstatus").style.color="green";

    }
    }
    
});
document.querySelector(".reset").addEventListener("click", ()=>reset());

