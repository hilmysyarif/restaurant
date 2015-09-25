var AboutBlock = React.createClass({
	render: function() {
		return (
			<div className='about-block'>
				<h2 className='title-block'>{this.props.title}</h2>
				<div className='about-block__text' dangerouslySetInnerHTML={{__html: this.props.text}} />
			</div>
		)
	}
});