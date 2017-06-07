import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr(),
  cards: DS.hasMany('card'),

  isValid: Ember.computed.empty('title')
});
