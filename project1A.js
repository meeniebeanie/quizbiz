
console.log("loaded");

//this is the blueprint for your database!

function Set(question, answer) {
  this.question = question;
  this.answer = answer;
}

//this are all your q&a sets!
var set1 = new Set('this is question1', true);
var set2 = new Set('this is question2', false);
var set3 = new Set('this is question3', true);
var set4 = new Set('this is question4', false);
var set5 = new Set('this is question5', true);
var set6 = new Set('this is question6', false);
var set7 = new Set('this is question7', true);
var set8 = new Set('this is question8', false);
var set9 = new Set('this is question9', true);
var set10 = new Set('this is question10', false);

//this is the array for your database!
var setArray = [set1, set2, set3, set4, set5, set6, set7, set8, set9, set10];

//var random question randomizes questions, pairs the random question to random answer.
var random = Math.floor((Math.random() * 10));
var randomAnswer = false;
var randomQuestion = '';
var quest = $(".questionsText");

//next question function
function nextQuestion(){
  var random = Math.floor((Math.random() * 10));
  randomQuestion = setArray[random].question;
  randomAnswer = setArray[random].answer;

  //change class=questionText in html to the question text inside the setArray array
  quest.text(randomQuestion);
}
nextQuestion();


//what happens if player clicks true
var trueButton = $(".true");
trueButton.click(function() {
  var ansTrue = true;
  if (ansTrue == randomAnswer) {
    quest.html("you got it right!");
    console.log("you got it right! click enter for the next question.");
  }
  else {
    quest.html("nope the answer is False!");
    console.log("nope the answer is False! click enter for the next question.");
  }
  setTimeout(function nextQuestion(){
    var random = Math.floor((Math.random() * 10));
    randomQuestion = setArray[random].question;
    randomAnswer = setArray[random].answer;
    quest.text(randomQuestion);
  }, 1500);
});

//what happens if player clicks false
var falseButton = $(".false");
falseButton.click(function() {
  var ansFalse = false;
  if (ansFalse == randomAnswer) {
    quest.html("you got it right!");
    console.log("you got it right! click enter for the next question.");
  }
  else {
    quest.html("nope the answer is True!");
    console.log("nope the answer is True! click enter for the next question.");
  }
  setTimeout(function nextQuestion(){
    var random = Math.floor((Math.random() * 10));
    randomQuestion = setArray[random].question;
    randomAnswer = setArray[random].answer;
    quest.text(randomQuestion);
  }, 1500);
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
