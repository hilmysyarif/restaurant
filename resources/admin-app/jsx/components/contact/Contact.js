var Contact = React.createClass({
	getInitialState: function() {
		return ContactStore.getContact();
	},
	componentDidMount: function() {
		ContactStore.bind('change', this.onChange);
		ContactActions.loadContact();
	},
	componentWillUnmount: function() {
		ContactStore.unbind('change', this.onChange);
	},
	onChange: function() {
		this.setState(ContactStore.getContact());
	},
	onSubmit: function(e) {
		e.preventDefault();
		ContactActions.saveContact();
	},
	changeEmail: function(e) {
		ContactActions.changeEmail(e.target.value);
	},
	changePhone: function(e) {
		ContactActions.changePhone(e.target.value);
	},
	changeAddress1: function(e) {
		ContactActions.changeAddress1(e.target.value);
	},
	changeAddress2: function(e) {
		ContactActions.changeAddress2(e.target.value);
	},
	changeAddress3: function(e) {
		ContactActions.changeAddress3(e.target.value);
	},
	changeAddress4: function(e) {
		ContactActions.changeAddress4(e.target.value);
	},
	changeMonday: function(e) {
		ContactActions.changeMonday(e.target.value);
	},
	changeTuesday: function(e) {
		ContactActions.changeTuesday(e.target.value);
	},
	changeWednesday: function(e) {
		ContactActions.changeWednesday(e.target.value);
	},
	changeThursday: function(e) {
		ContactActions.changeThursday(e.target.value);
	},
	changeFriday: function(e) {
		ContactActions.changeFriday(e.target.value);
	},
	changeSaturday: function(e) {
		ContactActions.changeSaturday(e.target.value);
	},
	changeSunday: function(e) {
		ContactActions.changeSunday(e.target.value);
	},
	render: function() {
		return (
			<div className='container'>
				<div className='contact panel panel-default'>
					<h2 className='panel-heading'>Contact Us</h2>
					<form noValidate className='panel-body' onSubmit={this.onSubmit}>
						<div className='form-group'>
							<label className='control-label' htmlFor='email'>Email: </label>
							<input 
								type='email' 
								id='email' 
								className='form-control' 
								value={this.state.email}
								onChange={this.changeEmail}
							/>
						</div>

						<div className='form-group'>
							<label className='control-label' htmlFor='phone'>Phone: </label>
							<input 
								type='text' 
								id='phone' 
								className='form-control' 
								value={this.state.phone}
								onChange={this.changePhone}
							/>
						</div>

						<div className='form-group'>
							<label className='control-label' htmlFor='address1'>Address: </label>
							<input 
								type='text' 
								id='address1' 
								className='form-control' 
								value={this.state.address.line1}
								onChange={this.changeAddress1}
							/>
							<input 
								type='text' 
								id='address2' 
								className='form-control' 
								value={this.state.address.line2}
								onChange={this.changeAddress2}
							/>
							<input 
								type='text' 
								id='address3' 
								className='form-control' 
								value={this.state.address.line3}
								onChange={this.changeAddress3}
							/>
							<input 
								type='text' 
								id='address4' 
								className='form-control' 
								value={this.state.address.line4}
								onChange={this.changeAddress4}
							/>
						</div>

						<h3>Opening Hours</h3>
						<div className='form-group'>
							<label className='control-label' htmlFor='monday'>Monday: </label>
							<input 
								type='text' 
								id='monday' 
								className='form-control' 
								value={this.state.hours.monday}
								onChange={this.changeMonday}
							/>
							<label className='control-label' htmlFor='tuesday'>Tuesday: </label>
							<input 
								type='text' 
								id='tuesday' 
								className='form-control' 
								value={this.state.hours.tuesday}
								onChange={this.changeTuesday}
							/>
							<label className='control-label' htmlFor='wednesday'>Wednesday: </label>
							<input 
								type='text' 
								id='wednesday' 
								className='form-control' 
								value={this.state.hours.wednesday}
								onChange={this.changeWednesday}
							/>
							<label className='control-label' htmlFor='thursday'>Thursday: </label>
							<input 
								type='text' 
								id='thursday' 
								className='form-control' 
								value={this.state.hours.thursday}
								onChange={this.changeThursday}
							/>
							<label className='control-label' htmlFor='friday'>Friday: </label>
							<input 
								type='text' 
								id='friday' 
								className='form-control' 
								value={this.state.hours.friday}
								onChange={this.changeFriday}
							/>
							<label className='control-label' htmlFor='saturday'>Saturday: </label>
							<input 
								type='text' 
								id='saturday' 
								className='form-control' 
								value={this.state.hours.saturday}
								onChange={this.changeSaturday}
							/>
							<label className='control-label' htmlFor='sunday'>Sunday: </label>
							<input 
								type='text' 
								id='sunday' 
								className='form-control' 
								value={this.state.hours.sunday}
								onChange={this.changeSunday}
							/>
						</div>

						<input type='submit' value='Save changes' className='btn btn-default' />

						<div className={this.state.response.sent ? 'response-messages' : 'hidden'}>
							<span className={this.state.response.saved ? 'text-success' : 'hidden'}>Changes were saved!</span>
							<span className={!this.state.response.saved ? 'text-danger' : 'hidden'}>Changes were not saved! Try refresh and try again</span>
						</div>
					</form>
				</div>
			</div>
		)
	}
});