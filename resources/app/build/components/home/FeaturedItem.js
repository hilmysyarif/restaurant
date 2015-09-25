'use strict';

var FeaturedItem = React.createClass({
	displayName: 'FeaturedItem',

	formatSrcSet: function formatSrcSet(img) {
		return img.size_600 + ' 600w, ' + img.size_1200 + ' 1200w, ' + img.size_2000 + ' 2000w, ' + img.original;
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'featured__item' },
			React.createElement(
				Link,
				{ to: this.props.url },
				React.createElement(
					'div',
					{ className: 'featured__img-wrapper' },
					React.createElement('img', { id: this.props.id, srcSet: this.formatSrcSet(this.props.img), sizes: this.props.sizes, alt: "Background Image for " + this.props.text })
				),
				React.createElement(
					'h3',
					{ className: 'featured__text' },
					this.props.text
				)
			)
		);
	}
});