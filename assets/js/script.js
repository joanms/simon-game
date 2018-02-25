var blueSound = $("#blue-sound")[0];
var redSound = $("#red-sound")[0];
var yellowSound = $("#yellow-sound")[0];
var orangeSound = $("#orange-sound")[0];

var buttonSounds

$("#blue").click(function() {
  blueSound.play();
});

$("#red").click(function() {
  redSound.play();
});

$("#yellow").click(function() {
  yellowSound.play();
});

$("#orange").click(function() {
  orangeSound.play();
}); 

  var colourArray = ["#blue", "#orange", "#red", "#yellow"];
  var randomColour = colourArray[Math.floor(Math.random() * 4)];