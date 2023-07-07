const express = require('express')
var paperRockScissors = ["paper","rock","scissors"];
var playerPaper = document.getElementById("player-paper");
var playerRock = document.getElementById("player-rock");
var playerScissors = document.getElementById("player-scissors");
var popup = document.getElementById("popup");
var refresh = document.getElementById("refresh");
var result = document.getElementById("dwl");

var playerClicked;
 
playerPaper.onclick = function(){
    playerClicked = "paper";
    addStyle();
    computerChoice(playerClicked);
    playerClicked.disabled=true;
}
playerRock.onclick = function(){
    playerClicked = "rock";
    addStyle();
    computerChoice(playerClicked);
 
}
playerScissors.onclick = function(){
    playerClicked = "scissors";
    addStyle();
    computerChoice(playerClicked);
 
}
 
function computerChoice(playerClick){
    var computerClick = paperRockScissors[ Math.floor(Math.random() * (0 + 3))];
    hover(computerClick);
    resultAction(computerClick,playerClick);
 
 
}
 
var compPaper = document.getElementById("computer-paper");
var compRock = document.getElementById("computer-rock");
var compScissors = document.getElementById("computer-scissors");
var playerScore;
var computerScore;
 
function resultAction(computerClick,playerClick){
    if(computerClick === "paper"){
        if(playerClick === "scissors"){
            console.log("PLAYER MENANG")
            playerScore = 1;
            computerScore=0;
            resultPC();
        }
        else if(playerClick === "rock"){
            console.log("PLAYER KALAH");
            playerScore = 0;
            computerScore=1;
            resultPC();
        }
        else if(playerClick === "paper"){
            console.log("DRAW");
            playerScore = 0;
            computerScore=0;
            resultPC();
}
    }
    else if(computerClick === "rock"){
        if(playerClick === "scissors"){
            console.log("PLAYER KALAH");
            playerScore = 0;
            computerScore=1;
            resultPC();
        }
        else if(playerClick === "paper"){
            console.log("PLAYER MENANG");
            playerScore = 1;
            computerScore=0;
            resultPC();
        }
        else if (playerClick=== "rock"){
            console.log("DRAW");
            playerScore = 0;
            computerScore=0;
            resultPC();
        }
    }
    else if(computerClick === "scissors"){
        if(playerClick === "rock"){
            console.log("PLAYER MENANG");
            playerScore = 1;
            computerScore=0;
            resultPC();
        }    
        else if(playerClick === "paper"){
            console.log("PLAYER KALAH");
            playerScore = 0;
            computerScore=1;
            resultPC();
        }
        else if(playerClick==="scissors"){
            console.log("DRAW");
            playerScore = 0;
            computerScore=0;
            resultPC();
        }
    }
}
 
function resultPC(){
    if(playerScore == 1 && computerScore==0){
     
  finalResult("you-won");
    }
    else if(playerScore == 0 && computerScore==1){
        finalResult("computer-won");  
    }
    else if(playerScore == 0 && computerScore==0){
        finalResult("its-draw");  
    }  
}
 
 
function finalResult(won){
    if(won === "you-won"){
        popup.style.visibility = "visible";
        result.textContent = "PLAYER1 WIN";
        this.style.backgroundColor = "#4C9654";
        playerScore=0;
        computerScore=0;
 
    }
    else if(won == "computer-won"){
        popup.style.visibility = "visible";
        result.textContent = "COM WIN";
        this.style.backgroundColor = "#4C9654";
        playerScore=0;
        computerScore=0;
    }
    else {
        popup.style.visibility = "visible";
        result.textContent = "DRAW";
        this.style.backgroundColor = "#035B0C";
        playerScore=0;
        computerScore=0;
    }
}
 
refresh.onclick = function(){
    playerScore = 0;
    computerScore = 0;
 
    popup.style.visibility = "hidden";
    addStyle();
}
 
function hover(button){
    if(button == "paper"){
        compPaper.style.backgroundColor = "#C4C4C4";
    }
    else if(button == "rock"){
        compRock.style.backgroundColor = "#C4C4C4";
    }
    else if(button== "scissors") {
        compScissors.style.backgroundColor = "#C4C4C4";
    }
}

function addStyle(){
    compRock.style.backgroundColor = "#9C835F";
    compScissors.style.backgroundColor = "#9C835F";
    compPaper.style.backgroundColor = "#9C835F";
    console.log("background button refresh done")
}
  