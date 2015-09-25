'use strict';

var Menu = React.createClass({
	displayName: 'Menu',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'menu container' },
			React.createElement(EditMenu, { menuSlug: this.props.params.menuSlug }),
			React.createElement(AddMenuItem, { menuSlug: this.props.params.menuSlug }),
			React.createElement(MenuItems, { menuSlug: this.props.params.menuSlug })
		);
	}
});