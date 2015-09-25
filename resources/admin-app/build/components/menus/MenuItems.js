'use strict';

var MenuItems = React.createClass({
	displayName: 'MenuItems',

	getInitialState: function getInitialState() {
		return {
			menuItems: MenuItemStore.getMenuItems()
		};
	},
	componentDidMount: function componentDidMount() {
		MenuItemStore.bind('change', this.onChange);
	},
	componentWillUnmount: function componentWillUnmount() {
		MenuItemStore.unbind('change', this.onChange);
	},
	onChange: function onChange() {
		this.setState({
			menuItems: MenuItemStore.getMenuItems()
		});
	},
	formatMenuItems: function formatMenuItems(menuItems) {
		return menuItems.map(function (menuItem) {
			return React.createElement(MenuItem, { item: menuItem, key: menuItem.id });
		});
	},
	render: function render() {
		var menuItems = this.formatMenuItems(this.state.menuItems);
		return React.createElement(
			'div',
			{ className: 'menu-items panel panel-default' },
			React.createElement(
				'h2',
				{ className: 'panel-heading' },
				'Menu Items'
			),
			menuItems
		);
	}
});