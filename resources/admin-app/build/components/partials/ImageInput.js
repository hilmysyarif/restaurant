'use strict';

var ImageInput = React.createClass({
	displayName: 'ImageInput',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'form-group home-inputs' },
			React.createElement(
				'label',
				{ htmlFor: this.props.slug },
				this.props.title,
				' '
			),
			React.createElement(
				'div',
				{ className: 'preview-title' },
				'Current Image: '
			),
			React.createElement('img', { src: '/images/upload/' + this.props.slug + '/600-' + this.props.slug + '.jpg', className: 'preview thumbnail' }),
			React.createElement('input', { type: 'file', id: this.props.slug, accept: 'image/*', onChange: this.props.fileChange }),
			React.createElement(
				'p',
				{ className: 'help-block' },
				'Choose a new image (Optional)'
			)
		);
	}
});