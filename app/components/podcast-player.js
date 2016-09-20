import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);
    let episode =  this.get('episode');
    console.log(episode);
    let deadEnd = (episode.get('children').get('length') < 1);
    this.set('deadEnd', deadEnd);
    if (!deadEnd) {
      let children = episode.get('children');
      let nextEpisode = children.objectAt(0);
      console.log(nextEpisode);
      this.set('nextEpisode', nextEpisode);
    }
  },
});
