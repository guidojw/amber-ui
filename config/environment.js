/* eslint-env node */
'use strict';

module.exports = function(environment) {
  const deployTarget = process.env.DEPLOY_TARGET;

  const ENV = {
    modulePrefix: 'alpha-amber',
    environment,
    rootURL: '/',
    api: {
      hostname: '/api/v1'
    },

    moment: {
      includeLocales: ['nl'],
      allowEmpty: true
    },

    showdown: {
      // text www.x.nl will render <p>text <a href="www.x.nl">www.x.nl</a></p>
      simplifiedAutoLink: true,

      // `# Foo` will render as <h3>Foo</h3>
      headerLevelStart: 2,

      // | h1    |    h2   |      h3 |
      // |:------|:-------:|--------:|
      // | 100   | [a][1]  | ![b][2] |
      tables: true,

      // ![foo](foo.jpg =100x80)
      parseImgDimensions: true,

      // Parses `\n` as <br>, without needing 2 spaces at the end
      simpleLineBreaks: true,

      // ~~strikethrough~~
      strikethrough: true
    },

    // FontAwesome
    fontawesome: {
      // Regular icons as default
      defaultPrefix: 'fas'
    },

    locationType: 'auto',
    historySupportMiddleware: true,
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      flashNoticeDefaultDuration: 2000
    },

    maxFilesize: 8.5 // MB
  };

  if (environment === 'development') {
    ENV.clientId = '123456789';

    // Disable mirage in development
    ENV['ember-cli-mirage'] = {
      enabled: false,
      excludeFilesFromBuild: true
    };

    // When true, log all access and permission lookups in the console.
    ENV.APP.LOG_ACCESS_CONTROL = true;
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // Keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.flashNoticeDefaultDuration = 1;
  }

  ENV['@sentry/ember'] = {
    sentry: {
      dsn: 'https://invalid@sentry.io/12345', // invalid key, will be replaced when run as prod
      environment: deployTarget,
      release: `amber-ui@${process.env.BUILD_HASH}`
    }
  };

  if (environment === 'production') {
    ENV['@sentry/ember'].sentry.dsn = 'https://8936a95696f7453ab03e59264a7fede8@sentry.io/186017';
  }

  if (deployTarget === 'production') {
    ENV.clientId = 'IIeYVVbdNhiSiSCxKP5eUgS5Vs1-9ccZEvISdCVqe5g';
    ENV.googleAnalytics = { webPropertyId: 'UA-8136462-4' };
  }

  if (deployTarget === 'staging') {
    ENV.clientId = 'rY_z6I7WAhNjzcIi3B4SB4KelwogD2BUK25D7vn9g1g';
  }

  return ENV;
};
