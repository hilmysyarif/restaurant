var AddMenu = React.createClass({
	getInitialState: function() {
		return {
			addMenu: MenuStore.getAddMenuForm()
		};
	},
	componentDidMount: function() {
		MenuStore.bind('change', this.onChange);
	},
	componentWillUnmount: function() {
		MenuStore.unbind('change', this.onChange);
	},
	onChange: function() {
		this.setState({addMenu: MenuStore.getAddMenuForm()});
	},
	newMenuChange: function(e) {
		MenuActions.changeAddMenuTitle(e.target.value);
	},
	menuDescriptionChange: function(e) {
		MenuActions.changeAddMenuDescription(e.target.value);
	},
	onSubmit: function(e) {
		e.preventDefault();
		MenuActions.addMenu();
	},
	render: function() {
		return (
			<div className='panel panel-default'>
				<h2 className='panel-heading'>Add New Menu</h2>
				<form noValidate onSubmit={this.onSubmit} className='panel-body'>
					<div className='form-group'>
						<label htmlFor='new-menu' className='control-label'> New Menu Title: </label>
						<input 
							type='text' 
							id='new-menu' 
							className='form-control' 
							onChange={this.newMenuChange} 
							value={this.state.addMenu.title} 
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='new-menu-description' className='control-label'> New Menu Description: </label>
						<input 
							type='text' 
							id='new-menu-description' 
							className='form-control' 
							onChange={this.menuDescriptionChange} 
							value={this.state.addMenu.description} 
						/>
					</div>
					<input type='submit' className='btn btn-default' disabled={this.state.addMenu.title.length === 0} value='Add New Menu' />
					<div className='response-messages'>
						<span className={this.state.addMenu.menuAdded ? 'text-success' : 'hidden'}>Menu was added!</span>
						<span className={this.state.addMenu.menuAddedError ? 'text-danger' : 'hidden'}>There was an error adding the menu. Please make sure the menu name is unique.</span>
					</div>
				</form>
			</div>
		)
	}
});