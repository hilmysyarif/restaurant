var ImageInput = React.createClass({
	render: function() {
		return (
			<div className='form-group home-inputs'>
				<label htmlFor={this.props.slug}>{this.props.title} </label>
				<div className='preview-title'>Current Image: </div>
				<img src={`/images/upload/${this.props.slug}/600-${this.props.slug}.jpg`} className='preview thumbnail' />
				<input type='file' id={this.props.slug} accept='image/*' onChange={this.props.fileChange} />
				<p className="help-block">Choose a new image (Optional)</p>
			</div>
		)
	}
});