'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

var HomeActions = {
	selectHomeFile: function selectHomeFile(file, slug) {
		AppDispatcher.dispatch({
			eventName: 'selectHomeFile',
			file: file,
			slug: slug
		});
	},
	submitHome: function submitHome() {
		AppDispatcher.dispatch({
			eventName: 'submitHome'
		});
	}
};

var AboutActions = {
	loadGallery: function loadGallery() {
		AppDispatcher.dispatch({
			eventName: 'loadGallery'
		});
	},
	saveGallery: function saveGallery() {
		AppDispatcher.dispatch({
			eventName: 'saveGallery'
		});
	},
	changeFile: function changeFile(file, slug) {
		AppDispatcher.dispatch({
			eventName: 'changeFile',
			file: file,
			slug: slug
		});
	}
};

var MenuActions = {
	loadMenus: function loadMenus() {
		AppDispatcher.dispatch({
			eventName: 'loadMenus'
		});
	},
	loadEditMenuForm: function loadEditMenuForm(slug) {
		AppDispatcher.dispatch({
			eventName: 'loadEditMenuForm',
			slug: slug
		});
	},
	deleteMenu: function deleteMenu(id) {
		AppDispatcher.dispatch({
			eventName: 'deleteMenu',
			id: id
		});
	},
	changeAddMenuTitle: function changeAddMenuTitle(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddMenuTitle',
			value: value
		});
	},
	changeAddMenuDescription: function changeAddMenuDescription(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddMenuDescription',
			value: value
		});
	},
	addMenu: function addMenu() {
		AppDispatcher.dispatch({
			eventName: 'addMenu'
		});
	},
	changeEditMenuTitle: function changeEditMenuTitle(value) {
		AppDispatcher.dispatch({
			eventName: 'changeEditMenuTitle',
			value: value
		});
	},
	changeEditMenuDescription: function changeEditMenuDescription(value) {
		AppDispatcher.dispatch({
			eventName: 'changeEditMenuDescription',
			value: value
		});
	},
	submitEditForm: function submitEditForm() {
		AppDispatcher.dispatch({
			eventName: 'submitEditForm'
		});
	}
};

var MenuItemActions = {
	loadMenuItems: function loadMenuItems(menuSlug) {
		AppDispatcher.dispatch({
			eventName: 'loadMenuItems',
			menuSlug: menuSlug
		});
	},
	deleteMenuItem: function deleteMenuItem(id) {
		AppDispatcher.dispatch({
			eventName: 'deleteMenuItem',
			id: id
		});
	},
	addMenuItem: function addMenuItem() {
		AppDispatcher.dispatch({
			eventName: 'addMenuItem'
		});
	},
	changeAddMenuItemTitle: function changeAddMenuItemTitle(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddMenuItemTitle',
			value: value
		});
	},
	changeAddMenuItemDescription: function changeAddMenuItemDescription(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddMenuItemDescription',
			value: value
		});
	},
	changeAddMenuItemPrice: function changeAddMenuItemPrice(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddMenuItemPrice',
			value: value
		});
	}
};

var ContactActions = {
	saveContact: function saveContact() {
		AppDispatcher.dispatch({
			eventName: 'saveContact'
		});
	},
	loadContact: function loadContact() {
		AppDispatcher.dispatch({
			eventName: 'loadContact'
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
	changeMonday: function changeMonday(value) {
		AppDispatcher.dispatch({
			eventName: 'changeMonday',
			value: value
		});
	},
	changeTuesday: function changeTuesday(value) {
		AppDispatcher.dispatch({
			eventName: 'changeTuesday',
			value: value
		});
	},
	changeWednesday: function changeWednesday(value) {
		AppDispatcher.dispatch({
			eventName: 'changeWednesday',
			value: value
		});
	},
	changeThursday: function changeThursday(value) {
		AppDispatcher.dispatch({
			eventName: 'changeThursday',
			value: value
		});
	},
	changeFriday: function changeFriday(value) {
		AppDispatcher.dispatch({
			eventName: 'changeFriday',
			value: value
		});
	},
	changeSaturday: function changeSaturday(value) {
		AppDispatcher.dispatch({
			eventName: 'changeSaturday',
			value: value
		});
	},
	changeSunday: function changeSunday(value) {
		AppDispatcher.dispatch({
			eventName: 'changeSunday',
			value: value
		});
	},
	changeAddress1: function changeAddress1(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddress1',
			value: value
		});
	},
	changeAddress2: function changeAddress2(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddress2',
			value: value
		});
	},
	changeAddress3: function changeAddress3(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddress3',
			value: value
		});
	},
	changeAddress4: function changeAddress4(value) {
		AppDispatcher.dispatch({
			eventName: 'changeAddress4',
			value: value
		});
	}
};