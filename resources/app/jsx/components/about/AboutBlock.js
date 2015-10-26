var AboutBlock = React.createClass({
	render: function() {
		let paragraphs = this.props.paragraphs.map(function(paragraph) {
			return <p>{paragraph}</p>
		});

		return (
			<article className='about-block'>
				<h2 className='title-block'>{this.props.title}</h2>
				<div className='about-block__text'>
					{paragraphs}
				</div>
			</article>
		)
	}
});