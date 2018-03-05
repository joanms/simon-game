var colourArray = ["#blue", "#orange", "#red", "#yellow"];
var rand = colourArray[Math.floor(Math.random() * 4)];
var gameSequence = [];
var userSequence = [];
var gameScore = 0;


// Start game

$("#strict").click(function() {
  $("#strict").addClass("active");
});

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
  setTimeout(function(){$(rand).removeClass("active");}, 500);
  gameSequence.push(rand);
  console.log(gameSequence);
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

function highlightColours() {
    function setInterval() {
        if (this.id == "#blue") {
            $("#blue-sound")[0].play();
            $("#blue").addClass("active");
            setTimeout(function(){$("#blue").removeClass(active);}, 500);
        } else if (this.id == "#orange") {
            $("#orange-sound")[0].play();
            $("#orange").addClass("active");
            setTimeout(function(){$("#orange").removeClass("active");}, 500);
        } else if (this.id == "#red") {
            $("#red-sound")[0].play();
            $("#red").addClass("active");
            setTimeout(function(){$("#red").removeClass("active");}, 500);
        } else {
            $("#yellow-sound")[0].play();
            $("#yellow").addClass("active");
            setTimeout(function(){$("#yellow").removeClass("active");}, 500);
        }
    }
}

function sequenceCompare() {
  if (userSequence.join == gameSequence.join && userSequence.length == gameSequence.length && gameScore < 20) {
    gameScore++;
    $("#score").text(gameScore);
    userSequence = []; 
    if (gameScore == 20) {
      alert("You win!");
    } else {
    gameSequence.push(rand);
      var arrayLength = gameSequence.length;
      for (var i = 0; i < arrayLength; i++) {
        gameSequence[i].highlightColours();
    }
  } 
}
}