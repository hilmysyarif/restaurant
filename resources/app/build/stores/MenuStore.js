'use strict';

var MenuStore = {
	menus: [{
		id: 0,
		title: '',
		slug: ''
	}],
	defaultMenu: "all-day-menu",
	currentMenu: '',
	menu: {
		title: '',
		description: '',
		slug: '',
		menu_items: [{
			id: 0,
			title: '',
			description: '',
			price: ''
		}]
	},
	loadMenu: function loadMenu(slug) {
		var self = this;

		if (slug === undefined) {
			slug = this.defaultMenu;
		}

		if (slug === this.currentMenu) {
			return;
		}

		$.get('/api/menu/' + slug, function (data) {
			self.menu = data.menu;
			self.currentMenu = data.menu.slug;
			MenuStore.trigger('change');
		}).fail(function (data) {
			setTimeout(function () {
				self.loadMenu(slug);
			}, 500);
		});
	},
	getMenu: function getMenu() {
		return this.menu;
	},
	loadMenus: function loadMenus() {
		var self = this;
		$.get('/api/menu', function (data) {
			self.menus = data.menus;
			MenuStore.trigger('change');
		}).fail(function (data) {
			setTimeout(function () {
				self.loadMenus();
			}, 500);
		});
	},
	getMenus: function getMenus() {
		return this.menus;
	}
};

MicroEvent.mixin(MenuStore);

AppDispatcher.register(function (payload) {

	switch (payload.eventName) {
		case 'loadMenus':
			MenuStore.loadMenus();
			break;
		case 'loadMenu':
			MenuStore.loadMenu(payload.slug);
			break;
	}
});