import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'alpha-amber/config/environment';
import { InitSentryForEmber } from '@sentry/ember';

if (config.environment === 'production') {
  InitSentryForEmber();
}

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
