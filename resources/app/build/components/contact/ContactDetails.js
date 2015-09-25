'use strict';

var ContactDetails = React.createClass({
	displayName: 'ContactDetails',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'contact-details-wrapper' },
			React.createElement(
				'div',
				{ className: 'content' },
				React.createElement(
					'h2',
					{ className: 'title-block' },
					'Contact Details'
				),
				React.createElement(
					'div',
					{ className: 'contact-details' },
					React.createElement(
						'div',
						{ className: 'contact-details__group' },
						React.createElement(
							'div',
							{ className: 'contact-details__label' },
							'Phone: '
						),
						React.createElement(
							'div',
							{ className: 'contact-details__text' },
							this.props.details.phone
						)
					),
					React.createElement(
						'div',
						{ className: 'contact-details__group' },
						React.createElement(
							'div',
							{ className: 'contact-details__label' },
							'Email: '
						),
						React.createElement(
							'div',
							{ className: 'contact-details__text' },
							this.props.details.email
						)
					),
					React.createElement(
						'div',
						{ className: 'contact-details__group' },
						React.createElement(
							'div',
							{ className: 'contact-details__label' },
							'Address: '
						),
						React.createElement(
							'div',
							{ className: 'contact-details__text' },
							this.props.details.address.line1,
							React.createElement('br', null),
							this.props.details.address.line2,
							React.createElement('br', null),
							this.props.details.address.line3,
							React.createElement('br', null),
							this.props.details.address.line4
						)
					)
				)
			)
		);
	}
});