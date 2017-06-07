/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frantic-search',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    browserify: {
      ignores: ['cls-bluebird']
    },
    firebase: {
      apiKey: "AIzaSyAh9vLjNzM6zNJczsI3z8C2Jtx8Qv5N5Jc",
      authDomain: "franticsearch-228c1.firebaseapp.com",
      databaseURL: "https://franticsearch-228c1.firebaseio.com",
      projectId: "franticsearch-228c1",
      storageBucket: "franticsearch-228c1.appspot.com",
      messagingSenderId: "606635698993"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
