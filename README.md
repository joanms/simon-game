# Simon Game
This is an internet application based on the Simon game which launched in 1978. While I saw no reason to copy the design of the original Simon game 
hardware, the basic principles of the game are the same: the user must click a gradually increasing sequence of colours until the score reaches 20. 
There is an optional strict mode which forces the user to start over from the beginning after making a mistake. Otherwise, they may attempt the sequence again.

## UX

### User Stories
- **I want a game with clear, intuitive rules.**

    Clear, concise instructions are prominently displayed on the page and user interface elements are clearly labelled.

- **I want clear feedback when I click buttons.**

    When the Start button is clicked, it is disabled to prevent it from being clicked again while a game is in progress. 
    When the Reset button is clicked, it is briefly highlighted before the page reloads. When the user presses the mouse 
    button over one of the coloured buttons, the drop shadow disappears, mimicking the effect of pressing a button, its 
    colour is lightened and a sound unique to that button plays. When the user releases the mouse button, the coloured 
    button reverts to its original state.

- **I want clear feedback at the end of each round.**

    If the user clicks the correct sequence, the score increases and a bell rings before the next round starts.
    If they clicked an incorrect sequence, an error sound plays and an alert pops up telling them that they made a mistake, 
    and what to do next -- start over in strict mode or try the same sequence again in normal mode. 

- **I want to know when the game is over.**

    If the user achieves a score of 20, a fanfare plays and an alert saying "You win!" pops up.

- **I want to be able to cancel a game and start over if I want to.**

    There is a clearly labelled Reset button.


### Playing the Game

[Click here to see a flowchart outlining the game logic](https://www.lucidchart.com/invitations/accept/86cda98e-cc15-4030-b20d-b76d33c29d08).

1. The user clicks the Strict Mode checkbox (optional) and then the Start button. This pushes the id of a random colour to an array named gameSequence.
2. The highlightColours function highlights the colour and plays its sound.
3. The user clicks the same coloured button. This pushes its id to an array named userSequence. 
4. When gameSequence and userSequence are the same length, a function to compare their contents is called. If they match, a bell rings, the user earns a point, userSequence is emptied 
and the id of one more random colour is pushed to gameSequence.
5. The highlightColours function iterates through gameSequence, highlighting each colour and playing its sound.
6. In each round, the user must click a sequence of colours that matches gameSequence.
7. If gameSequence and userSequence are the same length but their contents don't match, an error sound plays, and one of two popups appears:
    - *Normal mode:* "Incorrect. Please attempt the sequence again." When the user clicks OK, highlightColours is called again.
    - *Strict mode:* "Incorrect. Please click Start to begin a new game." When the user clicks OK, the page reloads.
8. The game ends when the user’s score reaches 20. The user can start over at any time by clicking the “Reset” button and then the "Start" button.

## Features

- Checkbox to select Strict Mode if desired.
- Start button to begin the game.
- Score counter to keep track of the user's score.
- Reset button to cancel the game. When clicked, it reloads the page, emptying the game sequence and reverting the score to zero.
- Four coloured buttons: blue, red, yellow, orange. The original Simon game has green, but I replaced it with orange to make it easier for colourblind people to play.


## Technologies Used

- **[Audacity](https://www.audacityteam.org/)** was used to convert the sound files to MP3 and OGG.
- **[Lucidchart](https://www.lucidchart.com/)** was used to create a flowchart of the game logic.
- **[Bootstrap](https://getbootstrap.com/)** is used to simplify layout and responsiveness, and for the user interface buttons.
- **[JQuery](https://jquery.com)** is used to simplify DOM manipulation and make the JavaScript more concise.
- **[Jasmine](https://jasmine.github.io/)** is used to test the JavaScript code.
- **[Jasmine-jQuery](https://github.com/velesin/jasmine-jquery)** is used to enable Jasmine to test the jQuery code.


## Testing
- I tested the CSS with [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
- I tested the HTML with [W3C Markup Validator](https://validator.w3.org/).
- I tested the JavaScript with [JS Hint](http://jshint.com/), [JS Lint](http://www.jslint.com/) and [Jasmine](https://jasmine.github.io/). 
The Jasmine test files are at simon-game/jasmine.html, simon-game/assets/js/jasmine-jquery.js and simon-game/assets/js/scriptSpec.js. 
To run the tests, view jasmine.html in a browser.
- I tested the user interface by playing the game multiple times.
    - I checked the highlighted buttons against gameSequence in the browser console to ensure that the correct buttons were highlighted.
    - I played a full game multiple times to ensure that the fanfare played and the "You win!" alert displayed correctly.
    - I made deliberate errors in strict mode to ensure that the error tone played, the correct alert popped up and the page reloaded.
    - I made deliberate errors in normal mode to ensure that the error tone played, the correct alert popped up and the sequence was highlighted again. 
- I checked the layout on a desktop PC an iPad Air and a Samsung Galaxy S7 to ensure that it displays correctly at all screen sizes.
    - On a PC monitor, the instructions are on the left, the gameplay area is in the middle and the credits for the sounds are on the right.
    - On tablets and mobile phones, the gameplay area is at the top, the instructions are below it and the credits for the sounds are on the bottom.

## Deployment

I deployed the project to Github. No issues to report.

## Credits
### Audio
I downloaded the following sounds from freesound.org and converted them to MP3 and OGG files:
- [Ab1.aif](https://freesound.org/people/UbikPhonik/sounds/177947/), [C1.aif](https://freesound.org/people/UbikPhonik/sounds/177948/), 
[Eb1.aif](https://freesound.org/people/UbikPhonik/sounds/177954/) and [F1.aif](https://freesound.org/people/UbikPhonik/sounds/177943/) 
by [UbikPhonik](https://freesound.org/people/UbikPhonik/). License: [Attribution](https://creativecommons.org/licenses/by/3.0/legalcode). 
- [Bell Ding](https://freesound.org/people/Natty23/sounds/411749/) by [Natty23](https://freesound.org/people/Natty23/). 
License: [Attribution](https://creativecommons.org/licenses/by/3.0/legalcode). 
- [Error_04.wav](https://freesound.org/people/distillerystudio/sounds/327735/) by [distillerystudio](https://freesound.org/people/distillerystudio/). 
License: [Attribution](https://creativecommons.org/licenses/by/3.0/legalcode).
- [Tada Fanfare F](https://freesound.org/people/plasterbrain/sounds/397354/) by [plasterbrain](https://freesound.org/people/plasterbrain/). 
License: [Creative Commons](https://creativecommons.org/publicdomain/zero/1.0/legalcode).

### Acknowledgements
The original Simon game was invented by Ralph H. Baer and Howard J. Morrison, with software programming by Lenny Cope. 
It was manufactured and distributed by Milton Bradley and later by Hasbro after it took over Milton Bradley.

I used [this video](https://www.youtube.com/watch?v=4pfvy_A5ceE) by YouTube user Happy Coder to help me work out the JavaScript logic.
