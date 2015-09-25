'use strict';

var Contact = React.createClass({
	displayName: 'Contact',

	getInitialState: function getInitialState() {
		return ContactStore.getContact();
	},
	componentDidMount: function componentDidMount() {
		ContactStore.bind('change', this.onChange);
		ContactActions.loadContact();
	},
	componentWillUnmount: function componentWillUnmount() {
		ContactStore.unbind('change', this.onChange);
	},
	onChange: function onChange() {
		this.setState(ContactStore.getContact());
	},
	onSubmit: function onSubmit(e) {
		e.preventDefault();
		ContactActions.saveContact();
	},
	changeEmail: function changeEmail(e) {
		ContactActions.changeEmail(e.target.value);
	},
	changePhone: function changePhone(e) {
		ContactActions.changePhone(e.target.value);
	},
	changeAddress1: function changeAddress1(e) {
		ContactActions.changeAddress1(e.target.value);
	},
	changeAddress2: function changeAddress2(e) {
		ContactActions.changeAddress2(e.target.value);
	},
	changeAddress3: function changeAddress3(e) {
		ContactActions.changeAddress3(e.target.value);
	},
	changeAddress4: function changeAddress4(e) {
		ContactActions.changeAddress4(e.target.value);
	},
	changeMonday: function changeMonday(e) {
		ContactActions.changeMonday(e.target.value);
	},
	changeTuesday: function changeTuesday(e) {
		ContactActions.changeTuesday(e.target.value);
	},
	changeWednesday: function changeWednesday(e) {
		ContactActions.changeWednesday(e.target.value);
	},
	changeThursday: function changeThursday(e) {
		ContactActions.changeThursday(e.target.value);
	},
	changeFriday: function changeFriday(e) {
		ContactActions.changeFriday(e.target.value);
	},
	changeSaturday: function changeSaturday(e) {
		ContactActions.changeSaturday(e.target.value);
	},
	changeSunday: function changeSunday(e) {
		ContactActions.changeSunday(e.target.value);
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'container' },
			React.createElement(
				'div',
				{ className: 'contact panel panel-default' },
				React.createElement(
					'h2',
					{ className: 'panel-heading' },
					'Contact Us'
				),
				React.createElement(
					'form',
					{ noValidate: true, className: 'panel-body', onSubmit: this.onSubmit },
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ className: 'control-label', htmlFor: 'email' },
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
							{ className: 'control-label', htmlFor: 'phone' },
							'Phone: '
						),
						React.createElement('input', {
							type: 'text',
							id: 'phone',
							className: 'form-control',
							value: this.state.phone,
							onChange: this.changePhone
						})
					),
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ className: 'control-label', htmlFor: 'address1' },
							'Address: '
						),
						React.createElement('input', {
							type: 'text',
							id: 'address1',
							className: 'form-control',
							value: this.state.address.line1,
							onChange: this.changeAddress1
						}),
						React.createElement('input', {
							type: 'text',
							id: 'address2',
							className: 'form-control',
							value: this.state.address.line2,
							onChange: this.changeAddress2
						}),
						React.createElement('input', {
							type: 'text',
							id: 'address3',
							className: 'form-control',
							value: this.state.address.line3,
							onChange: this.changeAddress3
						}),
						React.createElement('input', {
							type: 'text',
							id: 'address4',
							className: 'form-control',
							value: this.state.address.line4,
							onChange: this.changeAddress4
						})
					),
					React.createElement(
						'h3',
						null,
						'Opening Hours'
					),
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ className: 'control-label', htmlFor: 'monday' },
							'Monday: '
						),
						React.createElement('input', {
							type: 'text',
							id: 'monday',
							className: 'form-control',
							value: this.state.hours.monday,
							onChange: this.changeMonday
						}),
						React.createElement(
							'label',
							{ className: 'control-label', htmlFor: 'tuesday' },
							'Tuesday: '
						),
						React.createElement('input', {
							type: 'text',
							id: 'tuesday',
							className: 'form-control',
							value: this.state.hours.tuesday,
							onChange: this.changeTuesday
						}),
						React.createElement(
							'label',
							{ className: 'control-label', htmlFor: 'wednesday' },
							'Wednesday: '
						),
						React.createElement('input', {
							type: 'text',
							id: 'wednesday',
							className: 'form-control',
							value: this.state.hours.wednesday,
							onChange: this.changeWednesday
						}),
						React.createElement(
							'label',
							{ className: 'control-label', htmlFor: 'thursday' },
							'Thursday: '
						),
						React.createElement('input', {
							type: 'text',
							id: 'thursday',
							className: 'form-control',
							value: this.state.hours.thursday,
							onChange: this.changeThursday
						}),
						React.createElement(
							'label',
							{ className: 'control-label', htmlFor: 'friday' },
							'Friday: '
						),
						React.createElement('input', {
							type: 'text',
							id: 'friday',
							className: 'form-control',
							value: this.state.hours.friday,
							onChange: this.changeFriday
						}),
						React.createElement(
							'label',
							{ className: 'control-label', htmlFor: 'saturday' },
							'Saturday: '
						),
						React.createElement('input', {
							type: 'text',
							id: 'saturday',
							className: 'form-control',
							value: this.state.hours.saturday,
							onChange: this.changeSaturday
						}),
						React.createElement(
							'label',
							{ className: 'control-label', htmlFor: 'sunday' },
							'Sunday: '
						),
						React.createElement('input', {
							type: 'text',
							id: 'sunday',
							className: 'form-control',
							value: this.state.hours.sunday,
							onChange: this.changeSunday
						})
					),
					React.createElement('input', { type: 'submit', value: 'Save changes', className: 'btn btn-default' }),
					React.createElement(
						'div',
						{ className: this.state.response.sent ? 'response-messages' : 'hidden' },
						React.createElement(
							'span',
							{ className: this.state.response.saved ? 'text-success' : 'hidden' },
							'Changes were saved!'
						),
						React.createElement(
							'span',
							{ className: !this.state.response.saved ? 'text-danger' : 'hidden' },
							'Changes were not saved! Try refresh and try again'
						)
					)
				)
			)
		);
	}
});