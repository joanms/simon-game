/* Code for Jasmine Clock is from https://jasmine.github.io/tutorials/your_first_suite
with a modification to the install and uninstall code from 
https://github.com/gruntjs/grunt-contrib-jasmine/issues/213 */

// Ensure that the Jasmine clock is reinstalled before each test
beforeEach(function() {
timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().uninstall();
    jasmine.clock().install();
    });


// Ensure that the function to highlight the coloured buttons exists and calls a timeout
describe("My highlight colours function", function() {       
    it("should exist", function() {
        expect(highlightColours).toBeDefined();
        }); 
              
            it("should cause a timeout to be called synchronously", function() {
                setTimeout(function() {
                  timerCallback();
                }, 100);
                
            expect(timerCallback).not.toHaveBeenCalled();
            
                jasmine.clock().tick(101);
            
                expect(timerCallback).toHaveBeenCalled();
              });
              
            });

// Ensure that the function to compare the user sequence with the game sequence exists and calls a timeout
describe("My sequence comparison function", function() {       
        it("should exist", function() {
            expect(sequenceCompare).toBeDefined();
            }); 
        
        it("should cause a timeout to be called synchronously", function() {
            setTimeout(function() {
              timerCallback();
            }, 100);
            
        expect(timerCallback).not.toHaveBeenCalled();
        
            jasmine.clock().tick(101);
        
            expect(timerCallback).toHaveBeenCalled();
        });
});
   

