var AboutStore = {
	gallery: {
		galleryOne: {}, 
		galleryTwo: {}, 
		galleryThree: {}, 
		galleryFour: {}, 
		galleryFive: {}, 
		gallerySix: {}, 
		gallerySeven: {}, 
		galleryEight: {}, 
	},
	loadGallery: function() {

	},
	getGallery: function() {
		return this.gallery;
	},
	saveGallery: function() {
		var data = new FormData();
		var self = this;

		$.each(this.gallery, function(key, value) {
			data.append(key, value);
		});

		$.ajax({
			url: '/admin/api/about',
			type: 'POST',
			data: data,
			cache: false,
			dataType: 'json', 
			processData: false,
			contentType: false
		})
		.done(function(data) {
			console.log('Success, clearing inputs');
			self.clearGallery();
			location.reload();
		})
		.fail(function(data) {
			console.log('Error saving gallery');
			console.log(data);
		})
		.always(function(data) {
			self.trigger('change');
		});
	},
	changeFile: function(page, slug) {
		this.gallery[slug] = page;
	},
	clearGallery: function() {
		this.gallery = {};
	}
}

MicroEvent.mixin(AboutStore);

AppDispatcher.register(function(payload) {
	
	switch(payload.eventName) {
		case 'loadGallery':
			AboutStore.loadGallery();
			break;
		case 'saveGallery':
			AboutStore.saveGallery();
			break;
		case 'changeFile':
			AboutStore.changeFile(payload.file, payload.slug);
			AboutStore.trigger('change');
			break;
	}
});