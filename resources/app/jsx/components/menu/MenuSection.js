var MenuSection = React.createClass({
	render: function() {

		var items = this.props.menu.menu_items.map(function(item){
			return <MenuItem item={item} key={item.id} />
		});

		return (
			<section className='menu-section'>
				<header className='title-block'>
					<h1 className='menu-section__title'>{this.props.menu.title}</h1>
					<h3 className='menu-section__subtitle'>{this.props.menu.description}</h3>
				</header>
				<ul className='menu__items'>
					{items}
				</ul>
			</section>
		)
	}
});