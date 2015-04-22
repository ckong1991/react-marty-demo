var Marty = require('marty');
var MapConstants = require('./constants.jsx');

var MapActions = Marty.createActionCreators({
	id: 'MapActions',

	filterMap: function(key) {
		this.dispatch(MapConstants.FILTER_MAP, key);
	},

	clearMap: function() {
		this.dispatch(MapConstants.CLEAR_MAP);
	},

	addMarker: function() {
		this.dispatch(MapConstants.ADD_MARKER);
	}
});

module.exports = MapActions;