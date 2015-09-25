var MenuNav = React.createClass({
	toDashed: function(str) {
		return str.replace(/\W+/g, '-')
                .replace(/([a-z\d])([A-Z])/g, '$1-$2')
                .toLowerCase();
	},
	formatLinks: function() {
		var links = this.props.menus.map(function(menu){
			return (
				<li key={menu.id}>
					<Link to={`/menu/${menu.slug}`} className='menu-nav__link'>
						{menu.title}
					</Link>
				</li>
			)
		}.bind(this));

		return links;
	},
	render: function() {

		var navLinks = this.formatLinks();

		return (
			<nav className='menu-nav'>
				<h2 className='menu-nav__header'>Menus</h2>
				<ul className='menu-nav__list'>
					{navLinks}
				</ul>
			</nav>
		)
	}
});