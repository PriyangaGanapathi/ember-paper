import Ember from 'ember';

export default Ember.Route.extend({
	setupController(controller, model) {
		this._super(...arguments);

		controller.setProperties({
			'employees': [	{id:1,name:'user 1'},
							{id:2,name:'user 2'},
							{id:3,name:'user 3'},
							{id:4,name:'user 4'},
							{id:5,name:'user 5'}]
						});
	}
});
