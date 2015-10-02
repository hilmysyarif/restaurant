var Featured = React.createClass({
	getInitialState: function() {
		return HomeStore.getHome();
	},
	componentDidMount: function() {
		HomeStore.bind('change', this.onChange);
		HomeActions.loadHome();
	},
	componentWillUnmount: function() {
		HomeStore.unbind('change', this.onChange);
	},
	onChange: function() {
		this.setState(HomeStore.getHome());
	},
	render: function() {
		return (
			<section className='featured'>
				<FeaturedItem id="homeFeaturedOne" sizes="(min-width: 768px) 50vw, 100vw" img={this.state.homeFeaturedOne} text='Our Award Winning Menu' url="/menu" />
				<FeaturedItem id="homeFeaturedTwo" sizes="(min-width: 768px) 25vw, (min-width: 600px) 50vw, 100vw" img={this.state.homeFeaturedTwo} text='Find Us' url="/contact" />
				<FeaturedItem id="homeFeaturedThree" sizes="(min-width: 768px) 25vw, (min-width: 600px) 50vw, 100vw" img={this.state.homeFeaturedThree} text='Our History' url="/about" />
				<FeaturedItem id="homeFeaturedFour" img={this.state.homeFeaturedFour} text='Make a reservation today' url="/contact" />
			</section>
		)
	}
});