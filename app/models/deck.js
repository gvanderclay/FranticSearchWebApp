import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  deckName: DS.attr(),
  cards: DS.hasMany('card', {async: true, inverse: null}),

  isNameEmpty: Ember.computed.empty('deckName')
});
