'use strict';

var AddMenu = React.createClass({
	displayName: 'AddMenu',

	getInitialState: function getInitialState() {
		return {
			addMenu: MenuStore.getAddMenuForm()
		};
	},
	componentDidMount: function componentDidMount() {
		MenuStore.bind('change', this.onChange);
	},
	componentWillUnmount: function componentWillUnmount() {
		MenuStore.unbind('change', this.onChange);
	},
	onChange: function onChange() {
		this.setState({ addMenu: MenuStore.getAddMenuForm() });
	},
	newMenuChange: function newMenuChange(e) {
		MenuActions.changeAddMenuTitle(e.target.value);
	},
	menuDescriptionChange: function menuDescriptionChange(e) {
		MenuActions.changeAddMenuDescription(e.target.value);
	},
	onSubmit: function onSubmit(e) {
		e.preventDefault();
		MenuActions.addMenu();
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'panel panel-default' },
			React.createElement(
				'h2',
				{ className: 'panel-heading' },
				'Add New Menu'
			),
			React.createElement(
				'form',
				{ noValidate: true, onSubmit: this.onSubmit, className: 'panel-body' },
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ htmlFor: 'new-menu', className: 'control-label' },
						' New Menu Title: '
					),
					React.createElement('input', {
						type: 'text',
						id: 'new-menu',
						className: 'form-control',
						onChange: this.newMenuChange,
						value: this.state.addMenu.title
					})
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ htmlFor: 'new-menu-description', className: 'control-label' },
						' New Menu Description: '
					),
					React.createElement('input', {
						type: 'text',
						id: 'new-menu-description',
						className: 'form-control',
						onChange: this.menuDescriptionChange,
						value: this.state.addMenu.description
					})
				),
				React.createElement('input', { type: 'submit', className: 'btn btn-default', disabled: this.state.addMenu.title.length === 0, value: 'Add New Menu' }),
				React.createElement(
					'div',
					{ className: 'response-messages' },
					React.createElement(
						'span',
						{ className: this.state.addMenu.menuAdded ? 'text-success' : 'hidden' },
						'Menu was added!'
					),
					React.createElement(
						'span',
						{ className: this.state.addMenu.menuAddedError ? 'text-danger' : 'hidden' },
						'There was an error adding the menu. Please make sure the menu name is unique.'
					)
				)
			)
		);
	}
});