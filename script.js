var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyButton");
var hardBtn = document.querySelector("#hardButton");
easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColor(3);
    //pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }else{ squares[i].style.display="none" ;
        }
    }
    
});
hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColor(6);
    //pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
    
            squares[i].style.backgroundColor = colors[i];
        squares[i].style.display="block" ;
        
    }

 });
 

resetButton.addEventListener("click", function(){ 
    //generate all new colors
    colors = generateRandomColor(6);
    //pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor="steelblue";

});
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i]; 

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent="Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor=pickedColor;
           
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent="Try Again!"
        }
    });
}

function changeColors(clickedColor) {
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = clickedColor;
    }
}

function pickColor() {
    var random= Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    
    // make an array
    var arr = [];
    //add random colors to array
    for (i = 0; i < num; i++){
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g=Math.floor(Math.random()* 256);
    //pick a red from 0-255
    var b=Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}