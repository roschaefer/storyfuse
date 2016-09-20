import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);
    let episode =  this.get('episode');
    this.set('deadEnd', (episode.get('children').get('length') < 1));
  },
});
