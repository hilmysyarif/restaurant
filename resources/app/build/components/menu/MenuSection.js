'use strict';

var MenuSection = React.createClass({
	displayName: 'MenuSection',

	render: function render() {

		var items = this.props.menu.menu_items.map(function (item) {
			return React.createElement(MenuItem, { item: item, key: item.id });
		});

		return React.createElement(
			'section',
			{ className: 'menu-section' },
			React.createElement(
				'header',
				{ className: 'title-block' },
				React.createElement(
					'h1',
					{ className: 'menu-section__title' },
					this.props.menu.title
				),
				React.createElement(
					'h3',
					{ className: 'menu-section__subtitle' },
					this.props.menu.description
				)
			),
			React.createElement(
				'ul',
				{ className: 'menu__items' },
				items
			)
		);
	}
});