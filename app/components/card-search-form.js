import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    updateCardName(name) {
      this.sendAction('update', name);
    }
  }
});
