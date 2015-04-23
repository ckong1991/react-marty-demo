var React = require('react')
var MapActions = require('./actions.jsx');

//Component that generates the select dropdown
var DropdownMenu = React.createClass({
	getInitialState: function() {
		return {
			selectValue: 'Default'
		}
	},

	updateValue: function(event) {
		var newSelectValue = event.target.value;
		this.setState({
			selectValue: newSelectValue
		});
		MapActions.filterMap(newSelectValue);
	},

	clearMap: function(event) {
		this.setState({
			selectValue: 'Default'
		});
		MapActions.clearMap();
	},

	addMarker: function(event) {
		MapActions.addMarker();
	},

	render: function() {

		return (
			<div>
				<select className='filter-options' value={this.state.selectValue} onChange={this.updateValue}>
					<option value='Default'>None</option>
			    <option value='First'>First</option>
			    <option value='Second'>Second</option>
			    <option value='Third'>Third</option>
				</select>
				<button type='button' onClick={this.clearMap}>Clear Map</button>
				<button type='button' onClick={this.addMarker}>Add Random Marker</button>
			</div>
		)
	},


});


module.exports = DropdownMenu