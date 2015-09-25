'use strict';

var Home = React.createClass({
	displayName: 'Home',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'home' },
			React.createElement(Hero, null),
			React.createElement(Featured, null)
		);
	}
});