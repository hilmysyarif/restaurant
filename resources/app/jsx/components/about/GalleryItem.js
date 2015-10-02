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
	render: function() {
		return (
			<div className='gallery-item'>
				<img src={this.props.image.size_600} id={this.props.image.slug} onClick={this.openModal} />
				<Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} className='gallery-item__modal'>
					<div className='gallery-item__modal-inner'>
						<img src={this.props.image.size_2000} />
						<span className='gallery-item__close' onClick={this.closeModal}>
							<span className='glyphicon glyphicon-remove' aria-hidden="true"></span> Close
						</span>
					</div>
				</Modal>
			</div>
		)
	}
});