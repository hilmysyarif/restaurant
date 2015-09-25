var MenusListing = React.createClass({
	onDelete: function(id, event) {
		MenuActions.deleteMenu(id);
	},
	render: function() {
		return (
			<li className='menu-listing list-group-item'>
				<div className='menu__title'>
					<strong>{this.props.menu.title}</strong>
				</div>
				<div className='menu__description'>
					{this.props.menu.description}
				</div>
				<Link to={"/admin/menus/" + this.props.menu.slug} className='btn btn-default'>Edit this menu</Link>
				<button className='btn btn-default' onClick={this.onDelete.bind(this, this.props.menu.id)}>Delete this menu</button>
			</li>
		)
	}
});