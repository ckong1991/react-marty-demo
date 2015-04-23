var __path__ = '../Form.jsx';

// REFS:
// mocks aren't stubs, http://martinfowler.com/articles/mocksArentStubs.html


// mark as not mocked and mocked dependencies
jest.dontMock(__path__);

// test dependencies
var React = require('react/addons')
var TestUtils = React.addons.TestUtils;
var Form = require(__path__);

describe('Form', function() {
  it('has a select el', function() {
    var testForm = TestUtils.renderIntoDocument(<Form />);
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();
    expect(selectEl).toBeDefined();
  });

  it('has a default value', function() {
    var testForm = TestUtils.renderIntoDocument(<Form />);
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();
    expect(selectEl.value).toEqual('Default');
  });

  it('should hae 4 children', function() {
    var testForm = TestUtils.renderIntoDocument(<Form />);
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();

    expect(selectEl.children.length).toEqual(4);
  });

});

describe('Form with Flux', function() {
  var testForm;
  var actions = require('../actions.jsx');

  beforeEach(function() {
    testForm = TestUtils.renderIntoDocument(<Form />);

    // NOTE: Mock should be created before interaction,
    // so that interactions with mock can be recorded.
    // This creates a reference to the mocked store and
    // expects it to be clean
    actions.filterMap.mockClear();
    expect(actions.filterMap).not.toBeCalled();
  });


  // Test which depend on store
  it('changes value when selected', function() {
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();
    var lastSelectOption = selectEl.children[3];

    // Trigger change event on select el and check that call to store was made
    TestUtils.Simulate.change(selectEl, {target: {value: lastSelectOption.value}});

    // WARNING:
    // This test is actually not a good thing, since the state should just come from the store
    // and not set state itself.
    expect(selectEl.value).toEqual('Third');

    // BETTER:
    // Check that the anticipated action is called with a resonable arg
    expect(actions.filterMap).toBeCalledWith('Third');
  });


  // Ensure mocking is not being conflated between tests
  it('changes value when selected', function() {
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();
    var lastSelectOption = selectEl.children[3];

    expect(actions.filterMap).not.toBeCalled();
    TestUtils.Simulate.change(selectEl, {target: {value: lastSelectOption.value}});
    expect(actions.filterMap).toBeCalledWith('Third');
  });

});