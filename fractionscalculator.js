//Autor: Dante Cardoso Pinto de Almeida
/* Feel free to study, copy, modify and distribute this code */

//class of rationals

class rational {
    constructor(integer, numerator, denominator) {
    this.integer = integer;
    this.numerator = numerator;
    this.denominator = denominator;
    }
}

//Simplification function

function simp(numerador, denominador) {
    var fraction = new rational(0, numerador, denominador);
    //halt denominator 0
    if (fraction.denominator === 0) {
        return false;
    }
 //find the integer part
    while (fraction.numerator >= fraction.denominator) {
        fraction.numerator -= fraction.denominator;
        fraction.integer++;
    }
 //find common factors and simplify
    var fator = 2;
    while (fator <= fraction.numerator) {
        if (fraction.numerator % fator === 0 && fraction.denominator % fator === 0) {
            fraction.denominator = fraction.denominator / fator;
            fraction.numerator = fraction.numerator / fator;
        } else {
            fator++;
        }

    }
 //workaround in case of negative numerator 
    if (fraction.numerator < 0) {
        fraction.integer--;
        fraction.numerator += fraction.denominator;
    }

    return fraction;
}



//Output da simplificação 

function simpans(x, y) {
    console.log("simpans acionada");
    if (y === 0) {
        return false;
    }

    var fraction = simp(x, y);
    console.log(fraction);

    if (fraction.numerator === x && fraction.nunerator != 0 && fraction.numerator < fraction.denominator) {
        return "The fraction "+x+ "/" + y + " is irreducible . ";
    }

    if (fraction.integer === 0 && fraction.numerator != 0) {
        return "The fraction " + x + "/" + y + " is equal to " + fraction.numerator + "/" + fraction.denominator;
    }

    if (fraction.integer != 0 && fraction.numerator === 0) {
        return "The fraction " + x + "/" +  y + " is equal to " + fraction.integer + ".";
    }

    if (fraction.integer != 0 && fraction.numerator != 0) {
        return "The fraction " + x + "/" + y + " is equal to " + fraction.integer + " " + fraction.numerator + "/" +  fraction.denominator;
    }

}

function simpout() {
    console.log("simpout acionada");
    var x = +document.getElementById("inp1").value;
    var y = +document.getElementById("inp2").value;
    document.getElementById("out1").innerHTML = simpans(x, y);

}


//Sum function

function sum() {
    var x = new rational(0, +document.getElementById("inp3").value, +document.getElementById("inp4").value);
    var y = new rational(0, +document.getElementById("inp5").value, +document.getElementById("inp6").value);
    var soma = new rational(x.integer + y.integer, (x.numerator * y.denominator) + (y.numerator * x.denominator), x.denominator *y.denominator);
    var result = simp(soma.numerator, soma.denominator);

    if (result.integer != 0 && result.numerator != 0) {
        document.getElementById("out2").innerHTML = x.numerator + "/" + x.denominator + " + " + y.numerator + "/" + y.denominator + " = " + result.integer + "  " + result.numerator + "/" + result.denominator;
    }

    if (result.integer === 0 && result.numerator != 0) {
        document.getElementById("out2").innerHTML = x.numerator + "/" + x.denominator + " + " + y.numerator + "/" + y.denominator + " = " + result.numerator + "/" + result.denominator;
    }

    if (result.integer != 0 && result.numerator === 0) {
        document.getElementById("out2").innerHTML = x.numerator + "/" + x.denominator + " + " + y.numerator + "/" + y.denominator + " = " + result.integer;
    }

    if (result.integer === 0 && result.numerator === 0) {
        document.getElementById("out2").innerHTML = x.numerator + "/" + x.denominator + " + " + y.numerator + "/" + y.denominator + " = 0";
    }

}


//Multiplication function 

function times() {
    var x = new rational(0, +document.getElementById("inp3").value, +document.getElementById("inp4").value);
    var y = new rational(0, +document.getElementById("inp5").value, +document.getElementById("inp6").value);
    var product = new rational(x.integer * y.integer, x.numerator * y.numerator, x.denominator * y.denominator);
    var result = simp(product.numerator,  product.denominator);

    if (result.integer === 0 && result.numerator != 0) {
        document.getElementById("out2").innerHTML = x.numerator + "/" + x.denominator + " * " + y.numerator + "/" + y.denominator + " = " + result.numerator + "/" + result.denominator;
    }

    if (result.integer === 0 && result.numerator === 0) {
        document.getElementById("out2").innerHTML = x.numerator + "/" + x.denominator + " * " + y.numerator +  "/" + y.denominator + " = 0";
    }

    if (result.integer != 0 && result.numerator != 0) {
        document.getElementById("out2").innerHTML = x.numerator + "/" + x.denominator + " * " + y.numerator + "/" + y.denominator + " = " + result.integer + "  " + result.numerator +  "/" + result.denominator;
    }

    if (result.integer != 0 && result.numerator === 0) {
        document.getElementById("out2").innerHTML = x.numerator + "/" + x.denominator + " * " + y.numerator + "/" + y.denominator + " = " + result.integer;
    }

}


//Division function 

function div() {
    var x = new rational(0, +document.getElementById("inp3").value, +document.getElementById("inp4").value);
    var y = new rational(0, +document.getElementById("inp5").value, +document.getElementById("inp6").value);

    if (y.denominator * x.denominator * y.numerator === 0) {
        document.getElementById("out2").innerHTML = "erro";
        return false;
    }

    var quociente = new rational(0, x.numerator * y.denominator, x.denominator * y.numerator);
    var result = simp(quociente.numerator, quociente.denominator);

    if (result.integer === 0 && result.numerator != 0) {
        document.getElementById("out2").innerHTML = "(" + x.numerator + "/" + x.denominator + ")" + " / " + "(" + y.numerator +  "/" + y.denominator + ")" + " = " + result.numerator +  "/" + result.denominator;
    }

    if (result.integer === 0 && result.numerator === 0) {
        document.getElementById("out2").innerHTML = "(" + x.numerator +  "/" + x.denominator + ")" + " / " + "(" + y.numerator + "/" + y.denominator + ")" + " = 0";
    }

    if (result.integer != 0 && result.numerator != 0) {
        document.getElementById("out2").innerHTML = "(" + x.numerator +  "/" + x.denominator + ")" + " / " + "(" + y.numerator +  "/" + y.denominator + ")" + " = " + result.integer + "  " + result.numerator +  "/" + result.denominator;
    }

    if (result.integer != 0 && result.numerator === 0) {
        document.getElementById("out2").innerHTML = "(" + x.numerator + "/" + x.denominator + ")" + " / " +  "(" + y.numerator +  "/" + y.denominator + ")" + " = " +  result.integer;
    }

}

//Subtraction function

function subt() {
    var x = new rational(0, +document.getElementById("inp3").value, +document.getElementById("inp4").value);
    var y = new rational(0, +document.getElementById("inp5").value, +document.getElementById("inp6").value);
    var negative = false;
    if (x.numerator / x.denominator > y.numerator / y.denominator) {
        var diference = new rational(0, (x.numerator * y.denominator) - (y.numerator * x.denominator), x.denominator * y.denominator);
    } else {
        var diference = new rational(0, (y.numerator * x.denominator) - (x.numerator * y.denominator), x.denominator * y.denominator);
        negative = true;
    }

    var result = simp(diference.numerator, diference.denominator);

    if (negative === true) {
        if (result.integer === 0) {
            result.numerator = result.numerator * -1;
        } else {
            result.integer = result.integer * -1;
        }

    }

    if (result.integer != 0 && result.numerator != 0) {
        document.getElementById("out2").innerHTML = x.numerator + "/" + x.denominator + " - " + y.numerator + "/" + y.denominator + " = " + result.integer + "  " + result.numerator +  "/" + result.denominator;
    }

    if (result.integer === 0 && result.numerator != 0) {
        document.getElementById("out2").innerHTML = x.numerator + "/" + x.denominator + " - " + y.numerator +  "/" + y.denominator + " = " + result.numerator + "/" + result.denominator;
    }

    if (result.integer != 0 && result.numerator === 0) {
        document.getElementById("out2").innerHTML = x.numerator + "/" + x.denominator + " - " + y.numerator + "/" + y.denominator + " = " + result.integer;
    }

    if (result.integer === 0 && result.numerator === 0) {
        document.getElementById("out2").innerHTML = x.numerator + "/" + x.denominator + " - " + y.numerator +  "/" + y.denominator + " = 0";
    }

}


