'use strict';

var HomeStore = {
	home: {},
	initHome: function initHome() {
		this.home = {
			files: {
				featuredImageOne: {},
				featuredImageTwo: {},
				featuredImageThree: {},
				featuredImageFour: {}
			},
			uploaded: false,
			uploading: false,
			error: false
		};

		return this.home;
	},
	getHome: function getHome() {
		return this.home;
	},
	selectFile: function selectFile(page, slug) {
		this.home.files[slug] = page;
	},
	submitForm: function submitForm() {
		this.home.error = false;
		this.home.uploaded = false;
		var data = new FormData();
		var self = this;

		$.each(this.home.files, function (key, value) {
			data.append(key, value);
		});

		self.home.uploading = true;

		$.ajax({
			url: 'admin/api/home',
			type: 'POST',
			data: data,
			cache: false,
			dataType: 'json',
			processData: false,
			contentType: false
		}).done(function (data) {
			console.log('Success, clearing inputs');
			self.initHome();
			self.home.uploaded = true;
			location.reload();
		}).fail(function (data) {
			console.log('Error submitting form');
			console.log(data);
			self.home.error = true;
		}).always(function (data) {
			self.home.uploading = false;
			HomeStore.trigger('change');
		});
	}
};

MicroEvent.mixin(HomeStore);

AppDispatcher.register(function (payload) {

	switch (payload.eventName) {
		case 'selectHomeFile':
			HomeStore.selectFile(payload.file, payload.slug);
			HomeStore.trigger('change');
			break;
		case 'submitHome':
			HomeStore.submitForm();
			HomeStore.trigger('change');
			break;
	}
});