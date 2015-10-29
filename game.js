
var name = prompt('What is your name?');
    alert('Welcome to this awesome guessing game '  + name + '!' + '  Get ready for some fun!');
var score = 0;

function firstQuestion(){
var ans1 = document.getElementById('answer1');
var newCoder = prompt('Am I new to coding?  Yes or No');
  if (newCoder.toLowerCase() === 'yes' || newCoder.toLowerCase() === 'y') {
    ans1.innerHTML = 'Right answer, ' + name + '. ' +' I am learning to code.';
    console.log('Correct answer');
    score += 1;
    } else  {
      console.log('Incorrect answer');
      ans1.innerHTML = 'Wrong asnwer, ' + name + '. ' + ' I am new to coding!';
      }
    }
function secondQuestion(){
var ans2 = document.getElementById('answer2');
var readTolkien = prompt('Have I read the Lord of the Rings trilogy?  Yes or No');
  if (readTolkien.toLowerCase() === 'yes' || readTolkien.toLowerCase() === 'y' ){
    ans2.innerHTML = 'Right answer,' + name + 'I read those books before the movies came out!';
    score += 1;
    console.log('Correct answer');
    } else {
      ans2.innerHTML = 'Wrong answer, ' + name + '. ' + ' I have read those books & you should too.'
      console.log('Incorrect answer');
      }
    }
function thirdQuestion(){
var ans3 = document.getElementById('answer3');
var favoriteSport = prompt('Is my favorite sport cycling?');
  if (favoriteSport.toLowerCase() === 'yes' || favoriteSport.toLowerCase() === 'y' ) {
    ans3.innerHTML = 'Yes, ' + name + '. ' + ' Cycling is awesome!';

    score += 1;
    console.log('Correct answer');
   } else  {
    ans3.innerHTML = 'Wrong answer, cycling is my favorite sport.';
    console.log('Incorrect answer');
    }
  }
function fourthQuestion(){
var ans4 = document.getElementById('answer4');
var age = prompt('How old am I?');
  if (age > 42) {
    ans4.innerHTML = 'Your answer is too high, I\'m\ not that old.';

  } else if (age < 42) {
    ans4.innerHTML = 'Your answer is too low, I\'m\ not that young.';

  } else {
    ans4.innerHTML = 'Your answer is correct!  I am 42.';
    }
  }
function fifthQuestion(){
var ans5 = document.getElementById('answer5');
var stp = prompt('Have I ridden from Seattle to Portland in one day?  Yes or No.');
  if (stp.toLowerCase() === 'y' || stp.toLowerCase() === 'yes') {
    ans5.innerHTML = 'That is correct!  I\'ve\ done it three times.';
    console.log('Correct answer');
  } else {
    ans5.innerHTML = 'That is incorrect.  I have ridden the STP.';
    }
  }
// numeric answer-question next
function sixthQuestion(){
var ans6 = document.getElementById('answer6');
var tourWins = prompt('How many Tour de France\'s\ did Greg LeMond win?');
  if (tourWins === '3') {
    ans6.innerHTML = 'That is correct!  He won in 1986, 1989 and 1990.';
  } else if (tourWins > '3') {
    ans6.innerHTML = 'Incorrect, he did not win that many.';
  } else {
    ans6.innerHTML = 'Incorrect, he won more than that.';
   }
  }

// add a joke
function seventhQuestion(){
var ans7 = document.getElementById('answer7');
var joke = prompt('Why do you need to carry radioactive materials in sealed, lead containers?')
  if (joke.toLowerCase === 'why') {
    ans7.innerHTML = 'To stop it from falling out!';
  } else {
    ans7.innerHTML = 'To stop it from falling out!';
    }
  }

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();
seventhQuestion();