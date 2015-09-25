'use strict';

var Home = React.createClass({
	displayName: 'Home',

	getInitialState: function getInitialState() {
		return HomeStore.initHome();
	},
	componentDidMount: function componentDidMount() {
		HomeStore.bind('change', this.onChange);
	},
	componentWillUnmount: function componentWillUnmount() {
		HomeStore.unbind('change', this.onChange);
	},
	fileChange: function fileChange(e) {
		HomeActions.selectHomeFile(e.target.files[0], e.target.id);
	},
	onChange: function onChange() {
		this.setState(HomeStore.getHome());
	},
	onSubmit: function onSubmit(e) {
		e.preventDefault();
		HomeActions.submitHome();
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'home container' },
			React.createElement(
				'form',
				{ noValidate: true, encType: 'multipart/form-data', onSubmit: this.onSubmit },
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement(ImageInput, { slug: 'homeFeaturedOne', fileChange: this.fileChange, title: 'Featured Image One' }),
					React.createElement(ImageInput, { slug: 'homeFeaturedTwo', fileChange: this.fileChange, title: 'Featured Image Two' }),
					React.createElement(ImageInput, { slug: 'homeFeaturedThree', fileChange: this.fileChange, title: 'Featured Image Three' }),
					React.createElement(ImageInput, { slug: 'homeFeaturedFour', fileChange: this.fileChange, title: 'Featured Image Four' })
				),
				React.createElement('input', { type: 'submit', className: 'btn btn-default', disabled: this.state.uploading, value: 'Submit' }),
				React.createElement(
					'span',
					{ className: 'response-messages' },
					React.createElement(
						'span',
						{ className: this.state.uploading ? 'text-warning' : 'hidden' },
						'Uploading and resizing images... (This may take a minute or two)'
					),
					React.createElement(
						'span',
						{ className: this.state.uploaded ? 'text-success' : 'hidden' },
						'Changes have been saved!'
					),
					React.createElement(
						'span',
						{ className: this.state.error ? 'text-danger' : 'hidden' },
						'There was an error uploading the images. Please try again.'
					)
				)
			)
		);
	}
});