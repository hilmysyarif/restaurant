var About = React.createClass({
	getInitialState: function() {
		return {
			aboutUs: AboutStore.getAboutUs(),
			philosophy: AboutStore.getPhilosophy()
		};
	},
	render: function() {
		return (
			<div className='about'>
				<section className='about-content'>
					<AboutBlock title={this.state.aboutUs.title} paragraphs={this.state.aboutUs.paragraphs} />
					<AboutBlock title={this.state.philosophy.title} paragraphs={this.state.philosophy.paragraphs} />
				</section>
				<Gallery />
			</div>
		)
	}
});