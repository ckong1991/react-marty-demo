var React = require('react');
var Marty = require('marty');
var Store = require('./store.jsx');
var MapActions = require('./actions.jsx');
var Map = require('./Map.jsx');
var FormFilter = require('./Form.jsx');

window.Marty = require('marty');

var App = React.createClass({

	render: function() {
		return (
			<div>
				<Map coordinates={this.props.coordinates} deleteMarkers={this.props.deleteMarkers}/>
				<FormFilter />
			</div>
		)
	}

});

//The createContainer method wraps the top level component (App) and listens to the Store. When any state changes in the store, the fetch is called
//and getter methods are called on the store. For example, Store.getCoordinates() retrieves the coordinates frop the Store state, and are passed in 
//the App component as props, called coordinates as well. 

var AppContainer = Marty.createContainer(App, {
	listenTo: Store,
	fetch: {
		coordinates: function () {
			return Store.getCoordinates();
		},

		deleteMarkers: function () {
			return Store.shouldDeleteMarkers();
		}
	}
});

React.render(<AppContainer />, document.getElementById('content'));