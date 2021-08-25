var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random1 = document.getElementById("random1");
var random2 = document.getElementById("random2");

var colorDict = new Map();
colorDict.set("random1", color1);
colorDict.set("random2", color2);

// GRADIENT

changeColor();

function changeColor() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

		css.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

// RANDOM

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function generateRGB(event) {
	var r = getRandomIntInclusive(0, 255);
	var g = getRandomIntInclusive(0, 255);
	var b = getRandomIntInclusive(0, 255);
	var rgb = "rgb(" + r + "," + g + "," + b + ")";
  var route = colorDict.get(event.target.id);
	route.value = RGBToHex(rgb);
	changeColor();
}

function RGBToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

random1.addEventListener("click", generateRGB);

random2.addEventListener("click", generateRGB);