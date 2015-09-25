'use strict';

var MenuStore = {
	menus: [{
		id: '',
		title: '',
		description: '',
		slug: ''
	}],
	addMenuForm: {
		title: '',
		description: '',
		menuAdded: false,
		menuAddedError: false
	},
	editMenuForm: {
		id: '',
		title: '',
		description: ''
	},
	getMenus: function getMenus() {
		return this.menus;
	},
	loadMenus: function loadMenus() {
		$.get('/api/menu', (function (data) {
			this.menus = data.menus;
			this.trigger('change');
		}).bind(this));
	},
	loadEditMenuForm: function loadEditMenuForm(slug) {
		var self = this;

		$.get('/api/menu/' + slug, function (data) {
			self.editMenuForm = data.menu;
			self.trigger('change');
		}).fail(function (data) {
			console.log('fail');
		});
	},
	addMenu: function addMenu() {
		var self = this;
		$.post('/admin/api/menu', { menuTitle: this.addMenuForm.title, menuDescription: this.addMenuForm.description }, function (data) {
			self.clearAddMenuForm();
			self.loadMenus();
		}, 'json').fail(function (data) {
			self.addMenu.menuAddedError = true;
			self.trigger('change');
		});
	},
	changeAddMenuTitle: function changeAddMenuTitle(value) {
		this.addMenuForm.title = value;
	},
	changeAddMenuDescription: function changeAddMenuDescription(value) {
		this.addMenuForm.description = value;
	},
	changeEditMenuTitle: function changeEditMenuTitle(value) {
		this.editMenuForm.title = value;
	},
	changeEditMenuDescription: function changeEditMenuDescription(value) {
		this.editMenuForm.description = value;
	},
	getAddMenuForm: function getAddMenuForm() {
		return this.addMenuForm;
	},
	getEditMenuForm: function getEditMenuForm() {
		return this.editMenuForm;
	},
	clearAddMenuForm: function clearAddMenuForm() {
		this.addMenuForm = {
			title: '',
			description: '',
			menuAdded: true,
			menuAddedError: false
		};
	},
	deleteMenu: function deleteMenu(id) {
		var self = this;
		$.ajax({
			url: '/admin/api/menu/' + id,
			type: 'DELETE',
			success: function success(data) {
				self.loadMenus();
			}
		}).fail(function (data) {
			console.log('Delete failed');
		}).always(function (data) {
			self.trigger('change');
		});
	},
	submitEditForm: function submitEditForm() {
		var self = this;
		$.ajax({
			url: '/admin/api/menu/' + this.editMenuForm.id,
			type: 'PUT',
			data: this.editMenuForm,
			success: function success(data) {
				self.editMenuForm = data.result;
				self.loadEditMenuForm(self.editMenuForm.slug);
				//Redirect due to possible slug change
				window.location = '/admin/menus';
			}
		}).fail(function (data) {
			console.log('Update failed');
		}).always(function (data) {
			self.trigger('change');
		});
	}
};

MicroEvent.mixin(MenuStore);

AppDispatcher.register(function (payload) {

	switch (payload.eventName) {
		case 'loadMenus':
			MenuStore.loadMenus();
			break;
		case 'loadEditMenuForm':
			MenuStore.loadEditMenuForm(payload.slug);
			break;
		case 'deleteMenu':
			MenuStore.deleteMenu(payload.id);
			break;
		case 'addMenu':
			MenuStore.addMenu();
			MenuStore.trigger('change');
			break;
		case 'changeAddMenuTitle':
			MenuStore.changeAddMenuTitle(payload.value);
			MenuStore.trigger('change');
			break;
		case 'changeAddMenuDescription':
			MenuStore.changeAddMenuDescription(payload.value);
			MenuStore.trigger('change');
			break;
		case 'changeEditMenuTitle':
			MenuStore.changeEditMenuTitle(payload.value);
			MenuStore.trigger('change');
			break;
		case 'changeEditMenuDescription':
			MenuStore.changeEditMenuDescription(payload.value);
			MenuStore.trigger('change');
			break;
		case 'submitEditForm':
			MenuStore.submitEditForm();
			break;
	}
});