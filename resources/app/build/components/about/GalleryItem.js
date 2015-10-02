'use strict';

var GalleryItem = React.createClass({
	displayName: 'GalleryItem',

	getInitialState: function getInitialState() {
		return {
			modalIsOpen: false
		};
	},
	openModal: function openModal() {
		this.setState({ modalIsOpen: true });
	},
	closeModal: function closeModal() {
		this.setState({ modalIsOpen: false });
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'gallery-item' },
			React.createElement('img', { src: this.props.image.size_600, id: this.props.image.slug, onClick: this.openModal }),
			React.createElement(
				Modal,
				{ isOpen: this.state.modalIsOpen, onRequestClose: this.closeModal, className: 'gallery-item__modal' },
				React.createElement(
					'div',
					{ className: 'gallery-item__modal-inner' },
					React.createElement('img', { src: this.props.image.size_2000 }),
					React.createElement(
						'span',
						{ className: 'gallery-item__close', onClick: this.closeModal },
						React.createElement('span', { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true' }),
						' Close'
					)
				)
			)
		);
	}
});