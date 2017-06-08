import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('card-search');
  this.route('decks');

  this.route('deck', function() {
    this.route('edit', {path: '/:deck_id'});
  });
});

export default Router;
