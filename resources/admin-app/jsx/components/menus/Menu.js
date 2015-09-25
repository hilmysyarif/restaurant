var Menu = React.createClass({
	render: function() {
		return (
			<div className='menu container'>
				<EditMenu menuSlug={this.props.params.menuSlug} />
				<AddMenuItem menuSlug={this.props.params.menuSlug} />
				<MenuItems menuSlug={this.props.params.menuSlug} />
			</div>
		)
	}
});