// wat
var mockActions = Object;

var mockFnNames = [
  'filterMap',
  'clearMap',
  'addMarker',
];

mockFnNames.forEach(function(mockFunction) {
  mockActions[mockFunction] = jest.genMockFn();
});

module.exports = mockActions;