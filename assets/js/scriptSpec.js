/* Code for Jasmine Clock is from https://jasmine.github.io/tutorials/your_first_suite
with a modification to the install and uninstall code from 
https://github.com/gruntjs/grunt-contrib-jasmine/issues/213 */

beforeEach(function() {
timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().uninstall();
    jasmine.clock().install();
    });


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


describe("My sequence comparison function", function() {       
        it("should exist", function() {
            expect(sequenceCompare).toBeDefined();
            }); 
        

        // it("should end the game when the score reaches 20", function (){
        //     var spyEvent = spyOnEvent("#fanfare", "play");
        //     gameScore = 20;
        //     expect(spyEvent).toHaveBeenTriggered();
        // });
        
        it("should cause a timeout to be called synchronously", function() {
            setTimeout(function() {
              timerCallback();
            }, 100);
            
        expect(timerCallback).not.toHaveBeenCalled();
        
            jasmine.clock().tick(101);
        
            expect(timerCallback).toHaveBeenCalled();
        });
});
   

