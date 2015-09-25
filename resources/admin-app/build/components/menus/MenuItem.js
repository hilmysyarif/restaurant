'use strict';

var MenuItem = React.createClass({
	displayName: 'MenuItem',

	onDelete: function onDelete(e) {
		MenuItemActions.deleteMenuItem(this.props.item.id);
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'menu-item list-group-item' },
			React.createElement(
				'h3',
				null,
				this.props.item.title
			),
			React.createElement(
				'div',
				{ className: 'menu-item__price' },
				React.createElement(
					'strong',
					null,
					'Price: '
				),
				' $',
				this.props.item.price
			),
			React.createElement(
				'div',
				{ className: 'menu-item__description' },
				React.createElement(
					'strong',
					null,
					'Description: '
				),
				' ',
				this.props.item.description
			),
			React.createElement(
				'button',
				{ className: 'btn btn-default', onClick: this.onDelete },
				'Delete this menu item'
			)
		);
	}
});