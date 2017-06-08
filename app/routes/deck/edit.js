import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('deck', params.deck_id, {include: 'cards'});
  }
});
