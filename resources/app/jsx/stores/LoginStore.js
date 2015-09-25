var LoginStore = {
	loginForm: {
		email: '', 
		password: '',
		failed: false
	},
	login: function() {
		var self = this;

		$.post('/auth/login', this.loginForm, function(data) {
			window.location = '/admin';
		})
		.fail(function(data) {
			self.loginForm.failed = true;
			self.trigger('change');
		});
	},
	getLoginForm: function() {
		return this.loginForm;
	},
	changeEmail: function(value) {
		this.loginForm.email = value;
	},
	changePassword: function(value) {
		this.loginForm.password = value;
	}
};

MicroEvent.mixin(LoginStore);

AppDispatcher.register(function(payload) {
	
	switch(payload.eventName) {
		case 'login':
			LoginStore.login();
			break;
		case 'changeLoginEmail':
			LoginStore.changeEmail(payload.value);
			LoginStore.trigger('change');
			break;
		case 'changePassword':
			LoginStore.changePassword(payload.value);
			LoginStore.trigger('change');
			break;
	}
});