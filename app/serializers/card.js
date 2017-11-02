import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    multiverse: 'multiverseid',
    mana: 'manaCost'
  },

  normalizeQueryResponse(store, typeClass, payload) {
    const result = this._super(...arguments);

    result.meta = result.meta || {};

    if(payload['pageCount']) {
      result.meta.pageCount = payload['pageCount'];
    }

    return result;
  }

});
