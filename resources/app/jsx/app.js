var Router = ReactRouter;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;
var Modal = ReactModal;

var mountElement = document.getElementById('mount');

Modal.setAppElement(mountElement);

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

var App = React.createClass({
	render: function() {
		return (
			<div className='app-container'>
				<div className='app'>
					<Header />
					<RouteHandler />
				</div>
				<Footer />
			</div>
		)
	}
});

var routes = (
	<Route handler={App}>
		<Route name="home" path="/" handler={Home} />
		<Route name="menu/menu" path="/menu/:menu" handler={Menu} />
		<Route name="menu" path="/menu" handler={Menu} />
		<Route name="about" path="/about" handler={About} />
		<Route name="contact" path="/contact" handler={Contact} />
		<Route name="login" path="/login" handler={Login} />
		<DefaultRoute handler={Home} />
		<NotFoundRoute handler={Home} />
	</Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
	React.render(<Handler />, mountElement);
});
