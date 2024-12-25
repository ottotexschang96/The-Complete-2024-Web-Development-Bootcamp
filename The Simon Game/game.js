// alert("!!!");
// https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12407832#overview

var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var started = false;
var level = 0;

// keydown
$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})


function nextSequence() {

    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // flash
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    
}

function playSound(name) {
    // sound
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColour) {
   
    $("#" + currentColour).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100); //your code to be executed after 1 second
}

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length == gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000); //your code to be executed after 10 second
        }

    } else {
        console.log("wrong");

        playSound("wrong")
              
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
   
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200); //your code to be executed after 2 second

        startOver()
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}