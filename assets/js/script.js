var colourArray = ["#blue", "#orange", "#red", "#yellow"];
var gameSequence = [];
var userSequence = [];
var gameScore = 0;


//When the user clicks the Start button, the first random colour in gameSequence is highlighted and its sound plays
$("#start").click(function() {
  var rand = colourArray[Math.floor(Math.random() * 4)];
  gameSequence.push(rand);
  console.log(gameSequence);
  highlightColours();
});


// When the user clicks a coloured button, it's highlighted and its sound plays
$(".colour").mousedown(function() {
  $("#"+(this.id)+"-sound")[0].load();
  $("#"+(this.id)+"-sound")[0].play();
  $(this).addClass("active");
  userSequence.push("#" + this.id); // The user's selection is added to userSequence
  console.log(userSequence);
  if (userSequence.length == gameSequence.length) {
    setTimeout(function(){
      sequenceCompare();
    }, 500);  
  }
});
$(".colour").mouseup(function() {
  $(this).removeClass("active");
});


// When the user clicks the Reset button, the game should start over from the beginning
$("#reset").click(function() {
  location.reload();
});


//The colour(s) in gameSequence should be highlighted one by one in the correct order and the corresponding sound(s) should play
//This function was adapted from here: https://stackoverflow.com/a/36707123/9179340
function highlightColours() {
  gameSequence.forEach(function(element, index){  //forEach ensures that the array elements are highlighted in the correct order
    setTimeout(function(){
      $(element + "-sound")[0].load();
      $(element + "-sound")[0].play();
      $(element).addClass("active");
      setTimeout(function(){$(element).removeClass("active");}, 500);
    },
    1000 * index); //This ensures that the array elements are highlighted one after another and not simultaneously
  });
}
  


// Compare the user's sequence with the randomly generated sequence
function sequenceCompare() {
  if (userSequence.every(function(v,i) { return v === gameSequence[i]})) { // This line of code is from https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript#19746771
    console.log("Match");  // Check if the above worked correctly
    gameScore++; //Increment game score
    $("#score").text(gameScore); //Display game score
    userSequence = [];  // userSequence is emptied after each round because the user must input the whole sequence in each round
      if (gameScore == 20) { // The user has achieved the maximum score
        $("#fanfare")[0].play();
        alert("You win!"); 
      } 
      else { // The user has input the correct sequence, but not achieved the maximum score of 20
        setTimeout(function() {
        var rand = colourArray[Math.floor(Math.random() * 4)];
        gameSequence.push(rand); //Add one more random number to the sequence
        console.log(gameSequence);
        highlightColours();
        }, 1000);
    } 
  } 
  else if (("#strict-mode").checked==true) { // If the game is in strict mode, the user must start over after inputting an incorrect sequence
    $("#error-sound")[0].play();
    alert("Start over!");
    location.reload();
  } 
  else { // If the game is not in strict mode, the user may try again after inputting an incorrect sequence
    $("#error-sound")[0].play();
    alert("Try again!");
    userSequence = [];
    highlightColours();
  }
}