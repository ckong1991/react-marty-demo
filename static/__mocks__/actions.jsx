// refs https://github.com/facebook/jest/issues/306

// wat.
// Seriously, why are we using the object prototype?
// Mostly it's to so we can spy on modules which used and not
// exported by the component under test.

// var mockActions = Object;

// mockActions.prototype.addMarker = jest.genMockFn();
// mockActions.prototype.clearMap = jest.genMockFn();
// mockActions.prototype.filterMap = jest.genMockFn();

// module.exports = mockActions;


// instead let's try using the window, which sucks, but its better!
if (window.mocks__MockActions === undefined) {
  window.mocks__MockActions = {
    addMarker: jest.genMockFn(),
    clearMap: jest.genMockFn(),
    filterMap: jest.genMockFn(),
  }
}

module.exports =  window.mocks__MockActions;
