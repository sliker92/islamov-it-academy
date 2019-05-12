function Question(question, answer, correctAnswer) {
  this.question = question;
  this.answer = answer;
  this.correctAnswer = correctAnswer;
}

Question.getQuestion = function(arr) {
  var index = [Math.floor(Math.random() * arr.length)];
  var randomQuestion = arr[index];
  console.log(randomQuestion.question);

  for (var i = 0; i < randomQuestion.answer.length; i++) {
    console.log((i + 1) + '. ' + randomQuestion.answer[i]);
  }
  return randomQuestion;
};

Question.checkAnswer =  function() {
  if (+userAnswer === activeQuestion.correctAnswer) {
    console.log('Right answer!');
  } else {
    console.log('Wrong answer!');
  }
};

var question1 = new Question('What is always coming, but never arrives?', ['Life', 'Tomorrow', 'Friend'], 2);
var question2 = new Question('What can be broken, but is never held?', ['A promise', 'Friendship', 'Hearth'], 1);
var question3 = new Question('What is it that lives if it is fed, and dies if you give it a drink?', ['Animal', 'Flower', 'Fire'], 3);
var allQuestion = [question1, question2, question3];

var activeQuestion = Question.getQuestion(allQuestion);
var userAnswer = prompt('Select answer.');
Question.checkAnswer();

