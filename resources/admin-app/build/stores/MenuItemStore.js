'use strict';

var MenuItemStore = {
	addMenuItemForm: {
		title: '',
		description: '',
		price: ''
	},
	menuItems: [{
		id: 0,
		title: '',
		description: '',
		price: ''
	}],
	menuSlug: '',
	loadMenuItems: function loadMenuItems(menuSlug) {
		this.menuSlug = menuSlug;
		$.get('/api/menu/' + menuSlug + '/items', (function (data) {
			this.menuItems = data.menuItems;
			this.trigger('change');
		}).bind(this));
	},
	getMenuItems: function getMenuItems() {
		return this.menuItems;
	},
	getMenuItemForm: function getMenuItemForm() {
		return this.addMenuItemForm;
	},
	deleteMenuItem: function deleteMenuItem(id) {
		var self = this;
		$.ajax({
			url: '/admin/api/menu/' + this.menuSlug + '/' + id,
			type: 'DELETE',
			success: function success(data) {
				self.loadMenuItems(self.menuSlug);
			}
		}).fail(function (data) {
			console.log('Delete failed');
		}).always(function (data) {
			self.trigger('change');
		});
	},
	addMenuItem: function addMenuItem() {
		var self = this;
		$.ajax({
			url: '/admin/api/menu/' + this.menuSlug,
			type: 'POST',
			data: this.addMenuItemForm,
			success: function success(data) {
				self.loadMenuItems(self.menuSlug);
				self.clearAddMenuItemForm();
			}
		}).fail(function (data) {}).always(function (data) {
			self.trigger('change');
		});
	},
	changeAddMenuItemTitle: function changeAddMenuItemTitle(title) {
		this.addMenuItemForm.title = title;
	},
	changeAddMenuItemDescription: function changeAddMenuItemDescription(description) {
		this.addMenuItemForm.description = description;
	},
	changeAddMenuItemPrice: function changeAddMenuItemPrice(price) {
		this.addMenuItemForm.price = price;
	},
	clearAddMenuItemForm: function clearAddMenuItemForm() {
		this.addMenuItemForm = {
			title: '',
			description: '',
			price: ''
		};
	}
};

MicroEvent.mixin(MenuItemStore);

AppDispatcher.register(function (payload) {

	switch (payload.eventName) {
		case 'loadMenuItems':
			MenuItemStore.loadMenuItems(payload.menuSlug);
			break;
		case 'deleteMenuItem':
			MenuItemStore.deleteMenuItem(payload.id);
			break;
		case 'addMenuItem':
			MenuItemStore.addMenuItem();
			break;
		case 'changeAddMenuItemTitle':
			MenuItemStore.changeAddMenuItemTitle(payload.value);
			MenuItemStore.trigger('change');
			break;
		case 'changeAddMenuItemDescription':
			MenuItemStore.changeAddMenuItemDescription(payload.value);
			MenuItemStore.trigger('change');
			break;
		case 'changeAddMenuItemPrice':
			MenuItemStore.changeAddMenuItemPrice(payload.value);
			MenuItemStore.trigger('change');
			break;
	}
});