var AddMenuItem = React.createClass({
	getInitialState: function() {
		return MenuItemStore.getMenuItemForm();
	},
	componentDidMount: function() {
		MenuItemStore.bind('change', this.onChange);
		MenuItemActions.loadMenuItems(this.props.menuSlug);
	},
	componentWillUnmount: function() {
		MenuItemStore.unbind('change', this.onChange);
	},
	onChange: function() {
		this.setState(MenuItemStore.getMenuItemForm());
	},
	changeTitle: function(e) {
		MenuItemActions.changeAddMenuItemTitle(e.target.value);
	},
	changeDescription: function(e) {
		MenuItemActions.changeAddMenuItemDescription(e.target.value);
	},
	changePrice: function(e) {
		MenuItemActions.changeAddMenuItemPrice(e.target.value);
	},
	addMenuItem: function(e) {
		e.preventDefault();
		MenuItemActions.addMenuItem();
	},
	render: function() {
		return (
			<div className='panel panel-default'>
				<h2 className='panel-heading'>Add Menu Item</h2>
				<form noValidate onSubmit={this.addMenuItem} className='panel-body'>
					<div className='form-group'>
						<label className='control-label' htmlFor='menu-item-title'>Item title:</label>
						<input 
							className='form-control' 
							type="text" 
							id="menu-item-title" 
							value={this.state.title}
							onChange={this.changeTitle}
						/>
					</div>
					<div className='form-group'>
						<label className='control-label' htmlFor='menu-item-description'>Item description:</label>
						<input 
							className='form-control' 
							type="text" 
							id="menu-item-description"
							value={this.state.description}
							onChange={this.changeDescription}
						 />
					</div>
					<div className='form-group'>
						<label className='control-label' htmlFor='menu-item-price'>Item price:</label>
						<input 
							className='form-control' 
							type="text" 
							id="menu-item-price" 
							value={this.state.price}
							onChange={this.changePrice}
						/>
					</div>
					<input type='submit' className='btn btn-default' value='Add Item' disabled={this.state.title.length < 1} />
				</form>
			</div>
		)
	}
});