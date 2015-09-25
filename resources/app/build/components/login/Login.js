'use strict';

var Login = React.createClass({
	displayName: 'Login',

	getInitialState: function getInitialState() {
		return LoginStore.getLoginForm();
	},
	componentDidMount: function componentDidMount() {
		LoginStore.bind('change', this.onChange);
	},
	componentWillUnmount: function componentWillUnmount() {
		LoginStore.unbind('change', this.onChange);
	},
	onChange: function onChange() {
		this.setState(LoginStore.getLoginForm());
	},
	changeEmail: function changeEmail(e) {
		LoginActions.changeLoginEmail(e.target.value);
	},
	changePassword: function changePassword(e) {
		LoginActions.changePassword(e.target.value);
	},
	onSubmit: function onSubmit(e) {
		e.preventDefault();
		LoginActions.login();
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'login' },
			React.createElement(
				'div',
				{ className: 'panel panel-default' },
				React.createElement(
					'h1',
					{ className: 'panel-heading' },
					'Login'
				),
				React.createElement(
					'form',
					{ noValidate: true, className: 'panel-body', onSubmit: this.onSubmit },
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ htmlFor: 'email', className: 'control-label' },
							'Email: '
						),
						React.createElement('input', {
							type: 'email',
							id: 'email',
							className: 'form-control',
							value: this.state.email,
							onChange: this.changeEmail
						})
					),
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ htmlFor: 'password', className: 'control-label' },
							'Password: '
						),
						React.createElement('input', {
							type: 'password',
							id: 'password',
							className: 'form-control',
							value: this.state.password,
							onChange: this.changePassword
						})
					),
					React.createElement('input', { type: 'submit', value: 'Login', className: 'btn btn-default' }),
					React.createElement(
						'div',
						{ className: 'response-messages' },
						React.createElement(
							'span',
							{ className: this.state.failed ? 'text-danger' : 'hidden' },
							'Incorrect login details. Message joshua.yp.huang@gmail.com for a demo login'
						)
					)
				)
			)
		);
	}
});