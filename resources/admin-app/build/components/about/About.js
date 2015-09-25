'use strict';

var About = React.createClass({
	displayName: 'About',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'about container' },
			React.createElement(GalleryInput, null)
		);
	}
});