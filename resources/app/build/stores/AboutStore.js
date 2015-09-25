'use strict';

var AboutStore = {
	gallery: [{
		original: '',
		size_600: '',
		size_1200: '',
		size_2000: '',
		slug: '',
		id: ''
	}],
	loadGallery: function loadGallery() {
		var self = this;

		$.get('/api/about', function (data) {
			self.gallery = data.images;
			self.trigger('change');
			picturefill({
				reevaluate: true,
				elements: [document.getElementById('galleryOne'), document.getElementById('galleryTwo'), document.getElementById('galleryThree'), document.getElementById('galleryFour'), document.getElementById('galleryFive'), document.getElementById('gallerySix'), document.getElementById('gallerySeven'), document.getElementById('galleryEight')]
			});
		}).fail(function (data) {
			setTimeout(function () {
				self.loadGallery();
			}, 500);
		});
	},
	getGallery: function getGallery() {
		return this.gallery;
	}
};

MicroEvent.mixin(AboutStore);

AppDispatcher.register(function (payload) {

	switch (payload.eventName) {
		case 'loadGallery':
			AboutStore.loadGallery();
			break;
	}
});