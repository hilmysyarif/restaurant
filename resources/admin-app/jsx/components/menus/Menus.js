var Menus = React.createClass({
	getInitialState: function() {
		return {
			currentMenus: [],
			newMenu: '',
			menuDescription: '',
			menuAdded: false,
			menuAddError: false
		};
	},
	render: function() {
		return (
			<div className='container'>
				<MenusListings />
				<AddMenu />
			</div>
		)
	}
});