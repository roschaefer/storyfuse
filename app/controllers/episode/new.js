import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createEpisode(attrs){
      console.log(attrs);
      let parentEpisode = this.get('model');
      let episode = this.get('store').createRecord('episode', {
          title,
          url
      });
      episode.save();
    }
  }
});
