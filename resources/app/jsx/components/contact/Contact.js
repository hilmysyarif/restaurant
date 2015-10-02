var Contact = React.createClass({
	getInitialState: function() {
		return ContactStore.getContactDetails();
	},
	componentDidMount: function() {
		ContactStore.bind('change', this.onChange);
		ContactActions.loadContactDetails();
	},
	componentWillUnmount: function() {
		ContactStore.unbind('change', this.onChange);
	},
	onChange: function() {
		this.setState(ContactStore.getContactDetails());
	},
	render: function() {
		return (
			<div className='contact'>
				<div className='contact-main'>
					<ContactForm />
					<section className='contact-details-hours'>
						<ContactDetails details={this.state} />
						<OpeningHours hours={this.state.hours} />
					</section>
				</div>
				<GoogleMap />
			</div>
		)
	}
});