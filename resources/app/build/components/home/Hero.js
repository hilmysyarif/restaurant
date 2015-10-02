'use strict';

var Hero = React.createClass({
	displayName: 'Hero',

	render: function render() {
		return React.createElement(
			'section',
			{ className: 'hero' },
			React.createElement(
				'h1',
				{ className: 'hero__text' },
				'Welcome to Takapuna Beach Cafe'
			)
		);
	}
});