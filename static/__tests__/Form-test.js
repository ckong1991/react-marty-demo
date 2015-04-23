var __path__ = '../Form.jsx';

// REFS:
// mocks aren't stubs, http://martinfowler.com/articles/mocksArentStubs.html


// NOTE ON REQUIRE
// There is some caching of module.exports, which gets busted for each it() block. If something is
// required before an it block, then it will not be in that cache. Mixin requires both inside and
// outside it() blocks can lead to unpredicable behavior. (IMO React and util libs are an ok exception)
//
// Rule of thumb:
// All requires in or all requires out. All in is slower (more teardown), but more predicable.
//


// mark as not mocked and mocked dependencies
jest.dontMock(__path__);

// test dependencies
var React = require('react/addons')
var TestUtils = React.addons.TestUtils;


describe('Form', function() {
  var testForm;
  var Form;

  beforeEach(function() {
    // all requires for tests should go here
    Form = require(__path__);

    // setup
    testForm = TestUtils.renderIntoDocument(<Form />);
  });

  it('has a select el', function() {
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();
    expect(selectEl).toBeDefined();
  });

  it('has a default value', function() {
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();
    expect(selectEl.value).toEqual('Default');
  });

  it('should hae 4 children', function() {
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();
    expect(selectEl.children.length).toEqual(4);
  });
});

describe('Form with Flux', function() {
  var testForm;
  var actions;

  beforeEach(function() {
    // requires
    var Form = require(__path__);
    actions = require('../actions.jsx');

    // setup
    testForm = TestUtils.renderIntoDocument(<Form />);
  });

  // Test which depend on store
  it('changes value when selected', function() {
    var selectEl = TestUtils.findRenderedDOMComponentWithTag(testForm, 'select').getDOMNode();
    var lastSelectOption = selectEl.children[3];
    expect(actions.filterMap).not.toBeCalled();


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