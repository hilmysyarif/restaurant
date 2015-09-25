var ContactForm = React.createClass({
	getInitialState: function() {
		return ContactStore.initForm();
	},
	componentDidMount: function() {
		ContactStore.bind('change', this.onChange);
	},
	componentWillUnmount: function() {
		ContactStore.unbind('change', this.onChange);
	},
	onChange: function() {
		this.setState(ContactStore.getContactForm());
	},
	onBlur: function(e) {
		ContactActions.blurField(e.target.id);
	},
	changeName: function(e) {
		ContactActions.changeName(e.target.value);
	},
	changeEmail: function(e) {
		ContactActions.changeEmail(e.target.value);
	},
	changePhone: function(e) {
		ContactActions.changePhone(e.target.value);
	},
	changeSubject: function(e) {
		ContactActions.changeSubject(e.target.value);
	},
	changeMessage: function(e) {
		ContactActions.changeMessage(e.target.value);
	},
	onSubmit: function(e) {
		e.preventDefault();
		ContactActions.sendForm();
	},
	render: function() {
		return (
			<div className='contact-form-wrapper' onSubmit={this.onSubmit}>
				<div className='content'>
					<h1 className='title-block'>Contact Us</h1>
					<div className='contact-reservation'>
						Give us a call or leave a message here if you want to make a reservation or need to contact us regarding any other matters.
						We will try to get back to you ASAP.
					</div>
					<form className='contact-form' noValidate>
						<div className={(!this.state.name.valid && this.state.name.dirty ? 'has-error ' : '') + 'form-group'}>
							<label htmlFor='name' className='control-label'>Name:* </label>
							<input 
								type='text' 
								className='form-control' 
								id='name' 
								onBlur={this.onBlur} 
								value={this.state.name.value} 
								onChange={this.changeName}
							/>
						</div>
						<div className={(!this.state.email.valid && this.state.email.dirty ? 'has-error ' : '') + 'form-group'}>
							<label htmlFor='email' className='control-label'>Email:* </label>
							<input 
								type='email' 
								className='form-control' 
								id='email' 
								value={this.state.email.value}
								onBlur={this.onBlur} 
								onChange={this.changeEmail}
							/>
						</div>
						<div className={(!this.state.phone.valid && this.state.phone.dirty ? 'has-error ' : '') + 'form-group'}>
							<label htmlFor='phone' className='control-label'>Phone Number:* </label>
							<input 
								type='text' 
								className='form-control' 
								id='phone' 
								value={this.state.phone.value}
								onBlur={this.onBlur} 
								onChange={this.changePhone}
							/>
						</div>
						<div className={(!this.state.subject.valid && this.state.subject.dirty ? 'has-error ' : '') + 'form-group'}>
							<label htmlFor='subject' className='control-label'>Subject: </label>
							<input 
								type='text' 
								className='form-control' 
								id='subject' 
								value={this.state.subject.value}
								onBlur={this.onBlur} 
								onChange={this.changeSubject}
							/>
						</div>
						<div className={(!this.state.message.valid && this.state.message.dirty ? 'has-error ' : '') + 'form-group'}>
							<label htmlFor='message' className='control-label'>Your Message:* </label>
							<textarea 
								type='text' 
								rows='3' 
								className='form-control'
								id='message' 
								value={this.state.message.value}
								onBlur={this.onBlur} 
								onChange={this.changeMessage}
							/>
						</div>
						<input 
							className='btn' 
							disabled={!this.state.valid || this.state.button.disabled} 
							value={this.state.button.value}
							type='submit'
						 />
						<div className='contact-form__response'>
							<span className={this.state.response.success && this.state.response.sent ? 'text-success' : 'response__hide'}>
								Your message was successfully sent!
							</span>
							<span className={!this.state.response.success && this.state.response.sent ? 'text-warning' : 'response__hide'}>
								There was an error sending your email. Please try phoning or emailing us directly.
							</span>
						</div>
					</form>
				</div>
			</div>
		)
	}
});