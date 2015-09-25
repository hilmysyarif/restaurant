var ContactDetails = React.createClass({
	render: function() {
		return (
			<div className='contact-details-wrapper'>
				<div className='content'>
					<h2 className='title-block'>Contact Details</h2>
					<div className='contact-details'>
						<div className='contact-details__group'>
							<div className='contact-details__label'>Phone: </div>
							<div className='contact-details__text'>{this.props.details.phone}</div>
						</div>
						<div className='contact-details__group'>
							<div className='contact-details__label'>Email: </div>
							<div className='contact-details__text'>{this.props.details.email}</div>
						</div>
						<div className='contact-details__group'>
							<div className='contact-details__label'>Address: </div>
							<div className='contact-details__text'>
								{this.props.details.address.line1}<br />
								{this.props.details.address.line2}<br />
								{this.props.details.address.line3}<br />
								{this.props.details.address.line4}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});