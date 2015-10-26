'use strict';

var About = React.createClass({
	displayName: 'About',

	getInitialState: function getInitialState() {
		return {
			aboutUs: AboutStore.getAboutUs(),
			philosophy: AboutStore.getPhilosophy()
		};
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'about' },
			React.createElement(
				'section',
				{ className: 'about-content' },
				React.createElement(AboutBlock, { title: this.state.aboutUs.title, paragraphs: this.state.aboutUs.paragraphs }),
				React.createElement(AboutBlock, { title: this.state.philosophy.title, paragraphs: this.state.philosophy.paragraphs })
			),
			React.createElement(Gallery, null)
		);
	}
});