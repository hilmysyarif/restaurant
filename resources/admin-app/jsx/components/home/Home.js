var Home = React.createClass({
	getInitialState: function() {
		return HomeStore.initHome();
	},
	componentDidMount: function() {
		HomeStore.bind('change', this.onChange);
	},
	componentWillUnmount: function() {
		HomeStore.unbind('change', this.onChange);
	},
	fileChange: function(e) {
		HomeActions.selectHomeFile(e.target.files[0], e.target.id);
	},
	onChange: function() {
		this.setState(HomeStore.getHome());
	},
	onSubmit: function(e) {
		e.preventDefault();
		HomeActions.submitHome();
	},
	render: function() {
		return (
			<div className='home container'>
				<form noValidate encType='multipart/form-data' onSubmit={this.onSubmit}>
					<div className='row'>
						<ImageInput slug='homeFeaturedOne' fileChange={this.fileChange} title="Featured Image One" />
						<ImageInput slug='homeFeaturedTwo' fileChange={this.fileChange} title="Featured Image Two" />
						<ImageInput slug='homeFeaturedThree' fileChange={this.fileChange} title="Featured Image Three" />
						<ImageInput slug='homeFeaturedFour' fileChange={this.fileChange} title="Featured Image Four" />
					</div>
					<input type='submit' className='btn btn-default' disabled={this.state.uploading} value='Submit' />
					<span className='response-messages'>
						<span className={this.state.uploading ? 'text-warning' : 'hidden'}>Uploading and resizing images... (This may take a minute or two)</span>
						<span className={this.state.uploaded ? 'text-success' : 'hidden'}>Changes have been saved!</span>
						<span className={this.state.error ? 'text-danger' : 'hidden'}>There was an error uploading the images. Please try again.</span>
					</span>
				</form>
			</div>
		)
	}
});