'use strict';

var HomeStore = {
	home: {
		homeFeaturedOne: '',
		homeFeaturedTwo: '',
		homeFeaturedThree: '',
		homeFeaturedFour: ''
	},
	loadHome: function loadHome() {
		var self = this;

		$.get('/api/home', function (data) {
			self.home = {
				homeFeaturedOne: data.images[0],
				homeFeaturedTwo: data.images[1],
				homeFeaturedThree: data.images[2],
				homeFeaturedFour: data.images[3]
			};

			self.trigger('change');

			picturefill({
				reevaluate: true,
				elements: [document.getElementById('homeFeaturedOne'), document.getElementById('homeFeaturedTwo'), document.getElementById('homeFeaturedThree'), document.getElementById('homeFeaturedFour')]
			});
		}).fail(function (data) {
			setTimeout(function () {
				self.loadHome();
			}, 500);
		});
	},
	getHome: function getHome() {
		return this.home;
	}
};

MicroEvent.mixin(HomeStore);

AppDispatcher.register(function (payload) {

	switch (payload.eventName) {
		case 'loadHome':
			HomeStore.loadHome();
			break;
	}
});