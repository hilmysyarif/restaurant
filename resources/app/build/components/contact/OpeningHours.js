'use strict';

var OpeningHours = React.createClass({
	displayName: 'OpeningHours',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'opening-hours-wrapper' },
			React.createElement(
				'article',
				{ className: 'content' },
				React.createElement(
					'h2',
					{ className: 'title-block' },
					'Opening Hours'
				),
				React.createElement(
					'div',
					{ className: 'opening-hours' },
					React.createElement(
						'div',
						{ className: 'opening-hours__group' },
						React.createElement(
							'div',
							{ className: 'opening-hours__label' },
							'Monday:'
						),
						React.createElement(
							'div',
							{ className: 'opening-hours__text' },
							this.props.hours.monday
						)
					),
					React.createElement(
						'div',
						{ className: 'opening-hours__group' },
						React.createElement(
							'div',
							{ className: 'opening-hours__label' },
							'Tuesday:'
						),
						React.createElement(
							'div',
							{ className: 'opening-hours__text' },
							this.props.hours.tuesday
						)
					),
					React.createElement(
						'div',
						{ className: 'opening-hours__group' },
						React.createElement(
							'div',
							{ className: 'opening-hours__label' },
							'Wednesday:'
						),
						React.createElement(
							'div',
							{ className: 'opening-hours__text' },
							this.props.hours.wednesday
						)
					),
					React.createElement(
						'div',
						{ className: 'opening-hours__group' },
						React.createElement(
							'div',
							{ className: 'opening-hours__label' },
							'Thursday:'
						),
						React.createElement(
							'div',
							{ className: 'opening-hours__text' },
							this.props.hours.thursday
						)
					),
					React.createElement(
						'div',
						{ className: 'opening-hours__group' },
						React.createElement(
							'div',
							{ className: 'opening-hours__label' },
							'Friday:'
						),
						React.createElement(
							'div',
							{ className: 'opening-hours__text' },
							this.props.hours.friday
						)
					),
					React.createElement(
						'div',
						{ className: 'opening-hours__group' },
						React.createElement(
							'div',
							{ className: 'opening-hours__label' },
							'Saturday:'
						),
						React.createElement(
							'div',
							{ className: 'opening-hours__text' },
							this.props.hours.saturday
						)
					),
					React.createElement(
						'div',
						{ className: 'opening-hours__group' },
						React.createElement(
							'div',
							{ className: 'opening-hours__label' },
							'Sunday:'
						),
						React.createElement(
							'div',
							{ className: 'opening-hours__text' },
							this.props.hours.sunday
						)
					)
				)
			)
		);
	}
});