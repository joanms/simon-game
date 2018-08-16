# Simon Game
## User Interface
- Checkbox to select Strict Mode.
- “Start” button.
- Score counter.
- “Reset” button.
- Four coloured buttons: blue, red, yellow, orange. The original Simon game has green, but I replaced it with orange to make it easier for colourblind people to play.


## Playing the Game
1. The user clicks the Strict Mode checkbox (optional) and then the Start button. This pushes the id of a random colour to an array named gameSequence.
2. The highlightColours function highlights the colour and plays its sound.
3. The user clicks the same button. This pushes its id to an array named userSequence. 
4. When gameSequence and userSequence are the same length, a function to compare their contents is called. If they match, a bell rings, the user earns a point, userSequence is emptied 
and the id of one more random colour is pushed to gameSequence.
5. The highlightColours function iterates through gameSequence, highlighting each colour and playing its sound.
6. In each round, the user must click a sequence of colours that matches gameSequence.
7. If gameSequence and userSequence are the same length but their contents don't match, an error sound plays, and one of two popups appears:
- Normal mode: "Incorrect. Please attempt the sequence again." When the user clicks OK, highlightColours is called again.
- Strict mode: "Incorrect. Please click Start to begin a new game." When the user clicks OK, the page reloads.
8. The game ends when the user’s score reaches 20. The user can start over at any time by clicking the “Reset” button and then the "Start" button.

## Testing
- I tested the CSS with [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
- I tested the HTML with [W3C Markup Validator](https://validator.w3.org/).
- I tested the JavaScript with [JS Hint](http://jshint.com/), [JS Lint](http://www.jslint.com/) and [Jasmine](https://jasmine.github.io/).
- I tested the user interface by playing the game multiple times. This included making deliberate errors in both Strict and Normal modes to ensure that the correct alerts appeared.
- I checked the layout on a Samsung Galaxy S7 and an iPad Air as well as a desktop PC to ensure that it displays correctly at small and medium screen sizes.

## Credits
### Audio
I downloaded the following sounds from freesound.org and converted them to MP3 and OGG files:
- [Ab1.aif](https://freesound.org/people/UbikPhonik/sounds/177947/), [C1.aif](https://freesound.org/people/UbikPhonik/sounds/177948/), 
[Eb1.aif](https://freesound.org/people/UbikPhonik/sounds/177954/) and [F1.aif](https://freesound.org/people/UbikPhonik/sounds/177943/) 
by [UbikPhonik](https://freesound.org/people/UbikPhonik/) | License: [Attribution](https://creativecommons.org/licenses/by/3.0/legalcode) 
- [Bell Ding](https://freesound.org/people/Natty23/sounds/411749/) by [Natty23](https://freesound.org/people/Natty23/) | 
License: [Attribution](https://creativecommons.org/licenses/by/3.0/legalcode) 
- [Error_04.wav](https://freesound.org/people/distillerystudio/sounds/327735/) by [distillerystudio](https://freesound.org/people/distillerystudio/) | 
License: [Attribution](https://creativecommons.org/licenses/by/3.0/legalcode)
- [Tada Fanfare F](https://freesound.org/people/plasterbrain/sounds/397354/) by [plasterbrain](https://freesound.org/people/plasterbrain/) | 
License: [Creative Commons](https://creativecommons.org/publicdomain/zero/1.0/legalcode)

### Acknowledgements
I used [this video](https://www.youtube.com/watch?v=4pfvy_A5ceE) to help me work out the logic of the JavaScript code.
