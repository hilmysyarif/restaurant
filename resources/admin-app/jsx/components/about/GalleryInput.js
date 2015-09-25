var GalleryInput = React.createClass({
	getInitialState: function() {
		return {
			gallery: AboutStore.getGallery()
		}
	},
	componentDidMount: function() {
		AboutStore.bind('change', this.onChange);
	},
	componentWillUnmount: function() {
		AboutStore.unbind('change', this.onChange);
	},
	onChange: function() {
		this.setState({gallery: AboutStore.getGallery()});
	},
	fileChange: function(e) {
		AboutActions.changeFile(e.target.files[0], e.target.id);
	},
	saveGallery: function() {
		AboutActions.saveGallery();
	},
	render: function() {
		return (
			<div className='gallery-input panel panel-default'>
				<h2 className='panel-heading'>Gallery Input</h2>
				<div className='panel-body'>
					<div className='gallery-preview'>
						<ImageInput slug='galleryOne' fileChange={this.fileChange} title='Gallery Image One' />
						<ImageInput slug='galleryTwo' fileChange={this.fileChange} title='Gallery Image Two' />
						<ImageInput slug='galleryThree' fileChange={this.fileChange} title='Gallery Image Three' />
						<ImageInput slug='galleryFour' fileChange={this.fileChange} title='Gallery Image Four' />
						<ImageInput slug='galleryFive' fileChange={this.fileChange} title='Gallery Image Five' />
						<ImageInput slug='gallerySix' fileChange={this.fileChange} title='Gallery Image Six' />
						<ImageInput slug='gallerySeven' fileChange={this.fileChange} title='Gallery Image Seven' />
						<ImageInput slug='galleryEight' fileChange={this.fileChange} title='Gallery Image Eight' />
					</div>
					<button className='btn btn-default' onClick={this.saveGallery} disabled={this.state.gallery.length===0}>Upload Images</button>
				</div>

			</div>
		)
	}
});