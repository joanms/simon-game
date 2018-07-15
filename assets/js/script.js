var colourArray = ["#blue", "#orange", "#red", "#yellow"];
var rand = colourArray[Math.floor(Math.random() * 4)];
var gameSequence = [];
var userSequence = [];
var gameScore = 0;


// When "reset" is clicked, the game should start over from the beginning
$("#reset").click(function() {
  location.reload();
});


//When "Start" is clicked, the first colour in the random sequence should be highlighted, and its sound should play
$("#start").click(function() {
  $(rand).addClass("active");
  $(rand + "-sound")[0].play();
  setTimeout(function(){$(rand).removeClass("active");}, 500);
  gameSequence.push(rand);
  console.log(gameSequence);
});


// When the user clicks a coloured button, it should be highlighted and its sound should play
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


//My mentor, Michael Newton, suggested the highlightColours function to highlight the colours in gameSequence

function highlightColours(colours) {
  var currentColour = gameSequence.pop();
  $(currentColour + "-sound")[0].play();
  $(currentColour).addClass("active");


  if (colours.length !== 0)
  {
    setTimeout(function() { $(currentColour).removeClass("active");
                            highlightColours(colours); }, 500);
  }
}


// Compare the user input with the game output

function sequenceCompare() {
  if (userSequence.length == gameSequence.length && 
  userSequence.every(function(v,i) { return v === gameSequence[i]})) { // This line of code is from https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript#19746771
    console.log("Match");  // Check if the above worked correctly
    gameScore++; //Increment game score
    $("#score").text(gameScore); //Display game score
    userSequence = [];  // userSequence is emptied after each round because the user must input the whole sequence in each round
      if (gameScore == 20) { // The user has achieved the maximum score
        alert("You win!");
        location.reload();
      } else {
        var rand = colourArray[Math.floor(Math.random() * 4)]; // The user has input the correct sequence, but not achieved the maximum score of 20
        gameSequence.push(rand); //Add one more random number to the sequence
        console.log(gameSequence);
        highlightColours(gameSequence.slice()); // My mentor, Michael Newton, suggested this line of code
    } 
  } else if (("#strict-mode").checked==true) { // If the game is in strict mode, the user must start over after inputting an incorrect sequence
    location.reload();
  } else {                  // If the game is not in strict mode, the user may try again after inputting an incorrect sequence
        highlightColours();
  }
}