/*number of coins*/

var change, oneCent, fiveCent, tenCent, twentyfiveCent, fiftyCent, oneDolar, twoDolar, fiveDolar, tenDolar;
change = oneCent = fiveCent = tenCent = twentyfiveCent = fiftyCent = oneDolar = twoDolar = fiveDolar = tenDolar = 0;
var hard = false;

/*change functions*/

function setChange() {
 change = (oneCent * 0.01) + (fiveCent * 0.05) + (tenCent * 0.1) +(twentyfiveCent * 0.25) + (fiftyCent * 0.5) + oneDolar + (twoDolar * 2) +(fiveDolar * 5) + (tenDolar * 10);
 change = change.toFixed(2);
 document.getElementById("oneC").innerHTML = oneCent;
 document.getElementById("fiveC").innerHTML = fiveCent;
 document.getElementById("tenC").innerHTML = tenCent;
 document.getElementById("twentyfiveC").innerHTML = twentyfiveCent;
 document.getElementById("fiftyC").innerHTML = fiftyCent;
 document.getElementById("oneD").innerHTML = oneDolar;
 document.getElementById("twoD").innerHTML = twoDolar;
 document.getElementById("fiveD").innerHTML = fiveDolar;
 document.getElementById("tenD").innerHTML = tenDolar;
 if (!hard) {
    document.getElementById("change").innerHTML = "$" + change;
 } else {
    document.getElementById("change").innerHTML = " ";
 }
}

function monus(x) {
 if (x > 0) {
  return x - 1;
 }
 return x;
}

var price, paying;
var lives = 3;
var points;
var difficulty = 1;
var goal;


function setLives() {
 switch (lives) {
  case 3:
   document.getElementById("livesleft").innerHTML = "Lives: " +  '&#10084;' + '&#10084;' + '&#10084;';
   break;
  case 2:
   document.getElementById("livesleft")
    .innerHTML = "Lives: " +  '&#10084;' + '&#10084;' +  '&#128148;';
   break;
  case 1:
   document.getElementById("livesleft").innerHTML = "Lives: " +  '&#10084;' + '&#128148;' + '&#128148;';
   break;
  case 0:
   document.getElementById("livesleft")
    .innerHTML = "Lives: " +  '&#128148;' + '&#128148;' +  '&#128148;';
   document.getElementById("feedback").innerHTML =
    "You comitted too many mistakes! YOU ARE FIRED! GAME OVER";
 }
}

function setPrice() {
 let x = (Math.round((Math.random()*1000)) / 100) * difficulty;
 x = x.toFixed(2);
 return x;
}

function setPaying() {
 let wallet = [1, 2, 5, 10, 20, 50, 100];
 let i = 0;
 while (price > wallet[i]) {
  i++;
 }
 return wallet[i];
}

function setCostumer() {
 let costumerFace = ['&#128104;', '&#128102;', '&#128103;', '&#128105;', '&#128125;', '&#128113;', '&#128114;',
  '&#128115;', '&#128116;',  '&#128117;'];
 let i = Math.floor(Math.random()*10);
 return costumerFace[i];
}

function setRound() {
 if (lives > 0 && points < goal) {
  price = setPrice();
  document.getElementById("price").innerHTML = price;
  paying = setPaying();
  document.getElementById("payment").innerHTML = paying;
  change = oneCent = fiveCent = tenCent = twentyfiveCent =  fiftyCent = oneDolar = twoDolar = fiveDolar = tenDolar = 0;
  setChange();
 }
 if (points >= goal) {
  document.getElementById("feedback").innerHTML = "GOAL REACHED! YOU WON!";
 }
}

function setDifficulty(x) {
 switch (x) {
  case "easy":
   hard = false;
   goal = 20;
   difficulty = 1;
   document.getElementById("medium").checked = false;
   document.getElementById("hard").checked = false;
   break;
  case "medium":
   hard = false;
   goal = 35;
   difficulty = 2;
   document.getElementById("easy").checked = false;
   document.getElementById("hard").checked = false;
   break;
  case "hard":
   hard = true;
   goal = 50;
   difficulty = 3;
   document.getElementById("easy").checked = false;
   document.getElementById("medium").checked = false;

 }
}

function startGame() {
  document.getElementById("returnButton").disabled = false;
 if (!document.getElementById("easy").checked && !document.getElementById("medium").checked && !document.getElementById("hard").checked) {
  alert("Pick a difficulty level before starting");
  return;
 }
 lives = 3;
 points = 0;
 setLives();
 difficulty = 1;
 document.getElementById("start").innerHTML = "RESTART GAME";
 document.getElementById("feedback").innerHTML =  "New game started. Attend the first costumer in line." +  setCostumer();
 document.getElementById("points").innerHTML = "Points: " + points +  "&MediumSpace; Goal:" + goal;
 setRound();
}

function returnChange() {
 let correctAnswer = paying - price;
 correctAnswer = correctAnswer.toFixed(2);
 if (lives > 0) {
  if (change == correctAnswer) {
   document.getElementById("feedback").innerHTML = "CORRECT! Attend the next costumer in line." +  setCostumer();
   points += (1 + difficulty);
   document.getElementById("points").innerHTML = "Points: " + points +  "&MediumSpace; Goal:" + goal;
   difficulty += 0.3;
   setRound();
  } else {
   document.getElementById("feedback").innerHTML = "WRONG! Try again!";
   lives--;
   setLives();
  }
 }
}