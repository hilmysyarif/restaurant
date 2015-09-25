var React = require('react');
var ReactRouter = require('react-router');
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

var HomeActions = {
	selectHomeFile: function(file, slug) {
		AppDispatcher.dispatch({
			eventName: 'selectHomeFile',
			file: file,
			slug: slug
		});
	},
	submitHome: function() {
		AppDispatcher.dispatch({
			eventName: 'submitHome'
		});
	}
};

var AboutActions = {
	loadGallery: function() {
		AppDispatcher.dispatch({
			eventName: 'loadGallery'
		});
	},
	saveGallery: function() {
		AppDispatcher.dispatch({
			eventName: 'saveGallery'
		});
	},
	changeFile: function(file, slug) {
		AppDispatcher.dispatch({
			eventName: 'changeFile',
			file: file,
			slug: slug
		});
	}
};

var MenuActions = {
	loadMenus: function() {
		AppDispatcher.dispatch({
			eventName: 'loadMenus'
		});
	},
	loadEditMenuForm: function(slug) {
		AppDispatcher.dispatch({
			eventName: 'loadEditMenuForm',
			slug: slug
		});
	},
	deleteMenu: function(id) {
		AppDispatcher.dispatch({
			eventName: 'deleteMenu',
			id: id
		});
	},
	changeAddMenuTitle: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddMenuTitle',
			value: value
		});
	},
	changeAddMenuDescription: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddMenuDescription',
			value: value
		});
	},
	addMenu: function() {
		AppDispatcher.dispatch({
			eventName: 'addMenu'
		});
	},
	changeEditMenuTitle: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeEditMenuTitle',
			value: value
		});
	},
	changeEditMenuDescription: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeEditMenuDescription',
			value: value
		});
	},
	submitEditForm: function() {
		AppDispatcher.dispatch({
			eventName: 'submitEditForm'
		});
	}
};

var MenuItemActions = {
	loadMenuItems: function(menuSlug) {
		AppDispatcher.dispatch({
			eventName: 'loadMenuItems',
			menuSlug: menuSlug
		});
	},
	deleteMenuItem: function(id) {
		AppDispatcher.dispatch({
			eventName: 'deleteMenuItem',
			id: id
		});
	},
	addMenuItem: function() {
		AppDispatcher.dispatch({
			eventName: 'addMenuItem'
		});
	},
	changeAddMenuItemTitle: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddMenuItemTitle',
			value: value
		});
	},
	changeAddMenuItemDescription: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddMenuItemDescription',
			value: value
		});
	},
	changeAddMenuItemPrice: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddMenuItemPrice',
			value: value
		});
	}
};

var ContactActions = {
	saveContact: function() {
		AppDispatcher.dispatch({
			eventName: 'saveContact'
		});
	},
	loadContact: function() {
		AppDispatcher.dispatch({
			eventName: 'loadContact'
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
	changeMonday: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeMonday',
			value: value
		});
	},
	changeTuesday: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeTuesday',
			value: value
		});
	},
	changeWednesday: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeWednesday',
			value: value
		});
	},
	changeThursday: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeThursday',
			value: value
		});
	},
	changeFriday: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeFriday',
			value: value
		});
	},
	changeSaturday: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeSaturday',
			value: value
		});
	},
	changeSunday: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeSunday',
			value: value
		});
	},
	changeAddress1: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddress1',
			value: value
		});
	},
	changeAddress2: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddress2',
			value: value
		});
	},
	changeAddress3: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddress3',
			value: value
		});
	},
	changeAddress4: function(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddress4',
			value: value
		});
	}
};