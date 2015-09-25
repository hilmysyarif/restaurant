var Router = ReactRouter;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;

var mountElement = document.getElementById('mount');

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
			</div>
		)
	}
});

var routes = (
	<Route handler={App}>
		<Route name="home" path="/admin" handler={Home} />
		<Route name="menus" path="/admin/menus" handler={Menus} />
		<Route name="menu" path="/admin/menus/:menuSlug" handler={Menu} />
		<Route name="about" path="/admin/about" handler={About} />
		<Route name="contact" path="/admin/contact" handler={Contact} />
		<DefaultRoute handler={Home} />
		<NotFoundRoute handler={Home} />
	</Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
	React.render(<Handler />, mountElement);
});