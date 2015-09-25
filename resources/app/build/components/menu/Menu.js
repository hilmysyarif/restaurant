'use strict';

var Menu = React.createClass({
	displayName: 'Menu',

	getInitialState: function getInitialState() {
		return {
			menus: MenuStore.getMenus(),
			menu: MenuStore.getMenu()
		};
	},
	componentDidMount: function componentDidMount() {
		MenuStore.bind('change', this.onChange);
		MenuActions.loadMenus();
		MenuActions.loadMenu(this.props.params.menu);
	},
	componentWillUnmount: function componentWillUnmount() {
		MenuStore.unbind('change', this.onChange);
	},
	componentDidUpdate: function componentDidUpdate() {
		MenuActions.loadMenu(this.props.params.menu);
	},
	onChange: function onChange() {
		this.setState({
			menus: MenuStore.getMenus(),
			menu: MenuStore.getMenu()
		});
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'menu' },
			React.createElement(MenuNav, { menus: this.state.menus, menuSlug: this.props.params.menu }),
			React.createElement(MenuSection, { menu: this.state.menu })
		);
	}
});