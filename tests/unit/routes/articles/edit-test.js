import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | articles/edit', function(hooks) {
  setupTest(hooks);

  test('it has a correct modelName', function(assert) {
    const route = this.owner.lookup('route:articles/edit');

    assert.equal('article', route.get('modelName'));
  });
});
