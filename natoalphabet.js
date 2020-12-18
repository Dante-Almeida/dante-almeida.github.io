//Autor: Dante Cardoso Pinto de Almeida
//Feel free to study, copy, modify and distribute this code

var outputBox = document.getElementById("outputBox");
var inputBox = document.getElementById("inputBox");

function toPhoneticAlphabet(someString){
  let result = someString.toLowerCase();
  result = result.replace(/ /g, "__");
  result = result.replace(/a/g,"-ALPHA");
  result = result.replace(/b/g,"-BRAVO");
  result = result.replace(/c/g,"-CHARLIE");
  result = result.replace(/d/g,"-DELTA");
  result = result.replace(/e/g,"-ECHO");
  result = result.replace(/f/g,"-FOXTROT");
  result = result.replace(/g/g,"-GOLF");
  result = result.replace(/h/g,"-HOTEL");
  result = result.replace(/i/g,"-INDIA");
  result = result.replace(/j/g,"-JULIETT");
  result = result.replace(/k/g,"-KILO");
  result = result.replace(/l/g,"-LIMA");
  result = result.replace(/m/g,"-MIKE");
  result = result.replace(/n/g,"-NOVEMBER");
  result = result.replace(/o/g,"-OSCAR");
  result = result.replace(/p/g,"-PAPA");
  result = result.replace(/q/g,"-QUEBEC");
  result = result.replace(/r/g,"-ROMEO");
  result = result.replace(/s/g,"-SIERRA");
  result = result.replace(/t/g,"-TANGO");
  result = result.replace(/u/g,"-UNIFORM");
  result = result.replace(/v/g,"-VICTOR");
  result = result.replace(/w/g,"-WHISKEY");
  result = result.replace(/x/g,"-XRAY");
  result = result.replace(/y/g,"-YANKEE");
  result = result.replace(/z/g,"-ZULU");
  return result;
}


function convert(){
  let output = toPhoneticAlphabet(inputBox.value);
  outputBox.innerHTML = output;
}

convert();