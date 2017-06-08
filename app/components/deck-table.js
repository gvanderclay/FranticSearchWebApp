import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(deck) {
      this.sendAction("delete", deck);
    }
  }
});
