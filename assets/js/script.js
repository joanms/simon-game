var colourArray = ["#blue", "#orange", "#red", "#yellow"];
var rand = colourArray[Math.floor(Math.random() * 4)];
var gameSequence = [];
var userSequence = [];
var gameScore = 0;
var i;


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


function sequenceCompare() {
  if (userSequence.length == gameSequence.length && 
  userSequence.every(function(v,i) { return v === gameSequence[i]})) { // This line of code is from https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript#19746771
    console.log("Match");
    gameScore++; //increment game score
    $("#score").text(gameScore); //display game score
    userSequence = []; 
      if (gameScore == 20) { // The user has won
        alert("You win!");
        location.reload();
      } else {
        var rand = colourArray[Math.floor(Math.random() * 4)]; // The user has input the correct sequence, but the game is not over
        gameSequence.push(rand); //add one more radom number to the sequence
        console.log(gameSequence);
        for (i = 0; i < gameSequence.length; i++) {
        gameSequence[i].highlightColours();  // PROBLEM: I need to find a way to call highlightColours() on each item in the gameSequence array.
      }
    } 
  } else if (strict=true) { // The user has input the wrong sequence and must start over
    location.reload;
  } else {                  // The user has input the wrong sequence but may try again
        highlightColours();
  }
}