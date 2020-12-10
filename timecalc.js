//Autor: Dante Cardoso Pinto de Almeida
/* Feel free to study, copy, modify and distribute this code */

//today's date
var today = Date();

function timer() {
    today = Date();
    document.getElementById("today").innerHTML = today;
    }

setInterval(timer, 1000);

var element = document.querySelector("#outputbox");

//define time class

class time {
  constructor(day, hour, minute,second) {
   this.day = day;
   this.hour = hour;
   this.minute = minute;
   this.second = second;
  }
 }


//find the total of seconds

function totalsec(x) {
  var ts = x.second + (60 * x.minute) + (3600 * x.hour) + (86400 * x.day);
  return ts;
 }


//display log

function display(t) {
  console.log(t.day + "d " + t.hour +  "h " + t.minute + "m " + t.second +  "s ");
  }

//adjustment of the time format

function adjust(t) {
   console.log("adjusting... ");
   while (t.second > 59) {
      t.second -= 60;
      t.minute++;
      }

 while (t.minute > 59) {
      t.minute -= 60;
      t.hour++;
      }

 while (t.hour > 23) {
      t.hour -= 24;
      t.day++;
     }
  }

//Convert and output time units

function convert(x) {
  console.log("Converting... ");
  document.getElementById("out3").innerHTML = "which is equal to:"
  var s = totalsec(x);
  console.log(s + " seconds");
  document.getElementById("outsec").innerHTML = s + " seconds";
  var m = s / 60;
  console.log(m + " minutes");
  document.getElementById("outmin").innerHTML = m + " minutes";
  var h = m / 60;
  console.log(h + " hours");
  document.getElementById("outhour").innerHTML = h + " hours";
  var d = h / 24;
  console.log(d + " days");
  document.getElementById("outday").innerHTML = d + " days";
  var w = d / 7;
  console.log(w + " weeks");
  document.getElementById("outweek").innerHTML = w + " weeks";
  var avm = d / 30.437;
  console.log(avm + " average months");
  document.getElementById("outmonth").innerHTML = avm + " average months";
  var avy = d / 365.25;
  console.log(avy + " average years");
  document.getElementById("outyear").innerHTML = avy + " average years";
  var le = avy / 72.6;
  console.log(le + " life expectancy ");
  document.getElementById("outle").innerHTML = le + " times the World's average human life expectancy in 2019";
  var ago = new Date();
  ago.setSeconds(ago.getSeconds() - s)
  document.getElementById("outago").innerHTML = x.day + "d " +  x.hour + "h " + x.minute +  "m " + x.second + "s ago it was " +  ago;
  var fromNow = new Date();
  fromNow.setSeconds(fromNow.getSeconds() + s);
  document.getElementById("outfromnow").innerHTML = "In " + x.day + "d " +  x.hour + "h " + x.minute +  "m " + x.second + "s it will be " +  fromNow;
  document.getElementById("out4").innerHTML = "During this period, light in the vacuum will have traveled:"
  var lskm = s * 299792.458;
  var lsmi = s * 186000;
  document.getElementById("out5").innerHTML = lskm + "Km (~" +  lsmi + "Mi)";
  document.getElementById("out6").innerHTML = "which is equal to:";
  var earthrad = lskm / 6378;
  document.getElementById("outearthrad").innerHTML = earthrad +  " times the Earth's equatorial radius. " +  '&#127760'
  var earthmoon = lskm / 384402;
  document.getElementById("outearthmoon").innerHTML =  earthmoon +  " times the average distance from Earth to the Moon." +  '&#127757' + '&#10141' + '&#127771';
  var earthsun = lskm / 149597870;
  document.getElementById("outearthsun").innerHTML = earthsun +  " times the average distance from Earth to the Sun." +  '&#127758' + '&#10141' + '&#9737';
  var sunalpha = lskm / 41343000000000;
  document.getElementById("outsunalpha").innerHTML = sunalpha + " times the distance from the Sun to Alpha Centauri." +  '&#10024';
 }


//addition of time

function add(x, y) {
  console.log("adding...");
  var sum = new time(x.day + y.day, x.hour + y.hour, x.minute + y.minute, x.second + y.second)
  adjust(sum);
  return sum;
 }

//output addition

function addition() {
  console.log("let's add!");
  // scroll to element
  element.scrollIntoView();
  var first = new time(+document.getElementById("dayone").value, +document.getElementById("hourone").value, +document.getElementById("minuteone").value, + document.getElementById("secondone").value);
  display(first);
  var second = new time(+document.getElementById("daytwo").value,  +document.getElementById("hourtwo").value, +document.getElementById("minutetwo").value, +document.getElementById("secondtwo").value);
  display(second);
  var result = add(first, second);
  display(result);
  document.getElementById("out1").innerHTML = "The sum of the time measurements is: "
  document.getElementById("out2").innerHTML = result.day + "d " +  result.hour + "h " + result.minute +  "m " + result.second + "s ";
  convert(result);
 }

//subtraction of time

function minus(x, y) {
   console.log("subtracting...");
   var resultado = 0;

   if (totalsec(x) > totalsec(y)) {
       resultado = totalsec(x) - totalsec(y);
   } else {
     resultado = totalsec(y) - totalsec(x);
   }

  var difference = new time(0, 0, 0, resultado);
  adjust(difference);
  return difference;
  }


//Output subtraction 

function subtraction() {
   console.log("let's subtract!");
   element.scrollIntoView(); // scroll to element
   var first = new time(+document.getElementById("dayone").value,  +document.getElementById("hourone").value, document.getElementById("minuteone").value, +document.getElementById("secondone").value);
   display(first);
   var second = new time(+document.getElementById("daytwo").value,  +document.getElementById("hourtwo").value, +document.getElementById("minutetwo").value, +document.getElementById("secondtwo").value);
   display(second);
   var result = minus(first, second);
   document.getElementById("out1").innerHTML =  "The difference of the time measurements is: "
   document.getElementById("out2").innerHTML = result.day + "d " +  result.hour + "h " + result.minute +  "m " + result.second + "s ";
   convert(result);
   }


//Multiplication Function 

function times() {
   console.log("let's multiply!");
   element.scrollIntoView(); // scroll to element
   var measure = new time(+document.getElementById("day3").value,  +document.getElementById("hour3").value, +document.getElementById("minute3").value, +document.getElementById("second3").value);
   display(measure);
   var factor = document.getElementById("fd").value;
   var product = totalsec(measure) * factor;
   var result = new time(0, 0, 0, product);
   adjust(result);
   document.getElementById("out1").innerHTML = "The the time measurement times " + factor + " results in: ";
   document.getElementById("out2").innerHTML = result.day + "d " +  result.hour + "h " + result.minute +  "m " + result.second + "s ";
   convert(result);
  }



//Division Function 

function division() {
   console.log("let's divide!");
   element.scrollIntoView(); // scroll to element
   var measure = new time(+document.getElementById("day3").value, +document.getElementById("hour3").value, +document.getElementById("minute3").value, +document.getElementById("second3").value);
   display(measure);
   var factor = +document.getElementById("fd").value;
   var quociente = totalsec(measure)/factor;
   var result = new time(0, 0, 0,  quociente);
   adjust(result);
   document.getElementById("out1").innerHTML =  "The the time measurement divided by " +  factor + " results in: ";
   document.getElementById("out2").innerHTML = result.day + "d " +  result.hour + "h " + result.minute +  "m " + result.second + "s ";
   convert(result);
  }

//Measure an interval defined by two dates

function measureInterval() {
   console.log("measuring...");
   element.scrollIntoView(); // scroll to element
   var date1 = new Date(document.getElementById("calendar1").value);
   var date2 = new Date(document.getElementById("calendar2").value);
   var tms1 = date1.getTime();
   var tms2 = date2.getTime();
   var dif = 0;
  
   if (tms1 > tms2) {
       dif = tms1 - tms2;
   } else {
       dif = tms2 - tms1;
   }

   var interval = new time(0, 0, 0, dif / 1000);
   adjust(interval);
   display(interval);
   document.getElementById("out1").innerHTML =  "The duration of the interval defined by these dates is: ";
   document.getElementById("out2").innerHTML = interval.day + "d " +  interval.hour + "h " + interval.minute + "m " + interval.second + "s ";
   convert(interval);
  }

//date plus/minus interval function

function measuredate() {

 // scroll to element

 element.scrollIntoView();

 var measure = new time(+document.getElementById("dayfour").value,  +document.getElementById("hourfour").value, +document.getElementById("minutefour").value, +document.getElementById("secondfour").value);
 display(measure);
 var pick = new Date(document.getElementById("calendar3").value);
 var before = new Date(document.getElementById("calendar3").value);
 before.setSeconds(before.getSeconds() - totalsec(measure));
 var after = new Date(document.getElementById("calendar3").value);
 after.setSeconds(after.getSeconds() + totalsec(measure));
 console.log(before);
 console.log(after);
 document.getElementById("outago").innerHTML = measure.day + "d " + measure.hour + "h " + measure.minute + "m " + measure.second +  "s before " + pick +  " is " + before;
 document.getElementById("outfromnow").innerHTML = measure.day + "d " +  measure.hour + "h " + measure.minute + "m " + measure.second + "s after " + pick +  " is " + after;

 //Erase previous output 

 document.getElementById("out1").innerHTML = " ";
 document.getElementById("out2").innerHTML = " ";
 document.getElementById("out3").innerHTML = " "
 document.getElementById("outsec").innerHTML = " ";
 document.getElementById("outmin").innerHTML = " ";
 document.getElementById("outhour").innerHTML = " ";
 document.getElementById("outday").innerHTML = " ";
 document.getElementById("outweek").innerHTML = " ";
 document.getElementById("outmonth").innerHTML = " ";
 document.getElementById("outyear").innerHTML = " ";
 document.getElementById("outle").innerHTML = " ";
 document.getElementById("out4").innerHTML = " "
 document.getElementById("out5").innerHTML = " ";
 document.getElementById("out6").innerHTML = " ";
 document.getElementById("outearthrad").innerHTML = " ";
 document.getElementById("outearthmoon").innerHTML = " ";
 document.getElementById("outearthsun").innerHTML = " ";
 document.getElementById("outsunalpha").innerHTML = " ";
}
