//digits input

var display = document.getElementById( "playerInput");

function inPut(digit) {  
    display.value+=digit;
    }

// Create problem

var question = document.getElementById("question");
var picker, answer, total, factor, feedback, goal;
var points = 0;
var lives = 3;

function makeProblem(){
    picker = Math.random();
    answer = Math.floor(Math.random()*100);
    
    if(picker<0.05){
        total = answer*10;
        feedback = "Remember that 10% = 10/100 = 1/10. Thus, in order to get 10% of a value, calculate value÷10.";
        question.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10% of "+ total + " is &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    } else if(picker<0.1){
        total = answer*5;
        feedback = "Remember that 20% = 20/100 = 1/5. Thus, in order to get 20% of a value, calculate value÷5.";
        question.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20% of "+ total + " is &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    } else if(picker<0.15){
        total = answer*4;
        feedback = "Remember that 25% = 25/100 = 1/4. Thus, in order to get 25% of a value, calculate value÷4.";
        question.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 25% of "+ total + " is &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }else if(picker<0.2){
        answer*=10;
        total = answer*2.5;
        feedback = "Remember that 40% = 40/100 = 2/5. Thus, in order to get 40% of a value, calculate (value÷5)x2.";
        question.innerHTML =  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 40% of "+ total + " is &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    } else if(picker<0.25){
        total = answer*2;
        feedback = "Remember that 50% = 50/100 = 1/2. Thus, in order to get 50% of a value, calculate value÷2.";
        question.innerHTML =  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 50% of "+ total + " is &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    } else if(picker<0.3){
        answer*=3;
        total = (4*answer)/3;
        feedback = "Remember that 75% = 75/100 = 3/4. Thus, in order to get 75% of a value, calculate value - (value÷4).";
        question.innerHTML =  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 75% of "+ total + " is &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }else if(picker<0.35){
        answer*=20;
        total = answer*1.25;
        feedback = "Remember that 80% = 80/100 = 4/5. Thus, in order to get 80% of a value, calculate value-(value÷5).";
        question.innerHTML =  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 80% of "+ total + " is &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }else if(picker<0.4){
        answer*=9;
        total = answer/0.9;
        feedback = "Remember that 10% = 10/100 = 1/10. Thus, in order to get a 10% decrease of a value, calculate value-(value÷10).";
        question.innerHTML =  "A decrease of 10% over "+ total + " results ";
    }else if(picker<0.45){
        answer*=4;
        total = answer/0.8;
        feedback = "Remember that 20% = 20/100 = 1/5. Thus, in order to get a 20% decrease of a value, calculate value-(value÷5).";
        question.innerHTML =  "A decrease of 20% over "+ total + " results ";
    }else if(picker<0.5){
        answer*=3;
        total = answer/0.75;
        feedback = "Remember that 25% = 25/100 = 1/4. Thus, in order to get a 25% decrease of a value, calculate value-(value÷4).";
        question.innerHTML =  "A decrease of 25% over "+ total + " results ";
    }else if(picker<0.55){
        total = answer*2;
        feedback = "Remember that 100% - 50% = 50% = 50/100 = 1/2. Thus, in order to get a 50% decrease of a value, calculate value÷2.";
        question.innerHTML =  "A decrease of 50% over "+ total + " results ";
    }else if(picker<0.6){
        answer*=3;
        total = answer*4;
        feedback = "Remember that 100% - 75% = 25% = 25/100 = 1/4. Thus, in order to get a 75% decrease of a value, calculate value÷4.";
        question.innerHTML =  "A decrease of 75% over "+ total + " results ";
    }else if(picker<0.65){
        answer*=24;
        total = answer/1.2;
        feedback = "Remember that 20% = 20/100 = 1/5. Thus, in order to get a 20% increase of a value, calculate value+(value÷5).";
        question.innerHTML =  "An increase of 20% over "+ total + " results ";
    }else if(picker<0.75){
        answer*=20;
        total = answer/1.25;
        feedback = "Remember that 25% = 25/100 = 1/4. Thus, in order to get a 25% increase of a value, calculate value+(value÷4).";
        question.innerHTML =  "An increase of 25% over "+ total + " results ";
    }else if(picker<0.8){
        answer*=6;
        total = answer/1.5;
        feedback = "Remember that 50% = 50/100 = 1/2. Thus, in order to get a 50% increase of a value, calculate value+(value÷2).";
        question.innerHTML =  "An increase of 50% over "+ total + " results ";
    } else if(picker<0.85){
        answer*=11;
        total = answer/1.1;
        total = Math.round(total);
        feedback = "Remember that 10% = 10/100 = 1/10. Thus, in order to get a 10% increase of a value, calculate value+(value÷10).";
        question.innerHTML =  "An increase of 10% over "+ total + " results ";
    }else{
        answer*=2;
        total = answer/2;
        feedback = "Remember that 100% + 100% = 200% = 200/100 = 2. Thus, in order to get a 100% increase of a value, calculate valuex2.";
        question.innerHTML =  "An increase of 100% over "+ total + " results ";
        }

 }

//check Solution and provide feedback

function checkSolution() {
    let playerInput = +document.getElementById("playerInput").value;
    let correct =  "Correct Answer! Try this next one:";
    let wrong =  "Sorry, but the correct answer was ";
    
    if (playerInput === answer) {
        document.getElementById("feedback").innerHTML = correct;
        points++;
    } else {
        document.getElementById("feedback").innerHTML = wrong + answer +". <br>"+ feedback+" Let's try the next problem.";
        lives--;
        }

    display.value = "";
    document.getElementById("points").innerHTML = points;

    if (lives === 2) {
        document.getElementById("livesleft").innerHTML = "Lives: " + '&#10084;' + '&#10084;' + '&#128148;';
        }
    if (lives === 1) {
        document.getElementById("livesleft").innerHTML = "Lives: " +  '&#10084;' + '&#128148;' +  '&#128148;';
        }
    if (lives === 0) {
        document.getElementById("check").disabled = true;
        document.getElementById("livesleft").innerHTML = "GAME OVER";
        alert("GAME OVER!");
        }

    if(points>=goal){
        document.getElementById("check").disabled = true;
        document.getElementById("feedback").innerHTML = "GOAL REACHED! YOU WON! ";
        alert("GOAL REACHED! YOU WON!");
        }

    if (lives > 0 && points<goal) {
        makeProblem();
        }

    }

//start game

function restart() {
    lives = 3;
    points = 0;
    makeProblem();
    document.getElementById("check").disabled = false; 

    document.getElementById("livesleft").innerHTML = "Lives: " +
  '&#10084;' + '&#10084;' + '&#10084;';

    document.getElementById("points").innerHTML = 0;

    document.getElementById("feedback").innerHTML = "NEW GAME STARTED! ";

    document.getElementById("start").innerHTML = "RE-START";

    goal = document.getElementById("sectionLength").value;
  
    document.getElementById("goal").innerHTML = goal;   
    }



