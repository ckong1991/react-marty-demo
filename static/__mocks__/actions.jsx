// refs https://github.com/facebook/jest/issues/306

// wat.
// Seriously, why are we using the object prototype?
// Mostly it's to so we can spy on modules which used and not
// exported by the component under test.

var mockActions = Object;

mockActions.prototype.addMarker = jest.genMockFn();
mockActions.prototype.clearMap = jest.genMockFn();
mockActions.prototype.filterMap = jest.genMockFn();


module.exports = mockActions;
