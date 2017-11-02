import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('deck', params.deck_id, {include: 'cards'});
  },

  actions: {
    updateDeckName(newName) {
      this.currentModel.set('deckName', newName);
      this.currentModel.save();
    }
  }
});
