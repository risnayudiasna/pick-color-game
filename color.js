var numSquare = 6;
var colors = generateRandomColor(numSquare);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButton = document.querySelectorAll(".mode");
function FirstFactorial(num) {

  // code goes here
  var result = 1;
  for(var i=0; i<num; i++){
    result *= i;

  }
  return(result);
}

for (var i = 0; i < modeButton.length; i++) {
  modeButton[i].addEventListener("click", function(){
    modeButton[0].classList.remove("selected");
    modeButton[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
    reset();
  })
}

function reset() {
  colors = generateRandomColor(numSquare);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.display = "block";
      square[i].style.backgroundColor = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";

}

// easybtn.addEventListener("click", function(){
//   easybtn.classList.add("selected");
//   hardbtn.classList.remove("selected");
//   numSquare = 3;
//   colors = generateRandomColor(numSquare);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < square.length; i++) {
//     if (colors[i]) {
//       square[i].style.backgroundColor = colors[i];
//     } else {
//       square[i].style.display = "none";
//     }
//   }
//   messageDisplay.textContent = "";
// });
//
// hardbtn.addEventListener("click", function(){
//   hardbtn.classList.add("selected");
//   easybtn.classList.remove("selected");
//   numSquare = 6;
//   colors = generateRandomColor(numSquare);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < square.length; i++) {
//     square[i].style.backgroundColor = colors[i];
//     square[i].style.display = "block";
//   }
//   messageDisplay.textContent = "";
// });

resetButton.addEventListener("click", function() {
  reset();
});

colorDisplay.textContent = pickedColor;
for (var i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = colors[i];

  square[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?";
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColor(color) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
