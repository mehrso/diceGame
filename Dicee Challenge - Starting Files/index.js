// Creating Random number for the dice For the first image
var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
// Getting images randdomely from dice1.png to dice6.png
var randomDiceImage1= "dice" + randomNumber1 + ".png";
var randomImageSource1= "images/"+randomDiceImage1;
// replacing random dice images to the img1
var img1= document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource1);

// Creating Random number for the dice For the second image
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
var randomDiceImage2= "dice" + randomNumber2 + ".png";
var randomImageSource2= "images/"+randomDiceImage2;
var img2= document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🎉Player 1 Wins!" ;// gives back every html thing in that
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player2 Wins🎉!";// gives back every html thing in that
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
