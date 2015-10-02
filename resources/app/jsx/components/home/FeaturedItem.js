var FeaturedItem = React.createClass({
	formatSrcSet: function(img) {
		return `${img.size_600} 600w, ${img.size_1200} 1200w, ${img.size_2000} 2000w`;
	},
	render: function() {
		return (
			<div className='featured-item'>
				<Link to={this.props.url}>
					<div className='img-wrapper'>
						<img id={this.props.id} srcSet={this.formatSrcSet(this.props.img)} sizes={this.props.sizes} alt={"Background Image for " + this.props.text} />
					</div>
					<h3 className='featured-item__text'>
						{this.props.text}
					</h3>
				</Link>
			</div>
		)
	}
});