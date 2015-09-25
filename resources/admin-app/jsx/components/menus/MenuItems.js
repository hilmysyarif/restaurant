var MenuItems = React.createClass({
	getInitialState: function() {
		return {
			menuItems: MenuItemStore.getMenuItems()
		}
	},
	componentDidMount: function() {
		MenuItemStore.bind('change', this.onChange);
	},
	componentWillUnmount: function() {
		MenuItemStore.unbind('change', this.onChange);
	},
	onChange: function() {
		this.setState({
			menuItems: MenuItemStore.getMenuItems()
		});
	},
	formatMenuItems: function(menuItems) {
		return menuItems.map(function(menuItem) {
			return <MenuItem item={menuItem} key={menuItem.id} />;
		});
	},
	render: function() {
		var menuItems = this.formatMenuItems(this.state.menuItems);
		return (
			<div className='menu-items panel panel-default'>
				<h2 className='panel-heading'>Menu Items</h2>
				{menuItems}
			</div>
		)
	}
});