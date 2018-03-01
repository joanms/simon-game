var colourArray = ["#blue", "#orange", "#red", "#yellow"];
var rand = colourArray[Math.floor(Math.random() * 4)];
var gameSequence = [];
var userSequence = [];
var gameScore = document.getElementById("score").value;
const levels = 20;

// Start game
$("#start").click(function() {
  $(rand).addClass("active");
  if (rand == "#blue") {
      $("#blue-sound")[0].play();
  } else if (rand == "#orange") {
      $("#orange-sound")[0].play();
  } else if (rand == "#red") {
      $("#red-sound")[0].play();
  } else {
      $("#yellow-sound")[0].play();
  }
  gameSequence.push(rand);
  console.log(gameSequence);
  setTimeout(function(){$(rand).removeClass("active");}, 500);
});

// User input
$(".colour").mousedown(function() {
  $("#"+(this.id)+"-sound")[0].play();
  $(this).addClass("active");
  userSequence.push("#" + this.id);
  console.log(userSequence);
  sequenceCompare();
});

$(".colour").mouseup(function() {
  $(this).removeClass("active");
});

// Compare the user input with the game output
function sequenceCompare() {
  if (userSequence.join == gameSequence.join && userSequence.length == gameSequence.length) {
    console.log("Correct");
    userSequence = []; {
      gameSequence.push(rand);
      console.log(gameSequence);
      var arrayLength = gameSequence.length;
      for (var i = 0; i < arrayLength; i++) {
        if (id = "#blue") {
      $("#blue-sound")[0].play();
  } else if (id = "#orange") {
      $("#orange-sound")[0].play();
  } else if (id = "#red") {
      $("#red-sound")[0].play();
  } else {
      $("#yellow-sound")[0].play();
  } 
      $("#"+(this.id)+"-sound")[0].play();
      $(this).addClass("active");
      }
    }
  } 
}