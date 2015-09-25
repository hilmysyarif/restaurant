'use strict';

var AddMenuItem = React.createClass({
	displayName: 'AddMenuItem',

	getInitialState: function getInitialState() {
		return MenuItemStore.getMenuItemForm();
	},
	componentDidMount: function componentDidMount() {
		MenuItemStore.bind('change', this.onChange);
		MenuItemActions.loadMenuItems(this.props.menuSlug);
	},
	componentWillUnmount: function componentWillUnmount() {
		MenuItemStore.unbind('change', this.onChange);
	},
	onChange: function onChange() {
		this.setState(MenuItemStore.getMenuItemForm());
	},
	changeTitle: function changeTitle(e) {
		MenuItemActions.changeAddMenuItemTitle(e.target.value);
	},
	changeDescription: function changeDescription(e) {
		MenuItemActions.changeAddMenuItemDescription(e.target.value);
	},
	changePrice: function changePrice(e) {
		MenuItemActions.changeAddMenuItemPrice(e.target.value);
	},
	addMenuItem: function addMenuItem(e) {
		e.preventDefault();
		MenuItemActions.addMenuItem();
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'panel panel-default' },
			React.createElement(
				'h2',
				{ className: 'panel-heading' },
				'Add Menu Item'
			),
			React.createElement(
				'form',
				{ noValidate: true, onSubmit: this.addMenuItem, className: 'panel-body' },
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ className: 'control-label', htmlFor: 'menu-item-title' },
						'Item title:'
					),
					React.createElement('input', {
						className: 'form-control',
						type: 'text',
						id: 'menu-item-title',
						value: this.state.title,
						onChange: this.changeTitle
					})
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ className: 'control-label', htmlFor: 'menu-item-description' },
						'Item description:'
					),
					React.createElement('input', {
						className: 'form-control',
						type: 'text',
						id: 'menu-item-description',
						value: this.state.description,
						onChange: this.changeDescription
					})
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ className: 'control-label', htmlFor: 'menu-item-price' },
						'Item price:'
					),
					React.createElement('input', {
						className: 'form-control',
						type: 'text',
						id: 'menu-item-price',
						value: this.state.price,
						onChange: this.changePrice
					})
				),
				React.createElement('input', { type: 'submit', className: 'btn btn-default', value: 'Add Item', disabled: this.state.title.length < 1 })
			)
		);
	}
});