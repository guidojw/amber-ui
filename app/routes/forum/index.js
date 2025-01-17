import { AuthenticatedRoute } from 'alpha-amber/routes/application/application';

export default class ForumIndexRoute extends AuthenticatedRoute {
  canAccess() {
    return this.abilities.can('show forum/categories');
  }

  beforeModel() {
    this.transitionTo('forum.categories');
  }
}
