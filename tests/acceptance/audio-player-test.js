import { test } from 'qunit';
import moduleForAcceptance from 'interactive-podcast/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | audio player');

test('index redirect to first podcast', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/podcasts/1', 'should redirect automatically');
  });
});

test('click on the start button starts the first episode', function (assert) {
  click('Start');
  andThen(function() {
    assert.equal(currentURL(), '/podcasts/1/episode/1', 'brings me to the first episode');
  });
});

