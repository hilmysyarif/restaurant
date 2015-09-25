var About = React.createClass({
	getInitialState: function() {
		var aboutUsText = `<p>Takapuna Beach Café is located on The Promenade at Takapuna beach with 
		panoramic views of Rangitoto & Waitemata Harbour.</p>
		<p>We are committed to serving a menu for all occasions, freshly baked artisan bread & pastries, 
		multi award winning gelato & the best fish & chips in Auckland.</p>
		<p>We believe in working with the best seasonal produce available, making and growing as much as possible 
		ourselves on our farm in Kumeu to provide a taste and experience that only the highest quality can achieve.</p>
		<p>We look forward to welcoming you to Takapuna Beach Café where we will look after you all.</p>`;

		var philosophyText = `<p>Every day, there’s one thing that occupies our minds more than anything else. How to 
		create the best possible experience for you, our guest. </p>
		<p>In fact, our General Manager Irene and Head Chef Pawan – and the teams of talented, passionate people they lead – 
		arrive here every single morning with one goal in mind. To create fantastic customer experiences.</p>
		<p>Being passionate about provenance, much of our fresh produce gets delivered daily from our own farm in Kumeu - and 
		if it hasn’t come from there, it will be from one of a close circle of hand-picked growers who are as passionate 
		about sustainable, high-quality farming as we are.</p>
		<p>Our group Butcher based in Kumeu prepares most of our protein which comes directly from the farmers. 
		We know the animals have been humanely raised in a healthy, sustainable environment. </p>
		<p>Our meat can now also be purchased online at www.thebutchery.co.nz. Our fish and poultry come from partners who share 
		our commitment to the environment and sustainability. Our bread is handmade at The Store in Britomart by Daniel 
		Cruden and his team of artisan bakers.</p>
		<p>Using natural, seasonal ingredients that are churned daily on site, our chefs have created a truly artisan 
		gelato that has been winning national awards since 2008.</p>
		<p>Our team at patisserie and dessert restaurant, Milse in Britomart, painstakingly craft all of our cakes, pastries and desserts.</p>
		<p>So we hope that when you leave, our passion for provenance will have contributed to your enjoyment of the 
		Takapuna Beach Cafe experience.</p>`;

		return {
			aboutUs: {
				title: 'About Us',
				text: aboutUsText
			},
			philosophy: {
				title: 'Our Philosophy',
				text: philosophyText
			}
		};
	},
	render: function() {
		return (
			<div className='about'>
				<div className='about-content'>
					<AboutBlock title={this.state.aboutUs.title} text={this.state.aboutUs.text} />
					<AboutBlock title={this.state.philosophy.title} text={this.state.philosophy.text} />
				</div>
				<Gallery />
			</div>
		)
	}
});