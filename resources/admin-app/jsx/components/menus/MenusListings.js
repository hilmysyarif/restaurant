var MenusListings = React.createClass({
	getInitialState: function() {
		return {
			currentMenus: MenuStore.getMenus()
		};
	},
	componentDidMount: function() {
		MenuStore.bind('change', this.onChange);
		MenuActions.loadMenus();
	},
	componentWillUnmount: function() {
		MenuStore.unbind('change', this.onChange);
	},
	onChange: function() {
		this.setState({
			currentMenus: MenuStore.getMenus()
		});
	},
	formatMenus: function(menus) {
		return menus.map(function(menu) {
			return <MenusListing key={menu.id} menu={menu} />
		});
	},
	render: function() {
		var menus = this.formatMenus(this.state.currentMenus);

		return (
			<div className='panel panel-default'>
				<h2 className='panel-heading'>Current Menus</h2>
				<ul className='list-group'>
					{menus}
				</ul>
			</div>
		)
	}
});
