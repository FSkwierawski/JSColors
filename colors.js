"using strict";
var points = 0;
var rValue;
var gValue;
var bValue;
randomColorForButtons();
var topRgb = randomColorForTop();
var points = 0;
let choosenButton = randomXToY(0, 2);
document.getElementById(choosenButton).style.backgroundColor = "#" + topRgb;


function buttonClick(e) {
  if (e.style.backgroundColor != "rgb(" + rValue + ", " + gValue + ", " + bValue + ")" ) {
      e.style.display = "none";  
  }
  if (e.style.backgroundColor == "rgb(" + rValue + ", " + gValue + ", " + bValue + ")") {
      points ++
      document.getElementById("points").innerHTML = "Points: " + points;
      randomColorForButtons();
      topRgb = randomColorForTop();
      let choosenButton = randomXToY(0, 2);
      document.getElementById(choosenButton).style.backgroundColor = "#" + topRgb;
      showButtons();
  }
}

function showButtons () {
    for (let i=0; i<3; i++) {
        document.getElementById(i).style.display = "initial";
    }
}

function randomColorForTop () {
  rValue = randomXToY(0, 255);
  gValue = randomXToY(0, 255);
  bValue = randomXToY(0, 255);
  var rgb = fullColorHex(rValue, gValue, bValue);
  document.getElementById("jumbotronId").style.backgroundColor = "#" + rgb ;
  document.getElementById("rgbText").innerHTML = "actually RGB " + "(" + rValue + ", " + gValue + ", " + bValue + ")";
  return rgb
}

function randomColorForButtons () {
    for (let i= 0; i<3; i++ ) {
        let rValue = randomXToY(0, 255);
        let gValue = randomXToY(0, 255);
        let bValue = randomXToY(0, 255);
        let rgbRandom = fullColorHex(rValue, gValue, bValue);
        document.getElementById(i).style.backgroundColor = "#" + rgbRandom;
    }
}


function randomXToY(minVal,maxVal)
{
  var randVal = minVal+(Math.random()*(maxVal-minVal));
  return Math.round(randVal);
}

function rgbToHex (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
}

function fullColorHex(r, g, b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
}
