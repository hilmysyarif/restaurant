'use strict';

var AboutBlock = React.createClass({
	displayName: 'AboutBlock',

	render: function render() {
		var paragraphs = this.props.paragraphs.map(function (paragraph) {
			return React.createElement(
				'p',
				null,
				paragraph
			);
		});

		return React.createElement(
			'article',
			{ className: 'about-block' },
			React.createElement(
				'h2',
				{ className: 'title-block' },
				this.props.title
			),
			React.createElement(
				'div',
				{ className: 'about-block__text' },
				paragraphs
			)
		);
	}
});