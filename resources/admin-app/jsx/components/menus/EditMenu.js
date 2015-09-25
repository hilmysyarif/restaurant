var EditMenu = React.createClass({
	getInitialState: function() {
		return MenuStore.getEditMenuForm();
	},
	componentDidMount: function() {
		MenuStore.bind('change', this.onChange);
		MenuActions.loadEditMenuForm(this.props.menuSlug);
	},
	componentWillUnmount: function() {
		MenuStore.unbind('change', this.onChange);
	},
	onChange: function() {
		this.setState(MenuStore.getEditMenuForm());
	},
	changeTitle: function(e) {
		MenuActions.changeEditMenuTitle(e.target.value);
	},
	changeDescription: function(e) {
		MenuActions.changeEditMenuDescription(e.target.value);
	},
	onSubmit: function(event) {
		event.preventDefault();
		MenuActions.submitEditForm();
	},
	render: function() {
		return (
			<div className='edit-menu panel panel-default'>
				<h2 className='panel-heading'>Edit Menu</h2>
				<form noValidate onSubmit={this.onSubmit} className='panel-body'>
					<div className='form-group'>
						<label htmlFor='menu-title'>Menu Title: </label>
						<input 
							type='text' 
							className='form-control' 
							id='menu-title' 
							onChange={this.changeTitle}
							value={this.state.title}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='menu-description'>Menu Description: </label>
						<input 
							type='text' 
							className='form-control' 
							id='menu-description' 
							onChange={this.changeDescription}
							value={this.state.description}
						/>
					</div>
					<input type='submit' className='btn btn-default' value='Save changes' />
				</form>
			</div>
		)
	}
});