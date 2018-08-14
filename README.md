# Simon Game
## User Interface
<ul>
<li>Checkbox to select Strict Mode.</li>
<li>“Start” button.</li>
<li>Score counter.</li>
<li>“Reset” button.</li>
<li>Four coloured buttons: blue, red, yellow, orange. The original Simon game has green, but I replaced it with orange to make it easier for colourblind people to play.</li>
</ul>

### Sound Files
<ul>
     <li> <a href="https://freesound.org/people/distillerystudio/sounds/327735/">Error_04.wav</a> by <a href="https://freesound.org/people/distillerystudio/">distillerystudio</a> | License: Attribution</li> 
     <li> <a href="https://freesound.org/people/plasterbrain/sounds/397354/">Tada Fanfare F</a> by <a href="https://freesound.org/people/plasterbrain/">plasterbrain</a> | License: Creative Commons</li>
     <li> <a href="https://freesound.org/people/UbikPhonik/sounds/177947/">Ab1.aif</a> by <a href="https://freesound.org/people/UbikPhonik/">UbikPhonik</a> | License: Attribution</li> 
     <li> <a href="https://freesound.org/people/UbikPhonik/sounds/177948/">C1.aif</a> by <a href="https://freesound.org/people/UbikPhonik/">UbikPhonik</a> | License: Attribution</li> 
     <li> <a href="https://freesound.org/people/UbikPhonik/sounds/177954/">Eb1.aif</a> by <a href="https://freesound.org/people/UbikPhonik/">UbikPhonik</a> | License: Attribution</li> 
     <li> <a href="https://freesound.org/people/UbikPhonik/sounds/177943/">F1.aif</a> by <a href="https://freesound.org/people/UbikPhonik/">UbikPhonik</a> | License: Attribution</li> 
     <li> <a href="https://freesound.org/people/Natty23/sounds/411749/">Bell Ding</a> by <a href="https://freesound.org/people/Natty23/">Natty23</a> | License: Attribution</li> 
</ul>
I converted the sound files to MP3 and Ogg.

## Playing the Game
<ol>
<li>The user clicks the Start button. This pushes the id of a random colour to an array named gameSequence. The highlightColours function highlights the colour and plays its sound.</li>
<li>The user clicks the same button. This pushes its id to an array named userSequence. </li>
<li>When gameSequence and userSequence are the same length, a function to compare their contents is called. If they match, a bell rings, the user earns a point, userSequence is emptied 
and the id of one more random colour is pushed to gameSequence. The highlightColours function iterates through gameSequence, highlighting each colour and playing its sound.</li>
<li>In each round, the user must click a sequence of colours that matches gameSequence.</li>
<li>If gameSequence and userSequence are the same length but their contents don't match, an error sound plays, and one of two popups appears:
<ul>
<li>Normal mode: "Incorrect. Please attempt the sequence again." When the user clicks OK, highlightColours is called again.</li>
<li>Strict mode: "Incorrect. Please click Start to begin a new game." When the user clicks OK, the page reloads.</li></li></ul>
<li>The game ends when the user’s score reaches 20. The user can start over at any time by clicking the “Reset” button.</li></ol>

## Testing
<ul>
<li> <a href="https://jigsaw.w3.org/css-validator/">W3C CSS Validator</li>
<li> <a href="https://validator.w3.org/">W3C Markup Validator</li>
<li> <a href="http://jshint.com/">JS Hint</li>
<li> <a href="http://www.jslint.com//">JS Lint</li>
<li> Jasmine</li>