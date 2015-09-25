'use strict';

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
			),
			React.createElement(Footer, null)
		);
	}
});

var routes = React.createElement(
	Route,
	{ handler: App },
	React.createElement(Route, { name: 'home', path: '/', handler: Home }),
	React.createElement(Route, { name: 'menu/menu', path: '/menu/:menu', handler: Menu }),
	React.createElement(Route, { name: 'menu', path: '/menu', handler: Menu }),
	React.createElement(Route, { name: 'about', path: '/about', handler: About }),
	React.createElement(Route, { name: 'contact', path: '/contact', handler: Contact }),
	React.createElement(Route, { name: 'login', path: '/login', handler: Login }),
	React.createElement(DefaultRoute, { handler: Home }),
	React.createElement(NotFoundRoute, { handler: Home })
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(React.createElement(Handler, null), mountElement);
});