var MenuItem = React.createClass({
	render: function() {
		return (
			<li className='menu__item'>
				<h2 className='item__title'>{this.props.item.title}</h2>
				<span className='item__price'>${this.props.item.price}</span>
				<p className='item__description'>{this.props.item.description}</p>
			</li>
		)
	}
});