import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | books/destroy', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:books/destroy');
    assert.ok(route);
  });
});
