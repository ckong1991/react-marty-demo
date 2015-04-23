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