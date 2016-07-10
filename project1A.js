console.log("loaded");

$(document).ready(function(){
  console.log("ready!");
});

//get the name of your players!
var getName1 = "";
var getName2 = "";

function nullNameCheck() {
  if (getName1 === ""){
    getName1 = "Player 1";
    return getName1;
  }
  else if (getName2 === ""){
    getName2 = "Player 2";
    return getName2;
  }
}

getName1 = prompt("Hey what's your name?");
nullNameCheck();
getName2 = prompt("And your buddy's name?");
nullNameCheck();

var player1 = $("#player1").html(getName1);
var player2 = $("#player2").html(getName2);


//switch turn

var playerTurn = 2;
function changeTurn(){
  if (playerTurn == 1){
    playerTurn = 2;
    $(".turn").html("It's " + getName2+"'s turn!");
    console.log("it's " + getName2+"'s turn!");
  } else {
    playerTurn = 1;
    $(".turn").html("It's " + getName1+"'s turn!");
    console.log("it's " + getName1+"'s turn!");
  }
}
changeTurn();

//scoreboard

var player1Score = 0;
var player2Score = 0;

function addScore (){
  if (playerTurn == 2) {
    player2Score ++;
    $("#score2").html(player2Score);
    return player2Score;
  } else if (playerTurn == 1) {
    player1Score ++;
    $("#score1").html(player1Score);
    return player1Score;
  }
}

//this is the blueprint for your database!

var setArray = [];

function Set(question, answer) {
  this.question = question;
  this.answer = answer;
  setArray.push(this);//this pushes data into an array, called setArray.
      // no more manual adding into arrays!: var setArray = [set1, set2, set3, set4, set5, set6, set7, set8, set9, set10];
}

//this are all your q&a sets!
var set1 = new Set('Cows do have best friends and become stressed when they are separated.', true);
var set2 = new Set('Vikings had horns on their helmets.', false);
var set3 = new Set('The term "junkie" comes from the fact that recreational heroin users in the early 1900s would sell scrap metal to pay for their heroin.', true);
// var set4 = new Set('Tomatoes are vegetables.', false);
var set4 = new Set('I\'m fine.', false);
var set5 = new Set('Turtles can breathe through their butts and pee through their mouths.', true);
var set6 = new Set('Dogs sweat through their tongue.', false);
var set7 = new Set('Fingers prune underwater because of an evolutionary trait caused by the brain to enhance the grip of your fingers underwater.', true);
// var set8 = new Set('Bats are blind.', false);
var set8 = new Set('It\'s not you, its me.', false);
var set9 = new Set('Eskimos use refrigerators to keep their food from freezing', true);
var set10 = new Set('Goldfishes have only 3 second memory.', false);



//var random question randomizes questions, pairs the random question to random answer.

var random = 0;
var randomAnswer = false;
var randomQuestion = '';
var quest = $(".questionsText");

//next question function
function nextQuestion() {
  if (setArray.length > 0) {
    random = Math.floor(Math.random() * setArray.length);
    randomQuestion = setArray[random].question;
    randomAnswer = setArray[random].answer;
    setArray.splice(random, 1);
    console.log(setArray.length + " questions left.");

    //change class=questionText in html to the question text inside the setArray array
    quest.text(randomQuestion);
  }
  else {}
}
nextQuestion();

//reset function

function reset(){
  setArray = [set1, set2, set3, set4, set5, set6, set7, set8, set9, set10];
  player1Score = 0;
  $("#score1").html(player1Score);
  player2Score = 0;
  $("#score2").html(player2Score);
  quest.removeClass("p1WinText");
  quest.removeClass("p2WinText");
  quest.removeClass("tieText");
  nextQuestion();
}

//check win

function checkWin() {
  if (setArray.length === 0) {
    if (player1Score > player2Score){
      quest.text(getName1 + " wins!").addClass("p1WinText");
      console.log(getName1 + " wins!");
      setTimeout(reset, 2000);
    }
    else if (player1Score < player2Score){
      quest.text(getName2 + " wins!").addClass("p2WinText");
      console.log(getName2 + " wins!");
      setTimeout(reset, 2000);
    }
    else {
      quest.text("It\'s a tie!").addClass("tieText");
      console.log("It's a tie!");
      setTimeout(reset, 2000);
    }
  }
}
checkWin();

//what happens if player clicks true
var trueButton = $(".true");
trueButton.click(function() {
  if (true === randomAnswer) {
    quest.html("<p class='right'>You got it right!</p>");
    addScore();
    console.log(getName1 + "'s score is: " + player1Score);
    console.log(getName2 + "'s score is: " + player2Score);
  }
  else {
    quest.html("<p class='wrong'>Nope the answer is False</p>");
  }
  setTimeout(nextQuestion, 250);
  checkWin();
  changeTurn();
});

//what happens if player clicks false
var falseButton = $(".false");
falseButton.click(function() {
  if (false === randomAnswer) {
    quest.html("<p class='right'>You got it right!</p>");
    addScore();
    console.log(getName1 + "'s score is: " + player1Score);
    console.log(getName2 + "'s score is: " + player2Score);
  }
  else {
    quest.html("<p class='wrong'>Nope the answer is False</p>");
  }
  setTimeout(nextQuestion, 250);
  checkWin();
  changeTurn();
});














// numberOfQuestions(); {
//   return setArray.length;
//   //It should return an integer that is the number of questions in a game
// }
//
// currentQuestion() {
//   //It should return an integer that is the zero-based index of the current question in the quiz
// }
//
// correctAnswer() {
//   //It should return an integer that is the zero-based index the correct answer for the currrent question
// }
//
// numberOfChoices(){
//   //It should return an integer that is the number of choices for the current question
//
// }
//
// playTurn(choice){
//   //It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.
// }
//
//
// isGameOver(){
//   //It should return a true or false if the quiz is over.
// }
//
// whoWon(){
//   //It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.
// }
//
//
// restart(){
//   //It should restart the game so it can be played again.
//
// }
//
// // Assumptions
// // It is assumed that the turns of the player will be automatically changed after each turn.
