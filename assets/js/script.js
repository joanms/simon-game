var colourArray = ["#blue", "#orange", "#red", "#yellow"];
var gameSequence = [];
var userSequence = [];
var gameScore = 0;


$("#start").click(function() {
  var randomColour = colourArray[Math.floor(Math.random() * 4)];  //select the first colour
  gameSequence.push(randomColour); //add the colour to the array
  console.log(gameSequence); //see if the above worked
});

$("#reset").click(function() {
  location.reload();
});


function highlightColours(colours) {
  // Code here to high element
  var currentColour = gameSequence.pop();
  // ... currentColour used
  $(currentColour + "-sound")[0].play();
  $(currentColour).addClass("active");


  if (colours.length !== 0)
  {
    setTimeout(function() { $(currentColour).removeClass("active");
                            highlightColours(colours); }, 500);
  }
}

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
<<<<<<< HEAD
        highlightColours(gameSequence.slice()); // this line of code suggested by my mentor Michael Newton
=======
        for (i = 0; i < gameSequence.length; i++) {
        gameSequence[i].highlightColours();  // PROBLEM: I need to find a way to call highlightColours() on each item in the gameSequence array.
      }
>>>>>>> parent of eef3671... minor edits of the JavaScript
    } 
  } else if (("#strict-mode").checked==true) { // The user has input the wrong sequence and must start over
    location.reload();
  } else {                  // The user has input the wrong sequence but may try again
        highlightColours();
  }
}