import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nbd-header', 'Integration | Component | nbd header', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nbd-header}}`);

  assert.equal(this.$('a:nth-child(2)').text().trim(), 'artists');

  // Template block usage:
  this.render(hbs`
    {{#nbd-header}}
      template block text
    {{/nbd-header}}
  `);

  assert.equal(this.$('a:nth-child(2)').text().trim(), 'artists');
});
