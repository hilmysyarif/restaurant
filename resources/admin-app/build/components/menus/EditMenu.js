'use strict';

var EditMenu = React.createClass({
	displayName: 'EditMenu',

	getInitialState: function getInitialState() {
		return MenuStore.getEditMenuForm();
	},
	componentDidMount: function componentDidMount() {
		MenuStore.bind('change', this.onChange);
		MenuActions.loadEditMenuForm(this.props.menuSlug);
	},
	componentWillUnmount: function componentWillUnmount() {
		MenuStore.unbind('change', this.onChange);
	},
	onChange: function onChange() {
		this.setState(MenuStore.getEditMenuForm());
	},
	changeTitle: function changeTitle(e) {
		MenuActions.changeEditMenuTitle(e.target.value);
	},
	changeDescription: function changeDescription(e) {
		MenuActions.changeEditMenuDescription(e.target.value);
	},
	onSubmit: function onSubmit(event) {
		event.preventDefault();
		MenuActions.submitEditForm();
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'edit-menu panel panel-default' },
			React.createElement(
				'h2',
				{ className: 'panel-heading' },
				'Edit Menu'
			),
			React.createElement(
				'form',
				{ noValidate: true, onSubmit: this.onSubmit, className: 'panel-body' },
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ htmlFor: 'menu-title' },
						'Menu Title: '
					),
					React.createElement('input', {
						type: 'text',
						className: 'form-control',
						id: 'menu-title',
						onChange: this.changeTitle,
						value: this.state.title
					})
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ htmlFor: 'menu-description' },
						'Menu Description: '
					),
					React.createElement('input', {
						type: 'text',
						className: 'form-control',
						id: 'menu-description',
						onChange: this.changeDescription,
						value: this.state.description
					})
				),
				React.createElement('input', { type: 'submit', className: 'btn btn-default', value: 'Save changes' })
			)
		);
	}
});