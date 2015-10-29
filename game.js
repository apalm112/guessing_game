
var name = prompt('What is your name?');
    alert('Welcome to this awesome guessing game '  + name + '!' + '  Get ready for some fun!');
var score = 0;

function firstQuestion(){
var newCoder = prompt('Am I new to coding?  Yes or No');
  if (newCoder.toLowerCase() === 'yes' || newCoder.toLowerCase() === 'y') {
    alert('Right answer, ' + name + '. ' +' I am learning to code.');
    console.log('Correct answer');
    score += 1;
    } else  {
      alert('Wrong answer, ' + name + '. ' + ' I am new to coding!');
      console.log('Incorrect answer');
      }
    }
function secondQuestion(){
var readTolkien = prompt('Have I read the Lord of the Rings trilogy?  Yes or No');
  if (readTolkien.toLowerCase() === 'yes' || readTolkien.toLowerCase() === 'y' ){
    alert('Right answer, ' + name + ' I read those books, before the movies came out!');
    score += 1;
    console.log('Correct answer');
    } else {
      alert('Wrong answer, ' + name + '. ' + ' I have read those books & you should too.');
      console.log('Incorrect answer');
      }
    }
function thirdQuestion(){
var favoriteSport = prompt('Is my favorite sport cycling?');
  if (favoriteSport.toLowerCase() === 'yes' || favoriteSport.toLowerCase() === 'y' ) {
    alert('Yes, ' + name + '. ' + ' Cycling is awesome!');
    score += 1;
    console.log('Correct answer');
   } else  {
     alert('Wrong answer, cycling is my favorite sport.');
     console.log('Incorrect answer');
    }
  }
function fourthQuestion(){
var age = prompt('How old am I?');
  if (age > 42) {
    alert('Your answer is too high, I\'m\ not that old.');
  } else if (age < 42) {
      alert('Your answer is too low, I\'m\ not that young.');
  } else {
      alert('Your answer is correct!  I am 42.');
    }
  }
function fifthQuestion(){
var stp = prompt('Have I ridden from Seattle to Portland in one day?  Yes or No.');
  if (stp.toLowerCase() === 'y' || stp.toLowerCase() === 'yes') {
    alert('That is correct!  I\'ve\ done it three times.');
    console.log('Correct answer');
  } else {
    alert('That is incorrect.  I have ridden the STP.');
    }
  }
// numeric answer-question next
function sixthQuestion(){
var tourWins = prompt('How many Tour de France\'s\ did Greg LeMond win?');
  if (tourWins === '3') {
    alert('That is correct!  He won in 1986, 1989 and 1990.');
  } else if (tourWins > '3') {
    alert('Incorrect, he did not win that many.');
  } else {
    alert('Incorrect, he won more than that.');
   }
  }

// add a joke
function seventhQuestion(){
var joke = prompt('Why do you need to carry radioactive materials in sealed, lead containers?')
  if (joke.toLowerCase === 'why') {
  alert('To stop it from falling out!');
  } else {
    alert('To stop it from falling out!');
    }
  }

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();
seventhQuestion();