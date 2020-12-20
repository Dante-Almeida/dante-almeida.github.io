var patternOne;
var patternTwo;
var state = 0;

function stateChanger() {
 if (state > 6) {
  state = 0;
 } else {
  state++;
 }

}

function debug() {
 document.getElementById('debugger')
  .innerHTML = state;
}

setInterval(stateChanger, 1000);
setInterval(debug, 1000);


function simpleGlow() {
 clearInterval(patternOne);
 clearInterval(patternTwo);
 document.getElementById('redOff').id =
  'redOn';
 document.getElementById('purpleOff').id =
  'purpleOn';
 document.getElementById('blueOff').id =
  'blueOn';
}


function pattern1() {
 clearInterval(patternTwo);
 if (state % 2 === 0) {

  document.getElementById('redOn').id =
   'redOff';
  document.getElementById('purpleOn').id =
   'purpleOff';
  document.getElementById('blueOn').id =
   'blueOff';

 } else {
  document.getElementById('redOff').id =
   'redOn';
  document.getElementById('purpleOff').id =
   'purpleOn';
  document.getElementById('blueOff').id =
   'blueOn';
 }
}

function pattern2() {
 clearInterval(patternOne);
 switch (state) {
  case 0:
   document.getElementById('redOn').id =
    'redOff';
   document.getElementById('purpleOn').id =
    'purpleOff';
   document.getElementById('blueOn').id =
    'blueOff';

   break;
  case 1:
   document.getElementById('redOff')
    .id = 'redOn';

   break;
  case 2:
   document.getElementById('redOn').id =
    'redOff';
   document.getElementById('purpleOff').id =
    'purpleOn';

   break;
  case 3:
   document.getElementById('purpleOn').id =
    'purpleOff';
   document.getElementById('blueOff').id =
    'blueOn';

   break;
  case 4:
   document.getElementById('blueOn').id =
    'blueOff';

   break;
  case 5:
   document.getElementById('redOff')
    .id = 'redOn';
   document.getElementById('purpleOff').id =
    'purpleOn';
   document.getElementById('blueOff').id =
    'blueOn';

   break;

 }
}