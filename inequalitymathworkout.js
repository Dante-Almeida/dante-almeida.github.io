//Autor: Dante Cardoso Pinto de Almeida
/* Feel free to study, copy, modify and distribute this code */

var time;
var countingdown;
var timer = document.getElementById("timer");
var solution;
var totalCorrectAnswers = 0;
var totalWrongAnswers =0;
var level = 1;
var firstValueOutput = document.getElementById("firstValue");
var secondValueOutput = document.getElementById("secondValue");
var feedbackOutput = document.getElementById("feedback");
var lessButton = document.getElementById("buttonLess");
var equalButton = document.getElementById("buttonEqual");
var greaterButton = document.getElementById("buttonGreater");

/*******************/

function countdown() { //This function displays the timer and disable the answer buttons once the time is over.
    if (time % 60 < 10) {
            timer.innerHTML = Math.floor(time/60) + ":0" + (time % 60);
    } else {
            timer.innerHTML = Math.floor(time/60) + ":" + (time % 60);
            }
    if (time <= 0) {
        timer.innerHTML = "0:00";
        feedbackOutput.innerHTML = "GAME OVER <br> Correct Answers: "+ totalCorrectAnswers + "<br> Wrong Answers: "+ totalWrongAnswers; 
        lessButton.disabled = true;
        equalButton.disabled = true;
        greaterButton.disabled = true;
        }
    time--;
    }

/*******************/

function startGame() { 
        clearInterval(countingdown);
        time = 60;
        countingdown = setInterval(countdown, 1000);
        document.getElementById("startButton").innerHTML = "RE-START";
        feedbackOutput.innerHTML = "NEW GAME STARTED";
        level = 1;
        totalCorrectAnswers = 0;
        totalWrongAnswers = 0;
        lessButton.disabled = false;
        equalButton.disabled = false;
        greaterButton.disabled = false;
        createProblem(1);
        }


//************//

function findDivisor(x) { /*This function find the second largest divisor of a number. It's used to create multiplication expressions */ 
        let testing = x-1;
        while (x % testing !== 0) {
                    testing--;
                    }
        return testing;
        }

//************//

function integerToExpression(number, difficulty) {
            let randomizer = Math.random(); //This variable randomize the operation
            let randomValue = Math.round(Math.random() * (10 ** difficulty)); // this variable randomize the number that will be used to create the expression
            if (randomizer < 0.2) {
                        return number;
            } else if (randomizer < 0.4) {
                        return (number - randomValue) + "+" + randomValue;
            } else if (randomizer < 0.6) {
                        return (number + randomValue) + "-" + randomValue;
            } else if (randomizer < 0.8) {
                        if (randomValue === 0) {
                                        randomValue++;
                                        }
                        return (number * randomValue) + "&divide" + randomValue;
            } else {
                    if (number % randomValue !== 0) {
                                    randomValue = findDivisor(number);
                                    }
                    return randomValue + "x" + (number/randomValue);
                    }

            }

//************//

function pickCorrectAnswer() { 
                let solutionRandomizer = Math.floor(Math.random() * 100);
                if (solutionRandomizer < 33) {
                                return "less";
                } else if (solutionRandomizer < 66) {
                                return "equal";
                } else {
                                return "greater";
                                }
                }


//************//

function createProblem(difficulty) {
                    let value = Math.floor(Math.random() * (10 ** difficulty));
                    solution = pickCorrectAnswer();
                    let modifier = Math.floor(Math.random() * 10);

                    if (modifier === 0) {
                                    modifier++;
                                    }

                    switch (solution) {
                                        case "less":
                                            firstValueOutput.innerHTML = integerToExpression(value, difficulty);
                                            secondValueOutput.innerHTML = integerToExpression(value + modifier, difficulty);
                                        break;

                                        case "equal":
                                            firstValueOutput.innerHTML = integerToExpression(value, difficulty);
                                            secondValueOutput.innerHTML = integerToExpression(value, difficulty);
                                        break;

                                        case "greater":
                                            firstValueOutput.innerHTML = integerToExpression(value, difficulty);
                                            secondValueOutput.innerHTML = integerToExpression(value - modifier, difficulty);
                                        }
                    }

//************//

function checkAnswer(givenAnswer){

                        if(givenAnswer === solution){
                                            feedbackOutput.innerHTML = "CORRECT! +2s";
                                            time+=2;
                                            totalCorrectAnswers++;
                                            level+=0.05;
                        } else {
                                feedbackOutput.innerHTML = "WRONG! -5s";
                                time-=5;
                                totalWrongAnswers++;
                                level-=0.05;
                            }
                        createProblem(level);
                        }