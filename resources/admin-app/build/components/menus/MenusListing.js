'use strict';

var MenusListing = React.createClass({
	displayName: 'MenusListing',

	onDelete: function onDelete(id, event) {
		MenuActions.deleteMenu(id);
	},
	render: function render() {
		return React.createElement(
			'li',
			{ className: 'menu-listing list-group-item' },
			React.createElement(
				'div',
				{ className: 'menu__title' },
				React.createElement(
					'strong',
					null,
					this.props.menu.title
				)
			),
			React.createElement(
				'div',
				{ className: 'menu__description' },
				this.props.menu.description
			),
			React.createElement(
				Link,
				{ to: "/admin/menus/" + this.props.menu.slug, className: 'btn btn-default' },
				'Edit this menu'
			),
			React.createElement(
				'button',
				{ className: 'btn btn-default', onClick: this.onDelete.bind(this, this.props.menu.id) },
				'Delete this menu'
			)
		);
	}
});