//Autor: Dante Cardoso Pinto de Almeida
//Feel free to study, copy, modify and distribute this code

//rgb-related code

var red = 0;
var green = 0;
var blue = 0;
var redHex = "00";
var greenHex = "00";
var blueHex = "00";

function getHex() {
        if (red < 16) {
                redHex = "0" + Number(red).toString(16);
        } else {
                redHex = Number(red).toString(16);
        }
        if (green < 16) {
                greenHex = "0" + Number(green).toString(16);
        } else {
                greenHex = Number(green).toString(16);
        }
        if (blue < 16) {
                blueHex = "0" + Number(blue).toString(16);
        } else {
                blueHex = Number(blue).toString(16);
        }
        return "#" + redHex + greenHex + blueHex;
}

function setRGB() {
        document.getElementById("rgbColorVisualizer").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ") ";
        document.getElementById("rgbOutputCode").innerHTML =  "rgb(" + red + "," + green + "," +  blue + ")";
        document.getElementById("hexOutputCode").innerHTML = getHex();
}

function setRed() {
        red = document.getElementById("redInput").value;
        document.getElementById("outputRedValue").innerHTML = red;
        document.getElementById("outputRedValue").style.color = "rgb(" + red + ",0 , 0)";
        setRGB();
}


function setGreen() {
        green = document.getElementById("greenInput").value;
        document.getElementById("outputGreenValue").innerHTML =  green;
        document.getElementById("outputGreenValue").style.color = "rgb(0 ," + green + ", 0)";
        setRGB();
}

function setBlue() {
        blue = document.getElementById("blueInput").value;
        document.getElementById("outputBlueValue").innerHTML = blue;
        document.getElementById("outputBlueValue").style.color = "rgb(0 , 0, " + blue + ")";
        setRGB();
}


//cmy-related code

var cyan = 0;
var magenta = 0;
var yellow = 0;
var canvas = {
        reflectedRed: 255,
        reflectedGreen: 255,
        reflectedBlue: 255
};

function setCMY() {
        canvas.reflectedRed = 255 - cyan;
        canvas.reflectedGreen = 255 - magenta;
        canvas.reflectedBlue = 255 - yellow;
        document.getElementById( "cmyColorVisualizer").style.backgroundColor = "rgb(" + canvas.reflectedRed + ", " + canvas.reflectedGreen + ", " + canvas.reflectedBlue + ") ";
}

function setCyan() {
        cyan = document.getElementById("cyanInput").value;
        setCMY();
}

function setMagenta() {
        magenta = document.getElementById("magentaInput").value;
        setCMY();
}

function setYellow() {
        yellow = document.getElementById("yellowInput").value;
        setCMY();
}


//hsl-related code

var hue = 0;
var saturation = 100;
var lightness = 50;

function setHSL() {
        document.getElementById("hslColorVisualizer").style.backgroundColor = "hsl(" + hue +  ", " + saturation + "%, " +  lightness + "%)";
        document.getElementById("hslOutputCode").innerHTML =  "hsl(" + hue + ", " + saturation +  "%, " + lightness + "%)";
}

function setHue() {
        hue = document.getElementById("hueInput").value;
        document.getElementById("outputHueValue").innerHTML = hue +  "deg";
        document.getElementById("outputHueValue").style.color =  "hsl(" + hue + ", 100%, 50%)";
        setHSL();
}

function setSaturation() {
        saturation = document.getElementById("saturationInput").value;
        document.getElementById("outputSaturationValue").innerHTML =  saturation + "%";
        document.getElementById("outputSaturationValue").style.color = "hsl(" + hue + "," + saturation + "%, 50%)";
        setHSL();
}

function setLightness() {
        lightness = document.getElementById("lightnessInput").value;
        document.getElementById("outputLightnessValue").innerHTML =  lightness + "%";
        document.getElementById("outputLightnessValue").style.color = "hsl(" + hue + ", 100%," +  lightness + "%)";
        setHSL();
}


//CMKY-related code

var cyanCMYK = 0;
var magentaCMYK = 0;
var yellowCMYK = 0;
var blackCMYK = 0;

function getRGBFromCMYK(x) {
        return 255 * (1 - x) * (1 -  blackCMYK);
}

function setCMYK() {
    document.getElementById("cmykColorVisualizer").style.backgroundColor =  "rgb(" + getRGBFromCMYK(cyanCMYK) +  ", " + getRGBFromCMYK(magentaCMYK) +  ", " + getRGBFromCMYK(yellowCMYK) +  ")";
    
    document.getElementById("cmkyOutputCode").innerHTML =  "cmky(" + Math.round(cyanCMYK *  100) + "%, " + Math.round(magentaCMYK * 100) + "%, " + Math.round(yellowCMYK * 100) + "%, " +  Math.round(blackCMYK * 100) + "%)";
}


function setCyanCMYK() {
    cyanCMYK = document.getElementById("cyanInputCMYK").value;
    cyanCMYK /= 100;
    setCMYK();
    document.getElementById("outputCyanValueCMYK").innerHTML =  Math.round(cyanCMYK * 100) + "%";
}


function setMagentaCMYK() {
    magentaCMYK = document.getElementById("magentaInputCMYK").value;
    magentaCMYK /= 100;
    setCMYK();
    document.getElementById("outputMagentaValueCMYK").innerHTML = Math.round(magentaCMYK *  100) + "%";
}

function setYellowCMYK() {
    yellowCMYK = document.getElementById("yellowInputCMYK").value;
    yellowCMYK /= 100;
    setCMYK();
    document.getElementById("outputYellowValueCMYK").innerHTML =  Math.round(yellowCMYK * 100) + "%";
}

function setBlackCMYK() {
        blackCMYK = document.getElementById("blackInputCMYK").value;
        blackCMYK /= 100;
        setCMYK();
        document.getElementById( "outputBlackValueCMYK").innerHTML =  Math.round(blackCMYK * 100) + "%";
}


//hsv-related code

var hueHSV = 0;
var saturationHSV = 1;
var valueHSV = 100;

function getLightness(s, v) { //convert hsv values to hsl lightness
        return v * (1 - (s / 2));
}

function getSaturation(s, v) { //convert hsv values to hsl saturation
        let luce = getLightness(s, v);
        if (luce === 0 || luce === 100) {
                return 0;
        } else {
                return 100 * ((v - luce) / Math.min(luce, 100 - luce));
        }
}

function setHSV() {
        document.getElementById("hsvColorVisualizer").style.backgroundColor =  "hsl(" + hueHSV + ", " +  getSaturation(saturationHSV, valueHSV) + "%, " + getLightness(saturationHSV, valueHSV) + "%) ";
}

function setHueHSV() {
        hueHSV = document.getElementById("hsvHueInput").value;
        document.getElementById("outputHueValueHSV").innerHTML =  hueHSV + "deg";
        document.getElementById("outputHueValueHSV").style.color =  "hsl(" + hueHSV + ", 100%, 50%)";
        setHSV();
}

function setSaturationHSV() {
        saturationHSV = document.getElementById("hsvSaturationInput").value;
        document.getElementById("outputSaturationValueHSV").innerHTML = saturationHSV + "%";
        saturationHSV /= 100;
        setHSV();
}

function setValueHSV() {
        valueHSV = document.getElementById("hsvValueInput").value;
        document.getElementById("outputBrightnessValueHSV").innerHTML = valueHSV + "%";
        setHSV();
}
