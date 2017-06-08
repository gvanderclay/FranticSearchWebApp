import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  deckName: DS.attr(),
  cards: DS.hasMany('card'),

  isNameEmpty: Ember.computed.empty('deckName')
});
