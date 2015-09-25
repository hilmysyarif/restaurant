'use strict';

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
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'app-container' },
			React.createElement(
				'div',
				{ className: 'app' },
				React.createElement(Header, null),
				React.createElement(RouteHandler, null)
			)
		);
	}
});

var routes = React.createElement(
	Route,
	{ handler: App },
	React.createElement(Route, { name: 'home', path: '/admin', handler: Home }),
	React.createElement(Route, { name: 'menus', path: '/admin/menus', handler: Menus }),
	React.createElement(Route, { name: 'menu', path: '/admin/menus/:menuSlug', handler: Menu }),
	React.createElement(Route, { name: 'about', path: '/admin/about', handler: About }),
	React.createElement(Route, { name: 'contact', path: '/admin/contact', handler: Contact }),
	React.createElement(DefaultRoute, { handler: Home }),
	React.createElement(NotFoundRoute, { handler: Home })
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(React.createElement(Handler, null), mountElement);
});