'use strict';

var MenuNav = React.createClass({
	displayName: 'MenuNav',

	toDashed: function toDashed(str) {
		return str.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
	},
	formatLinks: function formatLinks() {
		var links = this.props.menus.map((function (menu) {
			return React.createElement(
				'li',
				{ key: menu.id },
				React.createElement(
					Link,
					{ to: '/menu/' + menu.slug, className: 'menu-nav__link' },
					menu.title
				)
			);
		}).bind(this));

		return links;
	},
	render: function render() {

		var navLinks = this.formatLinks();

		return React.createElement(
			'nav',
			{ className: 'menu-nav' },
			React.createElement(
				'h2',
				{ className: 'menu-nav__header' },
				'Menus'
			),
			React.createElement(
				'ul',
				{ className: 'menu-nav__list' },
				navLinks
			)
		);
	}
});