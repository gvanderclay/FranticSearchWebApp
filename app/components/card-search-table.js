import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    increment() {
      this.sendAction('increment');
    },

    decrement() {
      this.sendAction('decrement');
    },

    addTo(card, deck) {
      this.sendAction('addTo', card, deck);
    }
  }
});
