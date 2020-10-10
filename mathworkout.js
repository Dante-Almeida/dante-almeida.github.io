//Autor: Dante Cardoso Pinto de Almeida
/* Feel free to study, copy, modify and distribute this code */

var difficulty = 1;
var firstNumber;
var secondNumber;
var correctAnswer;
var operator = "+";
var lives = 3;
var points = 0;

//digits input

function inPut(digit) {
    let i = document.getElementById("answer").value;
    document.getElementById("answer").value = i + digit;
    }


//random number generator

function randomNumber(level) {
    if (level > 1) {
        level -= Math.random();
        }
    return Math.round(Math.random() * (Math.pow(10, level)));
}


// Create problem

function problem(x, y, z) {
    x = randomNumber(difficulty);
    y = randomNumber(difficulty);

    let chooseOperation = Math.random();

    if (chooseOperation < 0.25) {
        z = "+";
        correctAnswer = x + y;
    } else if (chooseOperation < 0.5) {
        z = "-";
        if (x > y) {   /* avoid negative values shifting x and y if x<y */
            correctAnswer = x - y;
        } else {
        correctAnswer = y - x;
        y = x;
        x = correctAnswer + x;
        }

    } else if (chooseOperation < 0.75) {
        z = "x";
        correctAnswer = x * y;
    } else {
        if (y === 0) {
            y++; /* avoid division by zero */
            }
        z = "÷";
        correctAnswer =  x; /* avoid fractions making y an factor of x */
        x = x * y;
        }

    document.getElementById("problem").innerHTML = x + z + y + "=?";

    }


problem(firstNumber, secondNumber, operator);


//check Solution and provide feedback

function checkSolution() {
    let answer = +document.getElementById("answer").value;
    let correct = "Correct Answer! Try this next one:";
    let wrong =  "Sorry, but the correct answer was ";

    if (answer === correctAnswer) {
        document.getElementById("feedback").innerHTML = correct;
        points++;
        difficulty += 0.05;
    } else {
        document.getElementById("feedback").innerHTML = wrong + correctAnswer;
        lives--;
        difficulty -= 0.15;
        }

    document.getElementById("answer").value = "";
    document.getElementById("points").innerHTML = points;

    if (lives === 2) {
        document.getElementById("livesleft").innerHTML = "Lives: " + '&#10084;' + '&#10084;' + '&#128148;';
        }
    if (lives === 1) {
        document.getElementById("livesleft").innerHTML = "Lives: " + '&#10084;' + '&#128148;' + '&#128148;';
        }
    if (lives === 0) {
        document.getElementById("livesleft").innerHTML = "GAME OVER";
        alert("GAME OVER!");
        }

    if (lives > 0) {
        problem(firstNumber, secondNumber, operator);
        }


}


//re-start game

function restart() {
    lives = 3;
    points = 0;
    difficulty = 1;
    problem(firstNumber, secondNumber, operator);

    document.getElementById("livesleft").innerHTML = "Lives: " + '&#10084;' + '&#10084;' + '&#10084;';

    document.getElementById("points").innerHTML = 0;

    document.getElementById("feedback").innerHTML = "NEW GAME STARTED! ";

    }