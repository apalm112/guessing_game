
var name = prompt('What is your name?');
    alert('Welcome to this awesome guessing game '  + name + '!' + '  Get ready for some fun!');
var score = 0;

function firstQuestion(){
var image1 = 'img/img1.jpg';
var ans1 = document.getElementById('answer1');
var newCoder = prompt('Am I new to coding?  Yes or No');
  if (newCoder.toLowerCase() === 'yes' || newCoder.toLowerCase() === 'y') {
    ans1.innerHTML = 'Right answer, ' + name + '. ' +' I am learning to code.' + '<br><img width="300" src="' + image1 + '">';
    console.log('Correct answer');
    score += 1;
    ans1.className = 'green';
    } else  {
      console.log('Incorrect answer');
      ans1.innerHTML = 'Wrong answer, ' + name + '. ' + ' I am new to coding!';
      ans1.className = 'red';
      }
    }
function secondQuestion(){
var image2 = 'img/img2.jpg';
var ans2 = document.getElementById('answer2');
var readTolkien = prompt('Have I read the Lord of the Rings trilogy?  Yes or No');
  if (readTolkien.toLowerCase() === 'yes' || readTolkien.toLowerCase() === 'y' ){
    ans2.innerHTML = 'Right answer,' + name + 'I read those books before the movies came out!' + '<br><img width="300" src="' + image2 + '">';
    score += 1;
    console.log('Correct answer');
    ans2.className = 'green';
    } else {
      ans2.innerHTML = 'Wrong answer, ' + name + '. ' + ' I have read those books & you should too.'
      console.log('Incorrect answer');
      ans2.className = 'red';
      }
    }
function thirdQuestion(){
var image3 = 'img/img3.jpg';
var ans3 = document.getElementById('answer3');
var favoriteSport = prompt('Is my favorite sport cycling?');
  if (favoriteSport.toLowerCase() === 'yes' || favoriteSport.toLowerCase() === 'y' ) {
    ans3.innerHTML = 'Yes, ' + name + '. ' + ' Cycling is awesome!' + '<br><img width="300" src="' + image3 + '">';

    score += 1;
    console.log('Correct answer');
    ans3.className = 'green';
   } else  {
    ans3.innerHTML = 'Wrong answer, cycling is my favorite sport.';
    console.log('Incorrect answer');
    ans3.className = 'red';
    }
  }
function fourthQuestion(){
var image4 = 'img/img4.jpg';
var ans4 = document.getElementById('answer4');
var age = prompt('How old am I?');
  if (age > 42) {
    ans4.innerHTML = 'Your answer is too high, I\'m\ not that old.';
    ans4.className = 'red';

  } else if (age < 42) {
    ans4.innerHTML = 'Your answer is too low, I\'m\ not that young.';
    ans4.className = 'red';

  } else {
    ans4.innerHTML = 'Your answer is correct!  I am 42.' + '<br><img width="300" src="' + image4 + '">';
    ans4.className = 'green';
    }
  }
function fifthQuestion(){
var image5 = 'img/img5.jpg';
var ans5 = document.getElementById('answer5');
var stp = prompt('Have I ridden from Seattle to Portland in one day?  Yes or No.');
  if (stp.toLowerCase() === 'y' || stp.toLowerCase() === 'yes') {
    ans5.innerHTML = 'That is correct!  I\'ve\ done it three times.' + '<br><img width="300" src="' + image5 + '">';
    console.log('Correct answer');
    ans5.className = 'green';
  } else {
    ans5.innerHTML = 'That is incorrect.  I have ridden the STP.';
    ans5.className = 'red';
    }
  }
// numeric answer-question next
function sixthQuestion(){
var image6 = 'img/img6.jpg';
var ans6 = document.getElementById('answer6');
var tourWins = prompt('How many Tour de France\'s\ did Greg LeMond win?');
  if (tourWins === '3') {
    ans6.innerHTML = 'That is correct!  He won in 1986, 1989 and 1990.' + '<br><img width="300" src="' + image6 + '">';
    ans6.className = 'green';
  } else if (tourWins > '3') {
    ans6.innerHTML = 'Incorrect, he did not win that many.';
    ans6.className = 'red';
  } else {
    ans6.innerHTML = 'Incorrect, he won more than that.';
    ans6.className = 'red';
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
//setTimeout(firstQuestion, 1000);
setTimeout(secondQuestion, 2000);
// thirdQuestion();
setTimeout(thirdQuestion, 2000);
setTimeout(fourthQuestion, 2000);
//fifthQuestion();
setTimeout(fifthQuestion, 2000);
setTimeout(sixthQuestion, 2000);
// secondQuestion();
// thirdQuestion();
// fourthQuestion();
// fifthQuestion();
// sixthQuestion();
// seventhQuestion();
