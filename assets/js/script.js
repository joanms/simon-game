$("#blue").click(function() {
  $("#blue-sound")[0].play();
});

$("#red").click(function() {
   $("#red-sound")[0].play();
});

$("#yellow").click(function() {
  $("#yellow-sound")[0].play();
});

$("#orange").click(function() {
  $("#orange-sound")[0].play();
}); 

  var colourArray = ["#blue", "#orange", "#red", "#yellow"];
  
  function generateRandom() {
      var randomColour = colourArray[Math.floor(Math.random() * 4)];
      if (randomColour = "#blue") {
          $("#blue-sound")[0].play();
      } else if (randomColour = "#orange") {
          $("#orange-sound")[0].play();
      } else if (randomColour = "#red") {
          $("#red-sound")[0].play();
      } else {
          $("#yellow-sound")[0].play();
      }
  }