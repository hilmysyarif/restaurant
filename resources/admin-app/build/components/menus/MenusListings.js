'use strict';

var MenusListings = React.createClass({
	displayName: 'MenusListings',

	getInitialState: function getInitialState() {
		return {
			currentMenus: MenuStore.getMenus()
		};
	},
	componentDidMount: function componentDidMount() {
		MenuStore.bind('change', this.onChange);
		MenuActions.loadMenus();
	},
	componentWillUnmount: function componentWillUnmount() {
		MenuStore.unbind('change', this.onChange);
	},
	onChange: function onChange() {
		this.setState({
			currentMenus: MenuStore.getMenus()
		});
	},
	formatMenus: function formatMenus(menus) {
		return menus.map(function (menu) {
			return React.createElement(MenusListing, { key: menu.id, menu: menu });
		});
	},
	render: function render() {
		var menus = this.formatMenus(this.state.currentMenus);

		return React.createElement(
			'div',
			{ className: 'panel panel-default' },
			React.createElement(
				'h2',
				{ className: 'panel-heading' },
				'Current Menus'
			),
			React.createElement(
				'ul',
				{ className: 'list-group' },
				menus
			)
		);
	}
});