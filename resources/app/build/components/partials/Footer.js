'use strict';

var Footer = React.createClass({
	displayName: 'Footer',

	render: function render() {
		return React.createElement(
			'footer',
			{ className: 'main-footer' },
			'© 2015 Joshua Huang. All Rights Reserved.'
		);
	}
});