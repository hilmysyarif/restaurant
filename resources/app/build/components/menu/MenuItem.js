'use strict';

var MenuItem = React.createClass({
	displayName: 'MenuItem',

	render: function render() {
		return React.createElement(
			'li',
			{ className: 'menu__item' },
			React.createElement(
				'h2',
				{ className: 'item__title' },
				this.props.item.title
			),
			React.createElement(
				'span',
				{ className: 'item__price' },
				'$',
				this.props.item.price
			),
			React.createElement(
				'p',
				{ className: 'item__description' },
				this.props.item.description
			)
		);
	}
});