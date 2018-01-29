var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColors();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
  hardbtn.classList.remove("selected");
  easybtn.classList.add("selected");
  numSquare = 3;
  colors = generateRandomColors(numSquare);
  pickedColor = pickColors();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
})
hardbtn.addEventListener("click", function(){
  easybtn.classList.remove("selected");
  hardbtn.classList.add("selected");
  numSquare = 6;
  colors = generateRandomColors(numSquare);
  pickedColor = pickColors();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
})

resetButton.addEventListener("click", function(){
/// generate a new random color
  colors = generateRandomColors(numSquare);
/// picks a new random color from array
  pickedColor = pickColors();
/// changes the colorDisplay to the matching correct color
  colorDisplay.textContent = pickedColor;
/// repeating in our first for loop to regenerate new colors
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue"
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  /// adding the colors to each square
  squares[i].style.backgroundColor = colors[i];
  /// clicking each square by adding listeners
  squares[i].addEventListener("click", function(){
/// grab each color of each sqaure
    var colorClicked = this.style.backgroundColor;
/// comparing colors to see which one is correct
    if(colorClicked === pickedColor){
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again!"
      changeColors(colorClicked);
      h1.style.backgroundColor = colorClicked;
    }
    else{
      this.style.background = "#000000";
      messageDisplay.textContent = "Try Again!";
    }
  });
}
/// creating a function to change all squares to the same color when it's correct
function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

/// using math.floor to get rid of decimals to create a new color each time the game is over
function pickColors(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
/// Creating an array for the new numbers
  var arr = [];
/// generate a random color that'll be pushed into an array
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

/// creating a new function to call to generate random colors
function randomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb("+ red + ", " + green + ", " + blue + ")";
}
