'use strict';

var About = React.createClass({
	displayName: 'About',

	getInitialState: function getInitialState() {
		var aboutUsText = '<p>Takapuna Beach Café is located on The Promenade at Takapuna beach with \n\t\tpanoramic views of Rangitoto & Waitemata Harbour.</p>\n\t\t<p>We are committed to serving a menu for all occasions, freshly baked artisan bread & pastries, \n\t\tmulti award winning gelato & the best fish & chips in Auckland.</p>\n\t\t<p>We believe in working with the best seasonal produce available, making and growing as much as possible \n\t\tourselves on our farm in Kumeu to provide a taste and experience that only the highest quality can achieve.</p>\n\t\t<p>We look forward to welcoming you to Takapuna Beach Café where we will look after you all.</p>';

		var philosophyText = '<p>Every day, there’s one thing that occupies our minds more than anything else. How to \n\t\tcreate the best possible experience for you, our guest. </p>\n\t\t<p>In fact, our General Manager Irene and Head Chef Pawan – and the teams of talented, passionate people they lead – \n\t\tarrive here every single morning with one goal in mind. To create fantastic customer experiences.</p>\n\t\t<p>Being passionate about provenance, much of our fresh produce gets delivered daily from our own farm in Kumeu - and \n\t\tif it hasn’t come from there, it will be from one of a close circle of hand-picked growers who are as passionate \n\t\tabout sustainable, high-quality farming as we are.</p>\n\t\t<p>Our group Butcher based in Kumeu prepares most of our protein which comes directly from the farmers. \n\t\tWe know the animals have been humanely raised in a healthy, sustainable environment. </p>\n\t\t<p>Our meat can now also be purchased online at www.thebutchery.co.nz. Our fish and poultry come from partners who share \n\t\tour commitment to the environment and sustainability. Our bread is handmade at The Store in Britomart by Daniel \n\t\tCruden and his team of artisan bakers.</p>\n\t\t<p>Using natural, seasonal ingredients that are churned daily on site, our chefs have created a truly artisan \n\t\tgelato that has been winning national awards since 2008.</p>\n\t\t<p>Our team at patisserie and dessert restaurant, Milse in Britomart, painstakingly craft all of our cakes, pastries and desserts.</p>\n\t\t<p>So we hope that when you leave, our passion for provenance will have contributed to your enjoyment of the \n\t\tTakapuna Beach Cafe experience.</p>';

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
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'about' },
			React.createElement(
				'section',
				{ className: 'about-content' },
				React.createElement(AboutBlock, { title: this.state.aboutUs.title, text: this.state.aboutUs.text }),
				React.createElement(AboutBlock, { title: this.state.philosophy.title, text: this.state.philosophy.text })
			),
			React.createElement(Gallery, null)
		);
	}
});