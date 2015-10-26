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
	aboutUs: ['Takapuna Beach Café is located on The Promenade at Takapuna beach with \n\t\tpanoramic views of Rangitoto & Waitemata Harbour.', 'We are committed to serving a menu for all occasions, freshly baked artisan bread & pastries, \n\t\tmulti award winning gelato & the best fish & chips in Auckland.', 'We believe in working with the best seasonal produce available, making and growing as much as possible \n\t\tourselves on our farm in Kumeu to provide a taste and experience that only the highest quality can achieve.', 'We look forward to welcoming you to Takapuna Beach Café where we will look after you all.'],
	philosophy: ['Every day, there’s one thing that occupies our minds more than anything else. How to \n\t\tcreate the best possible experience for you, our guest.', 'In fact, our General Manager Irene and Head Chef Pawan – and the teams of talented, passionate people they lead – \n\t\tarrive here every single morning with one goal in mind. To create fantastic customer experiences.', 'Being passionate about provenance, much of our fresh produce gets delivered daily from our own farm in Kumeu - and \n\t\tif it hasn’t come from there, it will be from one of a close circle of hand-picked growers who are as passionate \n\t\tabout sustainable, high-quality farming as we are.', 'Our group Butcher based in Kumeu prepares most of our protein which comes directly from the farmers. \n\t\tWe know the animals have been humanely raised in a healthy, sustainable environment.', 'Our meat can now also be purchased online at www.thebutchery.co.nz. Our fish and poultry come from partners who share \n\t\tour commitment to the environment and sustainability. Our bread is handmade at The Store in Britomart by Daniel \n\t\tCruden and his team of artisan bakers.', 'Using natural, seasonal ingredients that are churned daily on site, our chefs have created a truly artisan \n\t\tgelato that has been winning national awards since 2008.', 'Our team at patisserie and dessert restaurant, Milse in Britomart, painstakingly craft all of our cakes, pastries and desserts.', 'So we hope that when you leave, our passion for provenance will have contributed to your enjoyment of the \n\tTakapuna Beach Cafe experience.'],
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
	},
	getAboutUs: function getAboutUs() {
		return this.aboutUs;
	},
	getPhilosophy: function getPhilosophy() {
		return this.philosophy;
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