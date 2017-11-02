import Ember from 'ember';

export default Ember.Component.extend({
  ref: Ember.inject.service('firebase'),
  session: Ember.inject.service('session'),

  actions: {
    addToDeck(card, deck) {
      const ref = this.get('ref');
      const currentUid = this.get('session.currentUser.uid');
      console.log(currentUid);
      const cardRef = ref.child(`Decks/${currentUid}/${deck.id}/cards/${card.id}`);
      cardRef.once("value", (snapshot) => {
        const exists = (snapshot.val() !== null);
        if(exists) {
          cardRef.transaction((card) => {
            if(card && card.count) {
              card.count = card.count + 1;
            }
            return card;
          });
        } else {
          cardRef.set(Ember.assign({count: 1}, card.toJSON()));
        }
      });

    },

    deleteFromDeck(card, deck) {
      deck.get('cards').removeObject(card);
      deck.save();
    }
  }
});
