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
	formatSrcset: function formatSrcset(img) {
		return img.size_600 + ' 600w, ' + img.size_1200 + ' 1200w, ' + img.size_2000 + ' 2000w, ' + img.original;
	},
	render: function render() {
		var srcset = this.formatSrcset(this.props.image);
		return React.createElement(
			'div',
			{ className: 'gallery-item' },
			React.createElement('img', { srcSet: srcset, id: this.props.image.slug, onClick: this.openModal, sizes: '(min-width: 768px) 25vw, (min-width: 450px) 50vw, 100vw' }),
			React.createElement(
				Modal,
				{ isOpen: this.state.modalIsOpen, onRequestClose: this.closeModal, className: 'gallery-item__modal' },
				React.createElement(
					'div',
					{ className: 'gallery-item__modal-inner' },
					React.createElement('img', { src: this.props.image.original }),
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