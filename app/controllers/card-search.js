import Ember from 'ember';

const INITIAL_PAGE = 1;

export default Ember.Controller.extend({

  queryParams: ['cardName'],
  cardName: "",
  page: INITIAL_PAGE,

  actions: {
    updateCardName(newName) {
      this.set('page', INITIAL_PAGE);
      this.set('cardName', newName);
    },

    addToDeck(card, deck) {
      console.log(card);
    }
  }

});
