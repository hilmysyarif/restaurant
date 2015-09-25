var ContactStore = {
	contact: {
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
		},
		response: {
			saved: false,
			sent: false
		}
	},
	loadContact: function() {
		var self = this;

		$.get('/api/contact', function(data) {
			self.contact = data.data;
			self.trigger('change');
		})
		.fail(function(data) {
			console.log('Failed to load database.');
		});
	},
	getContact: function() {
		return this.contact;
	},
	saveChanges: function() {
		var self = this;
		$.ajax({
			url: `/admin/api/contact`, 
			type: 'PUT',
			data: this.contact,
			success: function(data) {
				self.contact.response = {
					saved: true,
					sent: true
				};
			}
		})
		.fail(function(data) {
			self.contact.response = {
				saved: false,
				sent: true
			};
		})
		.always(function(data) {
			self.trigger('change');
		});
	},
	changeEmail: function(value) {
		this.contact.email = value;
	},
	changePhone: function(value) {
		this.contact.phone = value;
	},
	changeAddress1: function(value) {
		this.contact.address.line1 = value;
	},
	changeAddress2: function(value) {
		this.contact.address.line2 = value;
	},
	changeAddress3: function(value) {
		this.contact.address.line3 = value;
	},
	changeAddress4: function(value) {
		this.contact.address.line4 = value;
	},
	changeMonday: function(value) {
		this.contact.hours.monday = value;
	},
	changeTuesday: function(value) {
		this.contact.hours.tuesday = value;
	},
	changeWednesday: function(value) {
		this.contact.hours.wednesday = value;
	},
	changeThursday: function(value) {
		this.contact.hours.thursday = value;
	},
	changeFriday: function(value) {
		this.contact.hours.friday = value;
	},
	changeSaturday: function(value) {
		this.contact.hours.saturday = value;
	},
	changeSunday: function(value) {
		this.contact.hours.sunday = value;
	}
}

MicroEvent.mixin(ContactStore);

AppDispatcher.register(function(payload) {
	
	switch(payload.eventName) {
		case 'saveContact':
			ContactStore.saveChanges();
			break;
		case 'loadContact':
			ContactStore.loadContact();
			break;
		case 'changeEmail':
			ContactStore.changeEmail(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changePhone':
			ContactStore.changePhone(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeAddress1':
			ContactStore.changeAddress1(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeAddress2':
			ContactStore.changeAddress2(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeAddress3':
			ContactStore.changeAddress3(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeAddress4':
			ContactStore.changeAddress4(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeMonday':
			ContactStore.changeMonday(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeTuesday':
			ContactStore.changeTuesday(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeWednesday':
			ContactStore.changeWednesday(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeThursday':
			ContactStore.changeThursday(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeFriday':
			ContactStore.changeFriday(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeSaturday':
			ContactStore.changeSaturday(payload.value);
			ContactStore.trigger('change');
			break;
		case 'changeSunday':
			ContactStore.changeSunday(payload.value);
			ContactStore.trigger('change');
			break;
	}
});