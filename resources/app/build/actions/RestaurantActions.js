'use strict';

var AppDispatcher = new Flux.Dispatcher();

var AboutActions = {
	loadGallery: function loadGallery() {
		AppDispatcher.dispatch({
			eventName: 'loadGallery'
		});
	}
};

var HomeActions = {
	loadHome: function loadHome() {
		AppDispatcher.dispatch({
			eventName: 'loadHome'
		});
	}
};

var LoginActions = {
	login: function login() {
		AppDispatcher.dispatch({
			eventName: 'login'
		});
	},
	changeLoginEmail: function changeLoginEmail(value) {
		AppDispatcher.dispatch({
			eventName: 'changeLoginEmail',
			value: value
		});
	},
	changePassword: function changePassword(value) {
		AppDispatcher.dispatch({
			eventName: 'changePassword',
			value: value
		});
	}
};

var ContactActions = {
	blurField: function blurField(field) {
		AppDispatcher.dispatch({
			eventName: 'blurField',
			value: field
		});
	},
	changeName: function changeName(value) {
		AppDispatcher.dispatch({
			eventName: 'changeName',
			value: value
		});
	},
	changeEmail: function changeEmail(value) {
		AppDispatcher.dispatch({
			eventName: 'changeEmail',
			value: value
		});
	},
	changePhone: function changePhone(value) {
		AppDispatcher.dispatch({
			eventName: 'changePhone',
			value: value
		});
	},
	changeSubject: function changeSubject(value) {
		AppDispatcher.dispatch({
			eventName: 'changeSubject',
			value: value
		});
	},
	changeMessage: function changeMessage(value) {
		AppDispatcher.dispatch({
			eventName: 'changeMessage',
			value: value
		});
	},
	sendForm: function sendForm() {
		AppDispatcher.dispatch({
			eventName: 'sendForm'
		});
	},
	loadContactDetails: function loadContactDetails() {
		AppDispatcher.dispatch({
			eventName: 'loadContactDetails'
		});
	}
};

var MenuActions = {
	loadMenus: function loadMenus() {
		AppDispatcher.dispatch({
			eventName: 'loadMenus'
		});
	},
	loadMenu: function loadMenu(slug) {
		AppDispatcher.dispatch({
			eventName: 'loadMenu',
			slug: slug
		});
	}
};