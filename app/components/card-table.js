import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addToDeck(card, deck) {
      deck.get('cards').pushObject(card);
      deck.save();
    },
    deleteFromDeck(card, deck) {
      deck.get('cards').removeObject(card);
    }
  }
});
