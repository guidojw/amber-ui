import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import IndexRouteUnauthenticated from 'alpha-amber/routes/application/index';

export default IndexRouteUnauthenticated.extend(AuthenticatedRouteMixin, {
  title: 'Statistieken',
  modelName: 'quickpost-statistic',
  canAccess() {
    return this.can('show quickpost-messages');
  }
});
