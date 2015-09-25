'use strict';

var Menus = React.createClass({
	displayName: 'Menus',

	getInitialState: function getInitialState() {
		return {
			currentMenus: [],
			newMenu: '',
			menuDescription: '',
			menuAdded: false,
			menuAddError: false
		};
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'container' },
			React.createElement(MenusListings, null),
			React.createElement(AddMenu, null)
		);
	}
});