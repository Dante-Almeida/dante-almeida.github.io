
var sample = "butterfly";
var filterSettings = "";

// variables for filter settings set at default values
var blur = 0;
var brightness = 100;
var contrast = 100;
var grayscale = 0;
var hueRotation = 0;
var opacity = 100;
var saturation = 100;
var sepia = 0;
var invert = 0;
var shadow = false;
var hShadow = 8;
var vShadow = 8;
var blurShadow = 10;
var colorShadow = "gray";
var codeOutput = ""; 


//display image provided by the user
function renderImage() {
        document.getElementById("image").src = document.getElementById("imageURL").value;
        document.getElementById("source").href = document.getElementById("imageURL").value;
        }

//display sample image choosen by the user
function pickSample() {
        sample = document.getElementById("imageSample").value;
        switch (sample) {
                    case "butterfly":
                        document.getElementById("image").src = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Monarch_Butterfly_Pink_Zinnia_1800px.jpg";
                        document.getElementById("source").href =
                        "https://commons.wikimedia.org/wiki/File:Monarch_Butterfly_Pink_Zinnia_1800px.jpg";
                    break;

                    case "frog":
                            document.getElementById("image").src =    "https://upload.wikimedia.org/wikipedia/commons/b/be/Red_eyed_tree_frog_edit2.jpg";
                            document.getElementById("source").href = "https://commons.wikimedia.org/wiki/File:Red_eyed_tree_frog_edit2.jpg";
                    break;

                    case "peacock":
                            document.getElementById("image").src = "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flickr_-_lo.tangelini_-_Tonos_%281%29.jpg";
                            document.getElementById("source").href = "https://commons.wikimedia.org/wiki/File:Flickr_-_lo.tangelini_-_Tonos_(1).jpg";
                    break;

                    case "fish":
                            document.getElementById("image").src =    "https://upload.wikimedia.org/wikipedia/commons/4/4b/Clownfish_%28Amphiprion_ocellaris%29.jpg";
                            document.getElementById("source").href = "https://commons.wikimedia.org/wiki/File:Clownfish_(Amphiprion_ocellaris).jpg";
   
                    }

        }

//output image with choosen settings

function imageOutput() {
                filterSettings = "blur(" + blur + "px) " +  "brightness(" + brightness + "%) " +  "contrast(" + contrast + "%) " +  "grayscale(" + grayscale + "%) " +  "hue-rotate(" + hueRotation +  "deg) " + "opacity(" + opacity +  "%) " + "saturate(" + saturation +  "%) " + "sepia("+sepia+"%) "+  "invert("+invert+"%) ";

                if(shadow){
                        filterSettings += "drop-shadow("+hShadow +"px "+  vShadow + "px " + blurShadow +"px "+  colorShadow+")"; 
                    }

                document.getElementById("image").style.filter = filterSettings;
                    }

//following functions control filters' values

function setBlur() {
        blur = document.getElementById("blur").value;
        document.getElementById("valueBlur").innerHTML = blur + "px";
        imageOutput();
        }


function setBrightness() {
        brightness = document.getElementById("bright").value;
        document.getElementById("valueBrightness").innerHTML =  brightness + "%";
        imageOutput();
        }

function setContrast() {
        contrast = document.getElementById("contrast").value;
        document.getElementById("valueContrast").innerHTML =  contrast + "%";
        imageOutput();
        }

function setGrayscale() {
        grayscale = document.getElementById("gray").value;
        document.getElementById("valueGrayscale").innerHTML =  grayscale + "%";
        imageOutput();
        }

function setHueRotation() {
        hueRotation = document.getElementById("hue").value;
        document.getElementById("valueHue").innerHTML = hueRotation + "deg";
        imageOutput();
        }

function setOpacity() {
        opacity = document.getElementById("opacity").value;
        document.getElementById("valueOpacity").innerHTML =  opacity + "%";
        imageOutput();
        }

function setSaturation() {
        saturation = document.getElementById("saturate").value;
        document.getElementById("valueSaturation").innerHTML =  saturation + "%";
        imageOutput();
        }


function setSepia() {
        sepia = document.getElementById("sepia").value;
        document.getElementById("valueSepia").innerHTML = sepia + "%";
        imageOutput();
        }


function setInvert() {
        invert = document.getElementById("invert").value;
        document.getElementById("valueInvert").innerHTML =  invert + "%";
        imageOutput();
        }



// enable/disable shadow's controls
function setShadow(){ 
        shadow = !shadow;
        let shadowControls = document.getElementsByClassName("shadowControls");
        for(let i=0;  i<shadowControls.length; i++){
                        shadowControls[i].disabled = !shadow;
                        }
        let shadowControlLabels;
        if(shadow){
                    document.getElementById("label1").className = "enabled";
                    document.getElementById("valueVShadow").innerHTML = vShadow + "px";
                    document.getElementById("label2").className = "enabled";
                    document.getElementById("valueHShadow").innerHTML = hShadow + "px";
                    document.getElementById("label3").className = "enabled";
                    document.getElementById("valueBShadow").innerHTML = blurShadow + "px";
                    document.getElementById("label4").className = "enabled";
        } else{
                    document.getElementById("label1").className = "disabled";
                    document.getElementById("valueVShadow").innerHTML = " ";
                    document.getElementById("label2").className = "disabled";
                    document.getElementById("valueHShadow").innerHTML = " ";
                    document.getElementById("label3").className = "disabled";
                    document.getElementById("valueBShadow").innerHTML = " ";
                    document.getElementById("label4").className = "disabled";
                }
   
        imageOutput();
        }

function setVerticalShadow(){
                vShadow = document.getElementById("vShadow").value;
                document.getElementById("valueVShadow").innerHTML = vShadow + "px";
                imageOutput();
                }

function setHorizontalShadow(){
                hShadow = document.getElementById("hShadow").value;
                document.getElementById("valueHShadow").innerHTML = hShadow + "px";
                imageOutput();
                }


function setBlurShadow(){
                blurShadow = document.getElementById("bShadow").value;
                document.getElementById("valueBShadow").innerHTML = blurShadow + "px";
                imageOutput();
                }


function setColorShadow(){
                colorShadow = document.getElementById("cShadow").value;
                imageOutput();
                }

function getCSS(){
                codeOutput = "img{ filter: "+ filterSettings + "; }";
                document.getElementById("output").innerHTML = codeOutput;
                }


function toClipboard(text) {
                var textField = document.createElement('textarea');
                textField.innerText = text;
                document.body.appendChild(textField);
                textField.select();
                document.execCommand('copy');
                textField.remove();
                alert("Copied:" + text);
                }