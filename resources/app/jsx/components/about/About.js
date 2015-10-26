var About = React.createClass({
	getInitialState: function() {
		return {
			aboutUs: {
				title: 'About Us',
				paragraphs: AboutStore.getAboutUs()
			},
			philosophy: {
				title: 'Our Philosophy',
				paragraphs: AboutStore.getPhilosophy()
			}
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