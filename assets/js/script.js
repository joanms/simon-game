var colourArray = ["#blue", "#orange", "#red", "#yellow"];
var gameSequence = [];
var userSequence = [];
var gameScore = 0;


//When the user clicks the Start button, the first random colour in gameSequence is highlighted and its sound plays.
$("#start").click(function() { 
    var rand = colourArray[Math.floor(Math.random() * 4)];
    gameSequence.push(rand);
    $("#start").attr("disabled", "disabled"); //The Start button is disabled after clicking to prevent errors caused by the user clicking it more than once.
    console.log(gameSequence);
    highlightColours();
});


//When the user clicks a coloured button, it's highlighted and its sound plays.
$(".colour").mousedown(function() {
  $("#"+(this.id)+"-sound")[0].load(); //Loading the sound before playing it makes it possible to play the same sound more than once in a row.  
  $("#"+(this.id)+"-sound")[0].play(); //The code for loading and playing sounds is from this video by YouTube user Happy Coder https://www.youtube.com/watch?v=4pfvy_A5ceE
  $(this).addClass("active");
  userSequence.push("#" + this.id); //The user's selection is added to userSequence.
  console.log(userSequence);
  //When the user's clicked sequence is the same length as the randomly generated one, their contents are compared.
  if (userSequence.length == gameSequence.length) { 
    setTimeout(function(){ //This timeout is to ensure that there is a slight delay between the user's input and the game's feedback, so the user is not confused by the game moving too fast.
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
function highlightColours() {
  gameSequence.forEach(function(element, index){ //forEach ensures that the array elements are highlighted in the correct order.
    setTimeout(function(){ //This timeout from https://stackoverflow.com/a/36707123/9179340 ensures that the array elements are highlighted one after another and not simultaneously.
      $(element + "-sound")[0].load(); //Loading the sound before playing it makes it possible to play the same sound more than once in a row.
      $(element + "-sound")[0].play(); //The code for loading and playing sounds is from this video by YouTube user Happy Coder https://www.youtube.com/watch?v=4pfvy_A5ceE
      $(element).addClass("active");
      setTimeout(function(){$(element).removeClass("active");}, 500);
    },
    700 * index); //Index 0 is highlighted immediately, index 1 after 700ms, index 2 700ms after that, and so on.
  });
}


//Compare the user's sequence with the randomly generated sequence
function sequenceCompare() {
//The syntax for the following line is from https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript#19746771
  if (userSequence.every(function(value, index) { return value === gameSequence[index]})) {
    console.log("Match"); //Check if the above worked correctly.
    gameScore++; //A point is added to the user's score.
    $("#score").text(gameScore); //Display the user's score.
    userSequence = []; //userSequence is emptied after each round because the user must input the whole sequence in each round.
      if (gameScore == 20) { //The user has achieved the maximum score.
        $("#fanfare")[0].play();
        alert("You win!"); 
      } 
      else { //The user has input the correct sequence, but not achieved the maximum score of 20.
        $("#bell")[0].play();
        setTimeout(function() { // This timeout ensures that the next round doesn't start too soon after the previous one
        var rand = colourArray[Math.floor(Math.random() * 4)];
        gameSequence.push(rand); //Add one more random number to the sequence.
        console.log(gameSequence);
        highlightColours();
        }, 500);
    } 
  } 
//Code for the following line is from https://medium.com/js-dojo/check-if-a-checkbox-is-checked-with-jquery-2843f97d4954
  else if ($("input[type=checkbox]").prop("checked")) {
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