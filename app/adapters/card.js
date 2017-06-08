import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.magicthegathering.io/v1',

  handleResponse(status, headers, payload, requestData) {
    if(headers && headers['total-count']) {
      payload['pageCount'] = Math.ceil(headers['total-count'] / 100);
    }

    return this._super(status, headers, payload, requestData);
  }
});
