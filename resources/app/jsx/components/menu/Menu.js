var Menu = React.createClass({
	getInitialState: function() {
		return {
			menus: MenuStore.getMenus(),
			menu: MenuStore.getMenu()
		}
	},
	componentDidMount: function() {
		MenuStore.bind('change', this.onChange);
		MenuActions.loadMenus();
		MenuActions.loadMenu(this.props.params.menu);
	},
	componentWillUnmount: function() {
		MenuStore.unbind('change', this.onChange);
	},
	componentDidUpdate: function() {
		MenuActions.loadMenu(this.props.params.menu);
	},
	onChange: function() {
		this.setState({
			menus: MenuStore.getMenus(),
			menu: MenuStore.getMenu()
		});
	},
	render: function() {
		return (
			<div className='menu'>
				<MenuNav menus={this.state.menus} menuSlug={this.props.params.menu} />
				<MenuSection menu={this.state.menu} />
			</div>
		)
	}
});