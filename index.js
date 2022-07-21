
var randomNumber1 = Math.floor(Math.random()*6) + 1; //PLayer 1 dice number, 1-6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //Select dice image, dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage1; //Select dice image source, images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; //Set image1 to first image in Query Array

image1.setAttribute("src", randomImageSource1); //Replace image1 with Player 1 dice image


//Repeat for Player 2
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


// Check for Winner and replace h1 tag
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "☝PLayer 1 win!";
}

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "PLayer 2 win!✌";
}

if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
