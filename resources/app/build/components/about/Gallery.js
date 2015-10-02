'use strict';

var Gallery = React.createClass({
	displayName: 'Gallery',

	getInitialState: function getInitialState() {
		return {
			gallery: AboutStore.getGallery()
		};
	},
	componentDidMount: function componentDidMount() {
		AboutStore.bind('change', this.onChange);
		AboutActions.loadGallery();
	},
	componentWillUnmount: function componentWillUnmount() {
		AboutStore.unbind('change', this.onChange);
	},
	onChange: function onChange() {
		this.setState({
			gallery: AboutStore.getGallery()
		});
	},
	render: function render() {
		var items = this.state.gallery.map(function (value, index) {
			return React.createElement(GalleryItem, { image: value, key: index });
		});
		return React.createElement(
			'section',
			{ className: 'gallery' },
			React.createElement(
				'h2',
				{ className: 'title-block' },
				'Gallery'
			),
			React.createElement(
				'div',
				{ className: 'gallery-items' },
				items
			)
		);
	}
});