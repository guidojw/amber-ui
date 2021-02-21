import { AuthenticatedRoute } from 'alpha-amber/routes/application/application';
import { inject as service } from '@ember/service';
import { assign } from '@ember/polyfills';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default class PostIndexRoute extends AuthenticatedRoute.extend(RouteMixin) {
  @service router
  @service fetch

  get breadCrumb() {
    return { title: this.controller.model.thread.title };
  }

  get pageActions() {
    return [
      {
        link: 'forum.categories.category.threads.thread.edit',
        title: 'Wijzigen',
        icon: 'pencil-alt',
        linkArgument: this.controller.model.thread,
        canAccess: this.can.can('edit forum/threads')
      },
      {
        link: 'forum.categories.category.threads.thread.destroy',
        title: 'Verwijderen',
        icon: 'trash',
        linkArgument: this.controller.model.thread,
        canAccess: this.can.can('destroy forum/threads')
      }
    ];
  }

  canAccess() {
    return this.can.can('show forum/posts');
  }

  model(params) {
    const category = this.modelFor('forum.categories.category');
    const thread = this.modelFor('forum.categories.category.threads.thread');
    assign(params, {
      paramMapping: this.paramMapping,
      filter: { thread: thread.id },
      sort: 'created_at'
    });
    const postsPromise = this.findPaged('forum/post', params);

    return {
      category,
      thread,
      posts: postsPromise
    };
  }

  constructor() {
    super(...arguments);

    this.router.on('routeDidChange', () => {
      const thread = this.modelFor('forum.categories.category.threads.thread');
      this.fetch.fetch(`/forum/threads/${thread.id}/mark_read`, { method: 'POST' });
    });
  }
}
