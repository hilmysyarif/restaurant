var Login = React.createClass({
	getInitialState: function() {
		return LoginStore.getLoginForm();
	},
	componentDidMount: function() {
		LoginStore.bind('change', this.onChange);
	},
	componentWillUnmount: function() {
		LoginStore.unbind('change', this.onChange);
	},
	onChange: function() {
		this.setState(LoginStore.getLoginForm());
	},
	changeEmail: function(e) {
		LoginActions.changeLoginEmail(e.target.value);
	},
	changePassword: function(e) {
		LoginActions.changePassword(e.target.value);
	},
	onSubmit: function(e) {
		e.preventDefault();
		LoginActions.login();
	},
	render: function() {
		return (
			<div className='login'>
				<div className='panel panel-default'>
					<h1 className='panel-heading'>Login</h1>
					<form noValidate className='panel-body' onSubmit={this.onSubmit}>
						<div className='form-group'>
							<label htmlFor='email' className='control-label'>Email: </label>
							<input 
								type='email' 
								id='email' 
								className='form-control'
								value={this.state.email}
								onChange={this.changeEmail}
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='password' className='control-label'>Password: </label>
							<input 
								type='password' 
								id='password' 
								className='form-control' 
								value={this.state.password}
								onChange={this.changePassword}
							/>
						</div>
						<input type='submit' value='Login' className='btn btn-default' />
						<div className='response-messages'>
							<span className={this.state.failed ? 'text-danger' : 'hidden'}>Incorrect login details. Message joshua.yp.huang@gmail.com for a demo login</span>
						</div>
					</form>
				</div>
			</div>
		)
	}
});