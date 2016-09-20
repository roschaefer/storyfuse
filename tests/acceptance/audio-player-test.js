import { test } from 'qunit';
import moduleForAcceptance from 'interactive-podcast/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | audio player');

test('index redirect to first podcast', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/episode/1', 'should redirect automatically');
  });
});


