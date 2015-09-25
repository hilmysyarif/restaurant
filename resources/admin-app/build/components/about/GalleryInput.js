'use strict';

var GalleryInput = React.createClass({
	displayName: 'GalleryInput',

	getInitialState: function getInitialState() {
		return {
			gallery: AboutStore.getGallery()
		};
	},
	componentDidMount: function componentDidMount() {
		AboutStore.bind('change', this.onChange);
	},
	componentWillUnmount: function componentWillUnmount() {
		AboutStore.unbind('change', this.onChange);
	},
	onChange: function onChange() {
		this.setState({ gallery: AboutStore.getGallery() });
	},
	fileChange: function fileChange(e) {
		AboutActions.changeFile(e.target.files[0], e.target.id);
	},
	saveGallery: function saveGallery() {
		AboutActions.saveGallery();
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'gallery-input panel panel-default' },
			React.createElement(
				'h2',
				{ className: 'panel-heading' },
				'Gallery Input'
			),
			React.createElement(
				'div',
				{ className: 'panel-body' },
				React.createElement(
					'div',
					{ className: 'gallery-preview' },
					React.createElement(ImageInput, { slug: 'galleryOne', fileChange: this.fileChange, title: 'Gallery Image One' }),
					React.createElement(ImageInput, { slug: 'galleryTwo', fileChange: this.fileChange, title: 'Gallery Image Two' }),
					React.createElement(ImageInput, { slug: 'galleryThree', fileChange: this.fileChange, title: 'Gallery Image Three' }),
					React.createElement(ImageInput, { slug: 'galleryFour', fileChange: this.fileChange, title: 'Gallery Image Four' }),
					React.createElement(ImageInput, { slug: 'galleryFive', fileChange: this.fileChange, title: 'Gallery Image Five' }),
					React.createElement(ImageInput, { slug: 'gallerySix', fileChange: this.fileChange, title: 'Gallery Image Six' }),
					React.createElement(ImageInput, { slug: 'gallerySeven', fileChange: this.fileChange, title: 'Gallery Image Seven' }),
					React.createElement(ImageInput, { slug: 'galleryEight', fileChange: this.fileChange, title: 'Gallery Image Eight' })
				),
				React.createElement(
					'button',
					{ className: 'btn btn-default', onClick: this.saveGallery, disabled: this.state.gallery.length === 0 },
					'Upload Images'
				)
			)
		);
	}
});