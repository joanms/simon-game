# Simon Game
This game is based on the Simon game which launched in 1978. While I saw no reason to copy the design of the original Simon game 
hardware, the basic principles of the game are the same: the user must click a gradually increasing sequence of colours until the score reaches 20. 
There is an optional strict mode which forces the user to start over from the beginning after making a mistake. Otherwise, they may attempt the sequence again.

## UX

### Playing the Game

[Click here to see a flowchart outlining the game logic](https://www.lucidchart.com/invitations/accept/86cda98e-cc15-4030-b20d-b76d33c29d08).

1. The user clicks the Strict Mode checkbox (optional) and then the Start button. 
2. A random coloured button is highlighted and its sound plays.
3. The user clicks the same coloured button. 
4. If the user clicks the correct button, a bell rings, the user earns a point, and the same button plus one more random coloured button is highlighted. 
Each button's unique sound plays as it is highlighted.
6. If the user continues to click the correct sequence of buttons, the sequence and the user's score increase by one with each round. 
The user can start over at any time by clicking the “Reset” button and then the "Start" button.
7. If the user clicks the wrong button or sequence of buttons, an error sound plays and one of two alerts appears:
    - *Normal mode:* "Incorrect. Please attempt the sequence again." When the user clicks OK, the button or sequence of buttons is highlighted again.
    - *Strict mode:* "Incorrect. Please click Start to begin a new game." When the user clicks OK, the page reloads.
8. When the user’s score reaches 20, a fanfare plays and an alert saying "You win!" appears. 

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
    and what to do next: start over in strict mode or try the same sequence again in normal mode. 

- **I want to know when the game is over.**

    If the user achieves a score of 20, a fanfare plays and an alert saying "You win!" pops up.
    
- **I don't want irritating sounds.**
    
    I carefully chose sounds that would be pleasant to listen to over and over. If a sound started to irritate me after I'd been 
    testing the game for a while, I replaced it.

- **I want to be able to cancel a game and start over if I want to.**

    There is a clearly labelled Reset button.


## Features

- **Instructions**
- **Checkbox** to select Strict Mode if desired.
- **Start button** to begin the game.
- **Score counter** to keep track of the user's score.
- **Reset button** to cancel the game. When clicked, it reloads the page, emptying the game sequence and reverting the score to zero.
- **Blue, red, yellow** and **orange buttons.** The original Simon game has a green button, but I replaced it with orange to make it easier for colourblind people to play.


## Technologies Used

This is a front-end only interactive website, using HTML5, CSS3 and JavaScript. In addition, I used the following:

- **[Audacity](https://www.audacityteam.org/)** was used to convert the sound files to MP3 and OGG so that browsers could play them.
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
To run the tests, view jasmine.html in a browser. Since most of the functionality depends on click events, there are not many features that 
can be tested with Jasmine.
- I tested the user interface by playing the game multiple times.
    - I clicked the Start and Reset buttons to ensure that they functioned correctly.
    - I checked the highlighted buttons against gameSequence in the browser console to ensure that the correct buttons were highlighted.
    - I checked the score as I played to ensure that it increased by one point for each correct round input.
    - I played a full game multiple times to ensure that the fanfare played and the "You win!" alert displayed correctly when the score reached 20.
    - I made deliberate errors in strict mode to ensure that the error tone played, the correct alert popped up and the page reloaded.
    - I made deliberate errors in normal mode to ensure that the error tone played, the correct alert popped up and the sequence was highlighted again. 
- I checked the layout on a desktop PC an iPad Air and a Samsung Galaxy S7 to ensure that it displays correctly at all screen sizes.
    - On a PC monitor, the instructions are on the left, the gameplay area is in the middle and the credits for the sounds are on the right.
    - On tablets and mobile phones, the gameplay area is at the top, the instructions are below it and the credits for the sounds are at the bottom.

### Bug

On mobile devices, the colour highlighting and sounds are out of sync, and when the user taps a coloured button, it isn't highlighted, but the sound plays. 
The game otherwise works on mobile devices. After discussing this with my mentor, Chris Zielinski, I think that this bug is due to an inherent limitation 
of mobile devices in handling JavaScript.

## Deployment

I deployed the project to GitHub as folows: 

1. I navigated to the repository in GitHub.
2. I clicked on Settings
3. I scrolled down to GitHub Pages and selected the master branch as the source 
4. I clicked Save. 

The procedure worked without any errors, and there are no differences between the deployed version and the development version.

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

My mentors, Micheal Newton and Chris Zielinski, provided valuable feedback and advice on the project.