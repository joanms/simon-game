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
     <li>S: <a href="https://freesound.org/people/distillerystudio/sounds/327735/">Error_04.wav</a> by <a href="https://freesound.org/people/distillerystudio/">distillerystudio</a> | License: Attribution</li> 
     <li>S: <a href="https://freesound.org/people/plasterbrain/sounds/397354/">Tada Fanfare F</a> by <a href="https://freesound.org/people/plasterbrain/">plasterbrain | License: Creative Commons</a></li>
     <li>S: <a href="https://freesound.org/people/UbikPhonik/sounds/177947/">Ab1.aif</a> by <a href="https://freesound.org/people/UbikPhonik/">UbikPhonik</a> | License: Attribution</li> 
     <li>S: <a href="https://freesound.org/people/UbikPhonik/sounds/177948/">C1.aif</a> by <a href="https://freesound.org/people/UbikPhonik/">UbikPhonik</a> | License: Attribution</li> 
     <li>S: <a href="https://freesound.org/people/UbikPhonik/sounds/177954/">Eb1.aif</a> by <a href="https://freesound.org/people/UbikPhonik/">UbikPhonik</a> | License: Attribution</li> 
     <li>S: <a href="https://freesound.org/people/UbikPhonik/sounds/177943/">F1.aif</a> by <a href="https://freesound.org/people/UbikPhonik/">UbikPhonik</a> | License: Attribution</li> 
</ul>
I converted the sound files to MP3 and Ogg.

## How to Play
<ol>
<li>When the user clicks “Start”, a random coloured button is highlighted and a sound plays. Each button has a unique sound.</li>
<li>If the user clicks the same button, the user score increases by 1, and the same coloured button plus one random button is highlighted.</li>
<li>The user must click the same buttons in the same order to advance in the game. The number of highlighted buttons increases by 1 with each round.</li>
<li>If the user clicks an incorrect button:
<ul>
<li>Normal mode: an error message appears, and the sequence is repeated to remind the user.</li>
<li>Strict mode: the game starts over</li></li></ul></ol>
The game ends when the user’s score reaches 20. The user can start over at any time by clicking the “Reset” button.

