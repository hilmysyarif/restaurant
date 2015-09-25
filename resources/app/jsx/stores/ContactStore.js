var ContactStore = {
	contactForm: {},
	contactDetails: {
		email: '', 
		phone: '', 
		address: {
			line1: '', 
			line2: '', 
			line3: '', 
			line4: ''
		},
		hours: {
			monday: '', 
			tuesday: '', 
			wednesday: '', 
			thursday: '', 
			friday: '', 
			saturday: '', 
			sunday: ''
		}
	},
	loadContactDetails: function() {
		var self = this;

		$.get('/api/contact', function(data) {
			self.contactDetails = data.data;
			self.trigger('change');
		})
		.fail(function(data) {
			setTimeout(function() {
				self.loadContactDetails();
			}, 500);
		});
	},
	getContactDetails: function() {
		return this.contactDetails;
	},
	initForm: function() {
		this.contactForm = {
			valid: false,
			name: {
				valid: false,
				value: '', 
				dirty: false
			},
			email: {
				valid: false,
				value: '', 
				dirty: false,
			}, 
			phone: {
				valid: false,
				value: '', 
				dirty: false,
			}, 
			subject: {
				valid: true,
				value: '',
				dirty: false
			},
			message: {
				valid: false,
				value: '', 
				dirty: false,
			},
			button: {
				disabled: false,
				value: 'Submit'
			},
			response: {
				success: false,
				sent: false,
				errors: []
			}
		};

		return this.contactForm;
	},
	getContactForm: function() {
		return this.contactForm;
	},
	blurField: function(field) {
		this.contactForm[field].dirty = true;
		this.validateForm();
	},
	changeName: function(value) {
		this.contactForm.name.value = value.substring(0, 70);
		if(this.contactForm.name.value.length > 1) {
			this.contactForm.name.valid = true;
		} else {
			this.contactForm.name.valid = false;
		}

		this.validateForm();
	},
	changeEmail: function(value) {
		this.contactForm.email.value = value;

		if(this.validateEmail()) {
			this.contactForm.email.valid = true;
		} else {
			this.contactForm.email.valid = false;
		}

		this.validateForm();
	},
	changePhone: function(value) {
		this.contactForm.phone.value = value.substring(0, 30);

		if(this.contactForm.phone.value.length > 1) {
			this.contactForm.phone.valid = true;
		} else {
			this.contactForm.phone.valid = false;
		}

		this.validateForm();
	},
	changeSubject: function(value) {
		this.contactForm.subject.value = value.substring(0, 70);
		this.validateForm();
	},
	changeMessage: function(value) {
		this.contactForm.message.value = value;

		if(this.contactForm.message.value.length > 0) {
			this.contactForm.message.valid = true;
		} else {
			this.contactForm.message.valid = false;
		}

		this.validateForm();
	},
	sendForm: function() {
		this.contactForm.button.value = 'Sending...';
		this.contactForm.button.disabled = true;
		var self = this;

		$.post("/contact/process-form", this.contactForm, function(data){
			//If the form was successfully sent, reset form and leave success message.
			if(data.success) {
				self.initForm();
				self.contactForm.response.success = data.success;
			}
		}, "json")
		.fail(function() {
			self.contactForm.response.success = false;
		})
		.always(function() {
			self.contactForm.button.value = 'Submit';
			self.contactForm.response.sent = true;
			self.contactForm.button.disabled = false;
			self.trigger('change');
		});
	},
	validateEmail: function() {
		var pattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		return pattern.test(this.contactForm.email.value);
	},
	validateForm: function() {
		this.contactForm.valid = this.contactForm.name.valid && this.contactForm.email.valid && this.contactForm.phone.valid && this.contactForm.subject.valid && this.contactForm.message.valid;
		this.contactForm.button.value = 'Send';
	},
}

MicroEvent.mixin(ContactStore);

AppDispatcher.register(function(payload) {
	
	switch(payload.eventName) {
		case 'blurField':
			ContactStore.blurField(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeName':
			ContactStore.changeName(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeEmail':
			ContactStore.changeEmail(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changePhone':
			ContactStore.changePhone(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeSubject':
			ContactStore.changeSubject(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeMessage':
			ContactStore.changeMessage(payload.value);
			ContactStore.trigger('change');
			break;
		case 'sendForm':
			ContactStore.sendForm();
			break;
		case 'loadContactDetails':
			ContactStore.loadContactDetails();
			break;
	}
});