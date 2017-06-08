import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    cardName: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },

  actions: {
    incrementPage() {
      if(this.currentModel.cards.meta.pageCount > this.controller.get('page')){
        this.controller.incrementProperty('page');
      }
    },
    decrementPage() {
      if(this.controller.get('page') > 1) {
        this.controller.decrementProperty('page');
      }
    }
  },

  model: function(params) {
    return Ember.RSVP.hash({
      cards: this.store.query('card', {page: params.page, name: params.cardName, orderBy: 'name'}),
      decks: this.store.findAll('deck')
    });
  }

});
