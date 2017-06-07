import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    increment() {
      this.sendAction('increment');
    },

    decrement() {
      this.sendAction('decrement');
    }
  }
});
