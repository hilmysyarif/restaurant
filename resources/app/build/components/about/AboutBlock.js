'use strict';

var AboutBlock = React.createClass({
	displayName: 'AboutBlock',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'about-block' },
			React.createElement(
				'h2',
				{ className: 'title-block' },
				this.props.title
			),
			React.createElement('div', { className: 'about-block__text', dangerouslySetInnerHTML: { __html: this.props.text } })
		);
	}
});