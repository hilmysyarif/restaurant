var Gallery = React.createClass({
	getInitialState: function() {
		return {
			gallery: AboutStore.getGallery()
		};
	},
	componentDidMount: function() {
		AboutStore.bind('change', this.onChange);
		AboutActions.loadGallery();
	},
	componentWillUnmount: function() {
		AboutStore.unbind('change', this.onChange);
	},
	onChange: function() {
		this.setState({
			gallery: AboutStore.getGallery()
		});
	},
	render: function() {
		var items = this.state.gallery.map(function(value, index) {
			return <GalleryItem image={value} key={index} />
		});
		return (
			<div className='gallery'>
				<h2 className='title-block'>Gallery</h2>
				<div className='gallery-items'>
					{items}
				</div>
			</div>
		)
	}
});