var AppDispatcher = new Flux.Dispatcher();

var AboutActions = {
	loadGallery: function() {
		AppDispatcher.dispatch({
			eventName: 'loadGallery'
		});
	}
};

var HomeActions = {
	loadHome: function() {
		AppDispatcher.dispatch({
			eventName: 'loadHome'
		});
	}
};

var LoginActions = {
	login: function() {
		AppDispatcher.dispatch({
			eventName: 'login'
		});
	},
	changeLoginEmail: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeLoginEmail',
			value: value
		});
	},
	changePassword: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changePassword',
			value: value
		});
	}
};

var ContactActions = {
	blurField: function(field) {
		AppDispatcher.dispatch({
			eventName: 'blurField',
			value: field
		});
	},
	changeName: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeName',
			value: value
		});
	},
	changeEmail: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeEmail',
			value: value
		});
	},
	changePhone: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changePhone',
			value: value
		});
	},
	changeSubject: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeSubject',
			value: value
		});
	},
	changeMessage: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeMessage',
			value: value
		});
	},
	sendForm: function() {
		AppDispatcher.dispatch({
			eventName: 'sendForm'
		});
	},
	loadContactDetails: function() {
		AppDispatcher.dispatch({
			eventName: 'loadContactDetails'
		});
	}
};

var MenuActions = {
	loadMenus: function() {
		AppDispatcher.dispatch({
			eventName: 'loadMenus'
		});
	},
	loadMenu: function(slug) {
		AppDispatcher.dispatch({
			eventName: 'loadMenu',
			slug: slug
		});
	}
};