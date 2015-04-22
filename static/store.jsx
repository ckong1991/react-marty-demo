var Marty = require('marty');
var MapConstants = require('./constants.jsx');

//Default data - mocks an external API call
var allCoordinates = {
	'First': [
		{ 'lat': -34.397, 'lng': 150.644},
		{ 'lat': -50.397, 'lng': 150.644},
		{ 'lat': -25.397, 'lng': 150.644},
	],
	'Second': [
		{ 'lat': -34.397, 'lng': 155.644},
		{ 'lat': -37.397, 'lng': 155.644},
		{ 'lat': -39.397, 'lng': 155.644},
	],
	'Third': [
		{ 'lat': -34.397, 'lng': 145.644},
		{ 'lat': -37.397, 'lng': 145.644},
		{ 'lat': -39.397, 'lng': 145.644},
	]
}


var Store = Marty.createStore({
	id: 'Main',
	handlers: {
		filterMap: MapConstants.FILTER_MAP,
		clearMap: MapConstants.CLEAR_MAP,
		addMarker: MapConstants.ADD_MARKER
	},

	getCoordinates: function() {
		console.log(this.state.coordinates);
		return this.state.coordinates;
	},

	shouldDeleteMarkers: function() {
		return this.state.deleteMarkers;
	},

	getInitialState: function() {
		return {
			coordinates: null,
			deleteMarkers: true
		}
	},

	filterMap: function(key) {
		//Call external database with new data - mocked for now
		this.state.coordinates = allCoordinates[key]
		this.state.deleteMarkers = true;
		this.hasChanged();
	},

	clearMap: function() {
		this.state.coordinates = [];
		this.state.deleteMarkers = true;
		this.hasChanged();
	},

	//generates a random coordinate
	addMarker: function() {
		var latCenter = -35;
		var lngCenter = 150;
		var newLat = Math.random() * 11 + latCenter;
		var newLng = Math.random() * 11 + lngCenter;
		this.state.coordinates = [{
			lat: newLat,
			lng: newLng
		}];
		this.state.deleteMarkers = false;
		this.hasChanged();
	}

})

module.exports = Store
