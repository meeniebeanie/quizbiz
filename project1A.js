
console.log("loaded");

//get the name of your players!

var getName1= prompt("Hey what's your name?");
var getName2= prompt("And your buddy's name?");

var player1 = $("#player1").html(getName1);
var player2 = $("#player2").html(getName2);

//switch turn

var playerTurn = 2;
function changeTurn(){
  if (playerTurn == 2){
    playerTurn = 1;
    $(".turn").html("It's " + getName1+"'s turn!");
    // console.log("it's " + getName1+"'s turn!");
  } else {
    playerTurn = 2;
    $(".turn").html("It's " + getName2+"'s turn!");
    // console.log("it's " + getName2+"'s turn!");
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
var set1 = new Set('This is question1', true);
var set2 = new Set('This is question2', false);
var set3 = new Set('This is question3', true);
var set4 = new Set('This is question4', false);
var set5 = new Set('This is question5', true);
var set6 = new Set('This is question6', false);
var set7 = new Set('This is question7', true);
var set8 = new Set('This is question8', false);
var set9 = new Set('This is question9', true);
var set10 = new Set('This is question10', false);

//var random question randomizes questions, pairs the random question to random answer.
// var random = Math.floor((Math.random() * 10));

var random = 0;
var randomAnswer = false;
var randomQuestion = '';
var quest = $(".questionsText");

//next question function
function nextQuestion() {
  random = Math.floor(Math.random() * setArray.length);
  randomQuestion = setArray[random].question;
  randomAnswer = setArray[random].answer;
  console.log(setArray + "before");
  setArray.splice(random, 1);
  console.log(setArray + "after");

  //change class=questionText in html to the question text inside the setArray array
  quest.text(randomQuestion);
}
nextQuestion();

//reset function
function reset() {
  setArray = [set1, set2, set3, set4, set5, set6, set7, set8, set9, set10];
  player1Score = 0;
  $("#score1").html(player1Score);
  player2Score = 0;
  $("#score2").html(player2Score);
}

//check win
function checkWin() {
  if (setArray.length === 0) {
    if (player1Score > player2Score){
      alert(getName1 + " wins!");
      reset();
    }
    else {
      alert(getName2 + " wins!");
      reset();
    }
  } else {}
}



//what happens if player clicks true
var trueButton = $(".true");
trueButton.click(function() {
  var ansTrue = true;
  if (ansTrue == randomAnswer) {
    quest.html("<p class='right'>You got it right!</p>");
    console.log("You got it right! click enter for the next question.");
    addScore();
    console.log(getName1 + "'s score is: " + player1Score);
    console.log(getName2 + "'s score is: " + player2Score);
  }
  else {
    quest.html("<p class='wrong'>Nope the answer is False</p>");
    console.log("Nope the answer is False! click enter for the next question.");
  }
  setTimeout(nextQuestion, 1500);
  checkWin();
  changeTurn();
});

//what happens if player clicks false
var falseButton = $(".false");
falseButton.click(function() {
  var ansFalse = false;
  if (ansFalse == randomAnswer) {
    quest.html("<p class='right'>You got it right!</p>");
    console.log("You got it right! click enter for the next question.");
    addScore();
    console.log(getName1 + "'s score is: " + player1Score);
    console.log(getName2 + "'s score is: " + player2Score);
  }
  else {
    quest.html("<p class='wrong'>Nope the answer is False</p>");
    console.log("Nope the answer is True! click enter for the next question.");
  }
  setTimeout(nextQuestion, 1500);
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
