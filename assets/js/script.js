var colourArray = ["#blue", "#orange", "#red", "#yellow"];
var rand = colourArray[Math.floor(Math.random() * 4)];
var gameSequence = [];
var userSequence = [];
var gameScore = 0;


//User input

//When the user clicks the Start button, the first random colour should be added to gameSequence
$("#start").click(function() {
  gameSequence.push(rand);
  console.log(gameSequence);
  gameSequence.forEach(highlightColours);
});


// When the user clicks a coloured button, it should be highlighted and its sound should play
$(".colour").mousedown(function() {
  $("#"+(this.id)+"-sound")[0].play();
  $(this).addClass("active");
  userSequence.push("#" + this.id); // The user's selection is added to userSequence
  console.log(userSequence);
  if (userSequence.length == gameSequence.length) { //userSequence is compared to game Sequence
    sequenceCompare()}
});
$(".colour").mouseup(function() {
  $(this).removeClass("active");
});


// When the user clicks the Reset button, the game should start over from the beginning
$("#reset").click(function() {
  location.reload();
});



//Game output

//The colour(s) in gameSequence should be highlighted and the corresponding sound(s) should play
function highlightColours() {
  var currentColour = gameSequence.slice();
  $(currentColour + "-sound")[0].play();
  $(currentColour).addClass("active");
  setTimeout(function(){$(currentColour).removeClass("active");}, 500);
}


// Compare the user's sequence with the randomly generated sequence

function sequenceCompare() {
  if (userSequence.every(function(v,i) { return v === gameSequence[i]})) { // This line of code is from https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript#19746771
    console.log("Match");  // Check if the above worked correctly
    gameScore++; //Increment game score
    $("#score").text(gameScore); //Display game score
    userSequence = [];  // userSequence is emptied after each round because the user must input the whole sequence in each round
      if (gameScore == 20) { // The user has achieved the maximum score
        alert("You win!");
        location.reload();
      } else { // The user has input the correct sequence, but not achieved the maximum score of 20
        gameSequence.push(rand); //Add one more random number to the sequence
        console.log(gameSequence);
          gameSequence.forEach(highlightColours);
    } 
  } else if (("#strict-mode").checked==true) { // If the game is in strict mode, the user must start over after inputting an incorrect sequence
    location.reload();
  } else {                  // If the game is not in strict mode, the user may try again after inputting an incorrect sequence
        gameSequence.forEach(highlightColours);
  }
}