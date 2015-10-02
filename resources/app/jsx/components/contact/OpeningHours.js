var OpeningHours = React.createClass({
	render: function() {
		return (
			<div className='opening-hours-wrapper'>
				<article className='content'>
					<h2 className='title-block'>Opening Hours</h2>
					<div className='opening-hours'>
						<div className='opening-hours__group'>
							<div className='opening-hours__label'>Monday:</div>
							<div className='opening-hours__text'>{this.props.hours.monday}</div>
						</div>
						<div className='opening-hours__group'>
							<div className='opening-hours__label'>Tuesday:</div>
							<div className='opening-hours__text'>{this.props.hours.tuesday}</div>
						</div>
						<div className='opening-hours__group'>
							<div className='opening-hours__label'>Wednesday:</div>
							<div className='opening-hours__text'>{this.props.hours.wednesday}</div>
						</div>
						<div className='opening-hours__group'>
							<div className='opening-hours__label'>Thursday:</div>
							<div className='opening-hours__text'>{this.props.hours.thursday}</div>
						</div>
						<div className='opening-hours__group'>
							<div className='opening-hours__label'>Friday:</div>
							<div className='opening-hours__text'>{this.props.hours.friday}</div>
						</div>
						<div className='opening-hours__group'>
							<div className='opening-hours__label'>Saturday:</div>
							<div className='opening-hours__text'>{this.props.hours.saturday}</div>
						</div>
						<div className='opening-hours__group'>
							<div className='opening-hours__label'>Sunday:</div>
							<div className='opening-hours__text'>{this.props.hours.sunday}</div>
						</div>
					</div>
				</article>
			</div>
		)
	}
});