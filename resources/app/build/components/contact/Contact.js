'use strict';

var Contact = React.createClass({
	displayName: 'Contact',

	getInitialState: function getInitialState() {
		return ContactStore.getContactDetails();
	},
	componentDidMount: function componentDidMount() {
		ContactStore.bind('change', this.onChange);
		ContactActions.loadContactDetails();
	},
	componentWillUnmount: function componentWillUnmount() {
		ContactStore.unbind('change', this.onChange);
	},
	onChange: function onChange() {
		this.setState(ContactStore.getContactDetails());
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'contact' },
			React.createElement(
				'div',
				{ className: 'contact-main' },
				React.createElement(ContactForm, null),
				React.createElement(
					'section',
					{ className: 'contact-details-hours' },
					React.createElement(ContactDetails, { details: this.state }),
					React.createElement(OpeningHours, { hours: this.state.hours })
				)
			),
			React.createElement(GoogleMap, null)
		);
	}
});