// Dicee Challenge Step 3 - Create a Random Number: Inside index.js, create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. Test it out in the console to make sure it works as expected.
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 0-0.9999... --> 0-5.9999... rounding number down to whole number --> 0-5 --> 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomDiceSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

// Dicee Challenge Step 4 - Change the <img> to a Random Dice: Use the random number you created in the last step to pick out a random dice image between dice1.png to dice 6.png then place this image inside the left <img> element.
// Hint: You will need to use what you've learnt about the DOM and the method setAttribute() to achieve this.

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceSource);

// Dicee Challenge Step 5 - Change both <img> Elements: Do the same for the right hand side image element.
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
var randomDiceSource2 = "images/dice" + randomNumber2 + ".png"; 
document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);


// Dicee Challenge Step 6 - Change the Title to Display a Winner: Change the text in the h1, (which currently says Refresh Me) to show which user won or if there was a draw depending on the dice values of player 1 (left) and player 2 (right).
// Hint: You'll need to use an if statement, querySelector() and the innerHTML property to change the text in the h1.
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
