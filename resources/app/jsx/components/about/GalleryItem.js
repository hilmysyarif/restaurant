var GalleryItem = React.createClass({
	getInitialState: function() {
		return {
			modalIsOpen: false
		};
	},
	openModal: function() {
		this.setState({modalIsOpen: true});
	},
	closeModal: function() {
		this.setState({modalIsOpen: false});
	},
	formatSrcset: function(img) {
		return `${img.size_600} 600w, ${img.size_1200} 1200w, ${img.size_2000} 2000w, ${img.original}`;
	},
	render: function() {
		var srcset = this.formatSrcset(this.props.image);
		return (
			<div className='gallery-item'>
				<img srcSet={srcset} id={this.props.image.slug} onClick={this.openModal} sizes='(min-width: 768px) 25vw, (min-width: 450px) 50vw, 100vw' />
				<Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} className='gallery-item__modal'>
					<div className='gallery-item__modal-inner'>
						<img src={this.props.image.original} />
						<span className='gallery-item__close' onClick={this.closeModal}>
							<span className='glyphicon glyphicon-remove' aria-hidden="true"></span> Close
						</span>
					</div>
				</Modal>
			</div>
		)
	}
});