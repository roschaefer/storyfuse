import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createEpisode(attrs){
      console.log(attrs);
      let parentEpisode = this.get('model');
      let episode = this.get('store').createRecord('episode', attrs);
      episode.set('parent', parentEpisode);

      episode.save().then(() => {
        console.log(episode);
        this.transitionToRoute('episode', episode);
      });
    }
  }
});
