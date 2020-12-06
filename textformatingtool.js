//Autor: Dante Cardoso Pinto de Almeida
//Feel free to study, copy, modify and distribute this code

//Sample texts variables

function randomNumericString(string, size) {
  /* This function creates a string of random integers ranging from 0 to 999 */
        string = " ";
        for (let i = 0; i < size; i++) {
            string += Math.round(Math.random()*1000) + " ";
            }
        return string;
        }

var sampleTextOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat? Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur! Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var sampleTextTwo = "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. Jackdaws love my big sphinx of quartz. The five boxing wizards jump quickly.";

var sampleTextThree = " ";


//formating values

var font = "Arial";
var side = "left";
var size = 15;
var height = 1.5;
var weight = 400;
var textColor = "black";
var background = "white";
var overline = false;
var lineThrough = false;
var underline = false;
var decorationStyle = false;
var whichDecorationStyle = "solid";
var wavy = false;
var dotted = false;
var double = false;
var dashed = false;
var italic = false;
var hasShadow = false;
var shadowHorizontal = 2;
var shadowVertical = 2;
var shadowBlur = 0;
var shadowColor = "red";


//output variables

var CSSCode = "";
var CSSCodeNoFormat = "";

//functions for interaction

function pickSampleText(x) {
    document.getElementById("something").innerHTML = x;
    }

function pickFont() {
    font = document.getElementById("fontPicker").value;
    document.getElementById("something").style.fontFamily = font;
    }

function align() {
    side = document.getElementById( "alignment").value;
    document.getElementById("something").style.textAlign = side;
    }

function setSize() {
    size = document.getElementById("sizer").value;
    document.getElementById("something").style.fontSize = size + "px";
    document.getElementById("size").innerHTML = size + "px";
    }

function setHeight() {
    height = document.getElementById("heighter").value / 10;
    document.getElementById("something").style.lineHeight = height;
    document.getElementById("height").innerHTML = height;
    }

function setWeight() {
    weight = document.getElementById( "weighter").value * 100;
    document.getElementById("something").style.fontWeight = weight;
    document.getElementById("weight").innerHTML = weight;
    }

function setTextColor() {
    textColor = document.getElementById("textColorMenu").value;
    document.getElementById("something").style.color = textColor;
    }

function setBackgroundColor() {
    background = document.getElementById("backgroundColorMenu").value;
    document.getElementById("something").style.backgroundColor = background;
    }

/* Switch enable/disabled decoration style buttons */
function enableTextDecorationStyle() {
    document.getElementById("solidb").disabled = !decorationStyle;
    document.getElementById("wavyb").disabled = !decorationStyle;
    document.getElementById("dashedb").disabled = !decorationStyle;
    document.getElementById("dottedb").disabled = !decorationStyle;
    document.getElementById("doubleb").disabled = !decorationStyle;
    }

function textDecoration() {
    decorationStyle = true;
    enableTextDecorationStyle();
    if (overline === false && lineThrough === false && underline === false) {
            document.getElementById("something").style.textDecoration = "none";
            decorationStyle = false;
            enableTextDecorationStyle();
            }

    if (overline === false && lineThrough === false && underline === true) {
            document.getElementById("something").style.textDecoration = "underline "+ whichDecorationStyle;
            }

    if (overline === false && lineThrough === true && underline === false) {
            document.getElementById("something").style.textDecoration = "line-through "+ whichDecorationStyle;
            }

    if (overline === false && lineThrough === true && underline === true) {
            document.getElementById("something").style.textDecoration =  "line-through underline "+ whichDecorationStyle;
            }

    if (overline === true && lineThrough === false && underline === false) {
            document.getElementById("something").style.textDecoration = "overline "+ whichDecorationStyle;
            }

    if (overline === true && lineThrough === false && underline === true) {
            document.getElementById("something").style.textDecoration = "overline underline "+ whichDecorationStyle;
            }

    if (overline === true && lineThrough === true && underline === false) {
            document.getElementById("something").style.textDecoration = "overline line-through "+ whichDecorationStyle;
            }

    if (overline === true && lineThrough === true && underline === true) {
            document.getElementById("something").style.textDecoration = "overline line-through underline " + whichDecorationStyle;
            }
    }


function setDecorationStyle() {
    if (!wavy && !dashed && !dotted && !double) {
        document.getElementById("solidb").checked = true;
        document.getElementById("wavyb").checked = false;
        document.getElementById("dashedb").checked = false;
        document.getElementById("dottedb").checked = false;
        document.getElementById("doubleb").checked = false;
        whichDecorationStyle = "solid";
        }
    
    if (wavy) {
        document.getElementById("solidb").checked = false;
        document.getElementById("wavyb").checked = true;
        document.getElementById("dashedb").checked = false;
        document.getElementById("dottedb").checked = false;
        document.getElementById("doubleb").checked = false; 
        whichDecorationStyle = "wavy";
        }
    
    if (dashed) {
        document.getElementById("solidb").checked = false;
        document.getElementById("wavyb").checked = false;
        document.getElementById("dashedb").checked = true;
        document.getElementById("dottedb").checked = false;
        document.getElementById("doubleb").checked = false;
        whichDecorationStyle =   "dashed";
        }
    
    if (dotted) {
        document.getElementById("solidb").checked = false;
        document.getElementById("wavyb").checked = false;
        document.getElementById("dashedb").checked = false;
        document.getElementById("dottedb").checked = true;
        document.getElementById("doubleb").checked = false;
        whichDecorationStyle =   "dotted";
        }
    
    if (double) {
        document.getElementById("solidb").checked = false;
        document.getElementById("wavyb").checked = false;
        document.getElementById("dashedb").checked = false;
        document.getElementById("dottedb").checked = false;
        document.getElementById("doubleb").checked = true;
        whichDecorationStyle = "double";
        }
    
    document.getElementById("something").style.textDecorationStyle = whichDecorationStyle;
    }


function setItalic() {
    italic = !italic;
    if (italic) {
        document.getElementById("something").style.fontStyle = "italic";
    } else {
        document.getElementById("something").style.fontStyle = "normal";
        }
    }



function enableShadowControls(x){
    document.getElementById("horizontalShadow").disabled = !x;
    document.getElementById("verticalShadow").disabled = !x;
    document.getElementById("blurShadow").disabled = !x;
    document.getElementById("colorShadow").disabled = !x;
    }

function setShadow(){
    if(hasShadow){
        document.getElementById("something").style.textShadow = shadowHorizontal+"px "+shadowVertical+"px " + shadowBlur+"px "+shadowColor;
        enableShadowControls(hasShadow);
    } else {
        document.getElementById("something").style.textShadow = "0px 0px 0px #000000";}
        enableShadowControls(hasShadow);
        }

function setShadowValues(){
    shadowHorizontal = document.getElementById("horizontalShadow").value;
    shadowVertical = document.getElementById("verticalShadow").value;
    shadowBlur = document.getElementById("blurShadow").value;
    shadowColor = document.getElementById("colorShadow").value;
    setShadow();
    }

//Functions for Output

function getCSS() {
    CSSCode = "&nbsp p{<br>";
    CSSCodeNoFormat = "p{ ";
    CSSCode += "&nbsp &nbsp &nbsp font-family: " + font +  ";<br>";
    CSSCodeNoFormat += "font-family: " + font +  "; ";
    CSSCode += "&nbsp &nbsp &nbsp text-align: " + side +  ";<br>";
    CSSCodeNoFormat += "text-align: " + font +  "; ";
    CSSCode += "&nbsp &nbsp &nbsp font-size: " +  size +  "px;<br>";
    CSSCodeNoFormat += "font-size: " +  size + "; ";
    CSSCode += "&nbsp &nbsp &nbsp line-height: " +  height +  ";<br>";
    CSSCodeNoFormat += "line-height: " + height + "; ";
    CSSCode += "&nbsp &nbsp &nbsp font-weight: " +  weight + ";<br>";
    CSSCodeNoFormat += "font-weight: " +  weight + "; ";
    CSSCode += "&nbsp &nbsp &nbsp color: " +  textColor +  ";<br>";
    CSSCodeNoFormat += "color: " +  textColor + "; ";
    CSSCode += "&nbsp &nbsp &nbsp background-color: " +  background + ";<br>";
    CSSCodeNoFormat +=  "background-color: " + background +  "; ";

    if (italic) {
        CSSCode += "&nbsp &nbsp &nbsp font-style: italic;<br>";
        CSSCodeNoFormat += "font-style: italic;  ";
        }

    CSSCode += "&nbsp &nbsp &nbsp text-decoration: ";
    CSSCodeNoFormat += "text-decoration: ";

    if (!overline && !lineThrough && !underline) {
        CSSCode += "none";
        CSSCodeNoFormat += "none";
        }

    if (overline) {
        CSSCode += "overline ";
        CSSCodeNoFormat += "overline ";
        }

    if (lineThrough) {
        CSSCode += "line-through ";
        CSSCodeNoFormat += "line-through ";
        }

    if (underline) {
        CSSCode += "underline ";
        CSSCodeNoFormat += "underline ";
        }

    if (!wavy && !dotted && !dashed && !double && (overline || lineThrough || underline)) {
        CSSCode += "solid";
        CSSCodeNoFormat += "solid";
        }

    if (wavy) {
        CSSCode += "wavy";
        CSSCodeNoFormat += "wavy";
        }

    if (dotted) {
        CSSCode += "dotted";
        CSSCodeNoFormat += "dotted";
        }

    if (double) {
        CSSCode += "double ";
        CSSCodeNoFormat += "double ";
        }

    if (dashed) {
        CSSCode += "dashed ";
        CSSCodeNoFormat += "dashed ";
        }

    CSSCode += ";<br>";
    CSSCodeNoFormat +="; " ;

    if(hasShadow){
        CSSCode += "&nbsp &nbsp &nbsp text-shadow: "+  shadowHorizontal+"px "+shadowVertical+"px " + shadowBlur+"px "+shadowColor+ ";<br>";
        CSSCodeNoFormat += "text-shadow: "+  shadowHorizontal+"px "+shadowVertical+"px " + shadowBlur+"px "+shadowColor+ ";";
        }

    CSSCode += "&nbsp }";
    CSSCodeNoFormat += " }";

    document.getElementById("output").innerHTML = CSSCode;
    }


function toClipboard(text) {
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert("Copied: " + text);
    }