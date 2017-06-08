import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('deck');
  },

  actions: {
    createNewDeck() {
      const newDeck = this.store.createRecord('deck', {
        deckName: "New Deck",
        cards: []
      });
      newDeck.save();
    },

    deleteDeck(deck) {
      const confirmation = confirm(`Are you sure?`);
      if(confirmation) {
        deck.destroyRecord();
      }
    }
  }
});
