var patternOne;
var patternTwo;
var patternThree;
var rAnDoM;
var state = 0;
var hertz = 1;


//define and start the cycle
function stateChanger() {
  if (state > 6) {
   state = 0;
  } else {
   state++;
  }
 document.getElementById('freq').innerHTML = state;
}

var cycle = setInterval(stateChanger, 1000);

//set speed
function frequency() {
  clearInterval(cycle);
  hertz = document.getElementById('speeder').value / 5;
  cycle = setInterval(stateChanger, 1000 / hertz);
  document.getElementById('frequencyOutput').innerHTML = hertz + 'Hz';
}


/*function for uninterrupted, continuous glow. Stop all patterns and set all lights as On */
function simpleGlow() {
 clearInterval(patternOne);
 clearInterval(patternTwo);
 clearInterval(patternThree);
 clearInterval(rAnDoM);

 document.getElementById('redOff').id = 'redOn';
 document.getElementById('purpleOff').id = 'purpleOn';
 document.getElementById('blueOff').id = 'blueOn';
}

//stop all patterns and set all lights as off
function turnOff() {
 clearInterval(patternOne);
 clearInterval(patternTwo);
 clearInterval(patternThree);
 clearInterval(rAnDoM);

 document.getElementById('redOn').id = 'redOff';
 document.getElementById('purpleOn').id = 'purpleOff';
 document.getElementById('blueOn').id = 'blueOff';
}


/*All lights turn on during odd states, and turn off during even states*/
function pattern1() {

 if (state % 2 === 0) {
  document.getElementById('redOn').id = 'redOff';
  document.getElementById('purpleOn').id = 'purpleOff';
  document.getElementById('blueOn').id = 'blueOff';
 } else {
  document.getElementById('redOff').id = 'redOn';
  document.getElementById('purpleOff').id = 'purpleOn';
  document.getElementById('blueOff').id = 'blueOn';
 }
}


function pattern2() {

 switch (state) {
  case 0:
   document.getElementById('redOn').id = 'redOff';
   document.getElementById('purpleOn').id = 'purpleOff';
   document.getElementById('blueOn').id = 'blueOff';
   break;
  case 1:
   document.getElementById('redOff').id = 'redOn';
   break;
  case 2:
   document.getElementById('redOn').id = 'redOff';
   document.getElementById('purpleOff').id = 'purpleOn';
   break;
  case 3:
   document.getElementById('purpleOn').id = 'purpleOff';
   document.getElementById('blueOff').id = 'blueOn';
   break;
  case 4:
   document.getElementById('blueOn').id = 'blueOff';
   break;
  case 5:
   document.getElementById('redOff').id = 'redOn';
   document.getElementById('purpleOff').id = 'purpleOn';
   document.getElementById('blueOff').id = 'blueOn';
   break;
 }
}

function pattern3() {
 switch (state) {
  case 0:
   document.getElementById('redOn').id = 'redOff';
   document.getElementById('purpleOn').id = 'purpleOff';
   document.getElementById('blueOn').id = 'blueOff';
   break;
  case 1:
   document.getElementById('redOff').id = 'redOn';
   break;
  case 2:
   document.getElementById('purpleOff').id = 'purpleOn';
   break;
  case 3:
   document.getElementById('blueOff').id = 'blueOn';
   break;
  case 4:
   document.getElementById('redOn').id = 'redOff';
   break;
  case 5:
   document.getElementById('purpleOn').id = 'purpleOff';
   break;
  case 6:
   document.getElementById('blueOn').id = 'blueOff';
 }
}


function randomizer() {
 if (Math.random() < 0.5) {
  document.getElementById('redOn').id = 'redOff';
 } else {
  document.getElementById('redOff').id = 'redOn';
 }

 if (Math.random() < 0.5) {
  document.getElementById('purpleOn').id = 'purpleOff';
 } else {
  document.getElementById('purpleOff').id = 'purpleOn';
 }

 if (Math.random() < 0.5) {
  document.getElementById('blueOn').id = 'blueOff';
 } else {
  document.getElementById('blueOff').id = 'blueOn';
 }
}
