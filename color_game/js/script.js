var colors = ["rgb(255, 255, 0)","rgb(200, 250, 10)","rgb(55, 155, 0)","rgb(5, 255, 0)","rgb(55, 255, 100)","rgb(5, 55, 200)"];
var squares = document.querySelectorAll(".square");
var pickedColor = pickColors();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  /// adding the colors to each square
  squares[i].style.backgroundColor = colors[i];
  /// clicking each square by adding listeners
  squares[i].addEventListener("click", function(){
    var colorClicked = this.style.backgroundColor;
  /// comparing colors to see which one is correct
    if(colorClicked === pickedColor){
      messageDisplay.textContent = "Correct";
      changeColors(colorClicked);
    }
    else{
      this.style.background = "000000";
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
