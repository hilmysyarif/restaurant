var FeaturedItem = React.createClass({
	formatSrcSet: function(img) {
		return `${img.size_600} 600w, ${img.size_1200} 1200w, ${img.size_2000} 2000w, ${img.original}`;
	},
	render: function() {
		return (
			<div className='featured__item'>
				<Link to={this.props.url}>
					<div className='featured__img-wrapper'>
						<img id={this.props.id} srcSet={this.formatSrcSet(this.props.img)} sizes={this.props.sizes} alt={"Background Image for " + this.props.text} />
					</div>
					<h3 className='featured__text'>
						{this.props.text}
					</h3>
				</Link>
			</div>
		)
	}
});