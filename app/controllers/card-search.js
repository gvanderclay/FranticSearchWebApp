import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['cardName'],
  cardName: "",
  page: 1,

  actions: {
    updateCardName(newName) {
      this.set('page', 1);
      this.set('cardName', newName);
    }
  }

});
