var colourArray = ["#blue", "#orange", "#red", "#yellow"];
var gameSequence = [];
var userSequence = [];
var gameScore = 0;


//When the user clicks the Start button, the first random colour in gameSequence is highlighted and its sound plays.
$("#start").click(function() {
  if (gameScore != 0) {
        $("#error-sound")[0].play();
        alert("A game is already in progress. If you wish to start a new one, please click Reset and then Start."); //The Start button should only work if a game is not currently in progress.
  }
  else {
    var rand = colourArray[Math.floor(Math.random() * 4)];
    gameSequence.push(rand);
    console.log(gameSequence);
    highlightColours();
  }
});


//When the user clicks a coloured button, it's highlighted and its sound plays.
$(".colour").mousedown(function() {
  $("#"+(this.id)+"-sound")[0].load(); //Loading the sound before playing it makes it possible to play the same sound more than once in a row.
  $("#"+(this.id)+"-sound")[0].play();
  $(this).addClass("active");
  userSequence.push("#" + this.id); //The user's selection is added to userSequence.
  console.log(userSequence);
  if (userSequence.length == gameSequence.length) { //When the user's clicked sequence is the same length as the randomly generated one, their contents are compared.
    setTimeout(function(){
      sequenceCompare();
    }, 500);  
  }
});
$(".colour").mouseup(function() {
  $(this).removeClass("active");
});


//When the user clicks the Reset button, the game should start over from the beginning.
$("#reset").click(function() {
  location.reload();
});


//The colour(s) in gameSequence should be highlighted one by one in the correct order and the corresponding sound(s) should play.
//This function was adapted from here: https://stackoverflow.com/a/36707123/9179340
function highlightColours() {
  gameSequence.forEach(function(element, index){ //forEach ensures that the array elements are highlighted in the correct order.
    setTimeout(function(){
      $(element + "-sound")[0].load(); //Loading the sound before playing it makes it possible to play the same sound more than once in a row.
      $(element + "-sound")[0].play();
      $(element).addClass("active");
      setTimeout(function(){$(element).removeClass("active");}, 500);
    },
    1000 * index); //This ensures that the array elements are highlighted one after another and not simultaneously.
  });
}


//Compare the user's sequence with the randomly generated sequence
function sequenceCompare() {
  if (userSequence.every(function(v,i) { return v === gameSequence[i]})) { //The syntax for this line of code is from https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript#19746771
    console.log("Match");  //Check if the above worked correctly.
    gameScore++; //A point is added to the user's score.
    $("#score").text(gameScore); //Display the user's score.
    userSequence = [];  //userSequence is emptied after each round because the user must input the whole sequence in each round.
      if (gameScore == 20) { //The user has achieved the maximum score.
        $("#fanfare")[0].play();
        alert("You win!"); 
      } 
      else { //The user has input the correct sequence, but not achieved the maximum score of 20.
        $("#bell")[0].play();
        setTimeout(function() {
        var rand = colourArray[Math.floor(Math.random() * 4)];
        gameSequence.push(rand); //Add one more random number to the sequence.
        console.log(gameSequence);
        highlightColours();
        }, 1000);
    } 
  } 
  else if ($("input[type=checkbox]").prop("checked")) { //Code to detect if the Strict Mode checkbox is checked from https://medium.com/js-dojo/check-if-a-checkbox-is-checked-with-jquery-2843f97d4954
    $("#error-sound")[0].play();
    alert("Incorrect. Please click Start to begin a new game."); //If the game is in strict mode, the user must start over after making a mistake.
    location.reload();
  } 
  else {
    $("#error-sound")[0].play();
    alert("Incorrect. Please attempt the sequence again."); //If the game is not in strict mode, the user may try again after making a mistake.
    userSequence = [];
    highlightColours();
  }
}