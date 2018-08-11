describe("My highlight colours function", function() {       
it("should exist", function() {
              expect(highlightColours).toBeDefined();
            }); 
      });
      
      //It should highlight all colours in gameSequence
      
describe("My sequence comparison function", function() {       
it("should exist", function() {
              expect(sequenceCompare).toBeDefined();
            }); 
      });
      
      //It should generate an error notification when gameSequence and userSequence don’t match

//Buttons
//Code for detecting click events is from https://stackoverflow.com/questions/23486444/error-on-jasmine-expected-event-click-to-have-been-triggered-on-div-id/23492830    

describe("Start button", function() { 
    it("should be clickable", function() {
        setFixtures('<button id="start"></button>');
        $('#start').on('click', function () { console.log("CLICK EVENT"); });
        var spyEvent = spyOnEvent('#start', 'click');
        $('#start').trigger('click');
        expect(spyEvent).toHaveBeenTriggered();
    });
        it("should start the game sequence", function() {
        setFixtures('<button id="start"></button>');
        $('#start').on('click', function () { console.log("CLICK EVENT"); });
        var spyEvent = spyOnEvent('#start', 'click');
        $('#start').trigger('click');
        expect(gameSequence.length).toBeGreaterThan(0);
    });

});

describe("Reset button", function() {       
    it("should be clickable", function() {
        setFixtures('<btn id="reset"></btn>');
        $('#reset').on('click', function () { console.log("CLICK EVENT"); });
        var spyEvent = spyOnEvent('#reset', 'click');
        $('#reset').trigger('click');
        expect(spyEvent).toHaveBeenTriggered();
    });
        it("should reload the page", function() {
        setFixtures('<btn id="reset"></btn>');
        $('#reset').on('click', function () { console.log("CLICK EVENT"); });
        var spyEvent = spyOnEvent('#reset', 'click');
        $('#reset').trigger('click');
        expect(gameSequence.length).toEqual(0);
    }); 

});




//Jasmine clock code to test timeout and interval functions from https://jasmine.github.io/tutorials/your_first_suite
beforeEach(function() {
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
  });
  
afterEach(function() {
    jasmine.clock().uninstall();
  });
  
it("causes a timeout to be called synchronously", function() {
    setTimeout(function() {
      timerCallback();
    }, 100);

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(101);

    expect(timerCallback).toHaveBeenCalled();
  });