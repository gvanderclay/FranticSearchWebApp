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
      if(this.currentModel.meta.pageCount > this.controller.get('page')){
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
    return this.store.query('card', {page: params.page, name: params.cardName});
  }

});
