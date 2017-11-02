import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch() .then(() => {})
      .catch(function() {
      });
  },

  actions: {
    signIn: function(provider, email, password) {
      const router = this;
      this.get('session').open('firebase', {provider, email, password}).then(function() {
        router.transitionTo('card-search');
      });
    },

    signOut: function() {
      this.get('session').close();
    }
  }
});
