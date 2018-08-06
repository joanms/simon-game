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

 it("causes an interval to be called synchronously", function() {
    setInterval(function() {
      timerCallback();
    }, 100);

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(101);
    expect(timerCallback.calls.count()).toEqual(1);

    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(1);

    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(2);
  });