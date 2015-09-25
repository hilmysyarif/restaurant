'use strict';

var Header = React.createClass({
	displayName: 'Header',

	render: function render() {
		return React.createElement(
			'nav',
			{ className: 'navbar navbar-default col-xs-12' },
			React.createElement(
				'ul',
				{ className: 'nav navbar-nav col-xs-12 row' },
				React.createElement(
					'li',
					{ className: 'col-xs-12 col-sm-3 col-md-2' },
					React.createElement(
						'a',
						{ href: '/', className: 'navbar-brand' },
						'Back to site'
					)
				),
				React.createElement(
					'li',
					null,
					React.createElement(
						Link,
						{ to: 'home' },
						'Home'
					)
				),
				React.createElement(
					'li',
					null,
					React.createElement(
						Link,
						{ to: 'about' },
						'About'
					)
				),
				React.createElement(
					'li',
					null,
					React.createElement(
						Link,
						{ to: 'menus' },
						'Menus'
					)
				),
				React.createElement(
					'li',
					null,
					React.createElement(
						Link,
						{ to: 'contact' },
						'Contact'
					)
				),
				React.createElement(
					'li',
					null,
					React.createElement(
						'a',
						{ href: '/auth/logout' },
						'Logout'
					)
				)
			)
		);
	}
});