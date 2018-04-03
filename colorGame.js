var numSquares = 6;
var colors = generateRandomColors(numSquares);
/*initially used["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)"];*/
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); //eg:colors[3]
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//hide the bottom three colorsquares, show the first three
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";	
	}
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change display color(colorDisplay) to match the new picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";  //change reset button to new colors after player has won the game
	messageDisplay.textContent = "";  //change the span message to empty string after player has won
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	};
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
				var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			//console.log(clickedColor, pickedColor); To check if clickedcolor and pickedColor types and values match
				if(clickedColor === pickedColor){
					messageDisplay.textContent = "You Won!!!!";
					resetButton.textContent = "Play Again?";
					changeColors(clickedColor);
					h1.style.backgroundColor = clickedColor;
				} else {
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again";
				}
		});
};

function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	};	
};

function pickColor(){
	/*pick random number from color array, assign to a variable,
	use that number to access color out of the array, return that picked color(variable name)*/
	var random = Math.floor(Math.random() * colors.length); 
	return colors[random];
};

function generateRandomColors(num){
	//pseudo code: Make an array
	var arr = [];
	//repeat num times, add num random colors to array
	for(var i = 0; i < num; i++){
		//call random color and push into arr: to generate random color, wrote a function below
		arr.push(randomColor());
	};
	//return that array
	return arr;
};
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	//return the string in format "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
};



 






