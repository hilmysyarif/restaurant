var Header = React.createClass({
	render: function() {
		return (
			<header className='main-header'>
				<div className='main-header-wrapper'>
					<div className='logo'>
						<Link to="home" className='logo__link'>Takapuna Beach 
							<small className='logo__subtitle'>Cafe &amp; Store</small>
						</Link>
					</div>
					<nav className='main-nav'>
						<ul>
							<li className='main-nav__link'>
								<Link to="/menu"><span className="glyphicon glyphicon-cutlery" aria-hidden="true"></span> Menu</Link>
							</li>
							<li className='main-nav__link'>
								<Link to="about"><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> About</Link>
							</li>
							<li className='main-nav__link'>
								<Link to="contact"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		)
	}
});