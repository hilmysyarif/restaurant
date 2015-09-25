'use strict';

var Header = React.createClass({
	displayName: 'Header',

	render: function render() {
		return React.createElement(
			'header',
			{ className: 'main-header' },
			React.createElement(
				'div',
				{ className: 'main-header-wrapper' },
				React.createElement(
					'div',
					{ className: 'logo' },
					React.createElement(
						Link,
						{ to: 'home', className: 'logo__link' },
						'Takapuna Beach',
						React.createElement(
							'small',
							{ className: 'logo__subtitle' },
							'Cafe & Store'
						)
					)
				),
				React.createElement(
					'nav',
					{ className: 'main-nav' },
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							{ className: 'main-nav__link' },
							React.createElement(
								Link,
								{ to: '/menu' },
								React.createElement('span', { className: 'glyphicon glyphicon-cutlery', 'aria-hidden': 'true' }),
								' Menu'
							)
						),
						React.createElement(
							'li',
							{ className: 'main-nav__link' },
							React.createElement(
								Link,
								{ to: 'about' },
								React.createElement('span', { className: 'glyphicon glyphicon-info-sign', 'aria-hidden': 'true' }),
								' About'
							)
						),
						React.createElement(
							'li',
							{ className: 'main-nav__link' },
							React.createElement(
								Link,
								{ to: 'contact' },
								React.createElement('span', { className: 'glyphicon glyphicon-envelope', 'aria-hidden': 'true' }),
								' Contact'
							)
						)
					)
				)
			)
		);
	}
});