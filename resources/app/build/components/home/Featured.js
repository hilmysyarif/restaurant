'use strict';

var Featured = React.createClass({
	displayName: 'Featured',

	getInitialState: function getInitialState() {
		return HomeStore.getHome();
	},
	componentDidMount: function componentDidMount() {
		HomeStore.bind('change', this.onChange);
		HomeActions.loadHome();
	},
	componentWillUnmount: function componentWillUnmount() {
		HomeStore.unbind('change', this.onChange);
	},
	onChange: function onChange() {
		this.setState(HomeStore.getHome());
	},
	render: function render() {
		return React.createElement(
			'section',
			{ className: 'featured' },
			React.createElement(FeaturedItem, { id: 'homeFeaturedOne', sizes: '(min-width: 768px) 50vw, 100vw', img: this.state.homeFeaturedOne, text: 'Our Award Winning Menu', url: '/menu' }),
			React.createElement(FeaturedItem, { id: 'homeFeaturedTwo', sizes: '(min-width: 768px) 25vw, (min-width: 600px) 50vw, 100vw', img: this.state.homeFeaturedTwo, text: 'Find Us', url: '/contact' }),
			React.createElement(FeaturedItem, { id: 'homeFeaturedThree', sizes: '(min-width: 768px) 25vw, (min-width: 600px) 50vw, 100vw', img: this.state.homeFeaturedThree, text: 'Our History', url: '/about' }),
			React.createElement(FeaturedItem, { id: 'homeFeaturedFour', img: this.state.homeFeaturedFour, text: 'Make a reservation today', url: '/contact' })
		);
	}
});