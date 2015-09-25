var Header = React.createClass({
	render: function() {
		return (
			<nav className='navbar navbar-default col-xs-12'>
				<ul className='nav navbar-nav col-xs-12 row'>
					<li className='col-xs-12 col-sm-3 col-md-2'><a href="/" className='navbar-brand'>Back to site</a></li>
					<li><Link to="home">Home</Link></li>
					<li><Link to="about">About</Link></li>
					<li><Link to="menus">Menus</Link></li>
					<li><Link to="contact">Contact</Link></li>
					<li><a href='/auth/logout'>Logout</a></li>
				</ul>
			</nav>
		)
	}
});