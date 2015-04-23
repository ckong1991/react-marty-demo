// refs https://github.com/facebook/jest/issues/306


// 1 //////////////////////////////////////////////////////////////////////////
// wat.
// Seriously, why are we using the object prototype?
// Mostly it's to so we can spy on modules which used and not
// exported by the component under test.

// var mockActions = Object;

// mockActions.prototype.addMarker = jest.genMockFn();
// mockActions.prototype.clearMap = jest.genMockFn();
// mockActions.prototype.filterMap = jest.genMockFn();

// module.exports = mockActions;


// 2 //////////////////////////////////////////////////////////////////////////
// instead let's try using the window, which sucks, but it's better!

// if (window.mocks__MockActions === undefined) {
//   window.mocks__MockActions = {
//     addMarker: jest.genMockFn(),
//     clearMap: jest.genMockFn(),
//     filterMap: jest.genMockFn(),
//   }
// }

// module.exports =  window.mocks__MockActions;


// 3 //////////////////////////////////////////////////////////////////////////
// one last try, sanely!
//
// the words of JEFF (top contrib):
// the body of this function should only be executed once, then module.exports
// is memoized. However, as part of the teardown for an it() block, jest
// clears this cache. Therefore, if all actions take place in the same it()
// block, you should be able to reference the same mock obj defined here.
//

module.exports =  {
  addMarker: jest.genMockFn(),
  clearMap: jest.genMockFn(),
  filterMap: jest.genMockFn(),
};