'use strict';

var ContactForm = React.createClass({
	displayName: 'ContactForm',

	getInitialState: function getInitialState() {
		return ContactStore.initForm();
	},
	componentDidMount: function componentDidMount() {
		ContactStore.bind('change', this.onChange);
	},
	componentWillUnmount: function componentWillUnmount() {
		ContactStore.unbind('change', this.onChange);
	},
	onChange: function onChange() {
		this.setState(ContactStore.getContactForm());
	},
	onBlur: function onBlur(e) {
		ContactActions.blurField(e.target.id);
	},
	changeName: function changeName(e) {
		ContactActions.changeName(e.target.value);
	},
	changeEmail: function changeEmail(e) {
		ContactActions.changeEmail(e.target.value);
	},
	changePhone: function changePhone(e) {
		ContactActions.changePhone(e.target.value);
	},
	changeSubject: function changeSubject(e) {
		ContactActions.changeSubject(e.target.value);
	},
	changeMessage: function changeMessage(e) {
		ContactActions.changeMessage(e.target.value);
	},
	onSubmit: function onSubmit(e) {
		e.preventDefault();
		ContactActions.sendForm();
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'contact-form-wrapper', onSubmit: this.onSubmit },
			React.createElement(
				'div',
				{ className: 'content' },
				React.createElement(
					'h1',
					{ className: 'title-block' },
					'Contact Us'
				),
				React.createElement(
					'div',
					{ className: 'contact-reservation' },
					'Give us a call or leave a message here if you want to make a reservation or need to contact us regarding any other matters. We will try to get back to you ASAP.'
				),
				React.createElement(
					'form',
					{ className: 'contact-form', noValidate: true },
					React.createElement(
						'div',
						{ className: (!this.state.name.valid && this.state.name.dirty ? 'has-error ' : '') + 'form-group' },
						React.createElement(
							'label',
							{ htmlFor: 'name', className: 'control-label' },
							'Name:* '
						),
						React.createElement('input', {
							type: 'text',
							className: 'form-control',
							id: 'name',
							onBlur: this.onBlur,
							value: this.state.name.value,
							onChange: this.changeName
						})
					),
					React.createElement(
						'div',
						{ className: (!this.state.email.valid && this.state.email.dirty ? 'has-error ' : '') + 'form-group' },
						React.createElement(
							'label',
							{ htmlFor: 'email', className: 'control-label' },
							'Email:* '
						),
						React.createElement('input', {
							type: 'email',
							className: 'form-control',
							id: 'email',
							value: this.state.email.value,
							onBlur: this.onBlur,
							onChange: this.changeEmail
						})
					),
					React.createElement(
						'div',
						{ className: (!this.state.phone.valid && this.state.phone.dirty ? 'has-error ' : '') + 'form-group' },
						React.createElement(
							'label',
							{ htmlFor: 'phone', className: 'control-label' },
							'Phone Number:* '
						),
						React.createElement('input', {
							type: 'text',
							className: 'form-control',
							id: 'phone',
							value: this.state.phone.value,
							onBlur: this.onBlur,
							onChange: this.changePhone
						})
					),
					React.createElement(
						'div',
						{ className: (!this.state.subject.valid && this.state.subject.dirty ? 'has-error ' : '') + 'form-group' },
						React.createElement(
							'label',
							{ htmlFor: 'subject', className: 'control-label' },
							'Subject: '
						),
						React.createElement('input', {
							type: 'text',
							className: 'form-control',
							id: 'subject',
							value: this.state.subject.value,
							onBlur: this.onBlur,
							onChange: this.changeSubject
						})
					),
					React.createElement(
						'div',
						{ className: (!this.state.message.valid && this.state.message.dirty ? 'has-error ' : '') + 'form-group' },
						React.createElement(
							'label',
							{ htmlFor: 'message', className: 'control-label' },
							'Your Message:* '
						),
						React.createElement('textarea', {
							type: 'text',
							rows: '3',
							className: 'form-control',
							id: 'message',
							value: this.state.message.value,
							onBlur: this.onBlur,
							onChange: this.changeMessage
						})
					),
					React.createElement('input', {
						className: 'btn',
						disabled: !this.state.valid || this.state.button.disabled,
						value: this.state.button.value,
						type: 'submit'
					}),
					React.createElement(
						'div',
						{ className: 'contact-form__response' },
						React.createElement(
							'span',
							{ className: this.state.response.success && this.state.response.sent ? 'text-success' : 'response__hide' },
							'Your message was successfully sent!'
						),
						React.createElement(
							'span',
							{ className: !this.state.response.success && this.state.response.sent ? 'text-warning' : 'response__hide' },
							'There was an error sending your email. Please try phoning or emailing us directly.'
						)
					)
				)
			)
		);
	}
});