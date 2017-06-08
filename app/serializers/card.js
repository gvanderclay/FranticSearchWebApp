import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeQueryResponse(store, typeClass, payload) {
    const result = this._super(...arguments);

    result.meta = result.meta || {};

    if(payload['pageCount']) {
      result.meta.pageCount = payload['pageCount'];
      console.log('here');
    }

    return result;
  }
});
