var colourArray = ["#blue", "#orange", "#red", "#yellow"];
var rand = colourArray[Math.floor(Math.random() * 4)];
var gameSequence = [];
var userSequence = [];
var gameScore = 0;


$("#reset").click(function() {
  location.reload();
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
        highlightColours(gameSequence.slice()); // this line of code suggested by my mentor Michael Newton
    } 
  } else if (("#strict-mode").checked==true) { // The user has input the wrong sequence and must start over
    location.reload();
  } else {                  // The user has input the wrong sequence but may try again
        highlightColours();
  }
}