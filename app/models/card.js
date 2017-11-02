import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  imageUrl: DS.attr(),
  mana: DS.attr(),
  multiverse: DS.attr(),
  rarity: DS.attr(),
  set: DS.attr(),
  type: DS.attr(),
  types: DS.attr('string')
});
