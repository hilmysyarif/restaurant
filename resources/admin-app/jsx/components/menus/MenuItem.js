var MenuItem = React.createClass({
	onDelete: function(e) {
		MenuItemActions.deleteMenuItem(this.props.item.id);
	},
	render: function() {
		return (
			<div className='menu-item list-group-item'>
				<h3>{this.props.item.title}</h3>
				<div className='menu-item__price'>
					<strong>Price: </strong> ${this.props.item.price}
				</div>
				<div className='menu-item__description'>
					<strong>Description: </strong> {this.props.item.description}
				</div>
				<button className='btn btn-default' onClick={this.onDelete}>Delete this menu item</button>
			</div>
		)
	}
});