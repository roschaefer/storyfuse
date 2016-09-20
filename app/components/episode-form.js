import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createNewEpisode(){
      let title = this.get('title');
      let url   = this.get('url');
      let createAction = this.get('createAction');
      createAction({title,url});
    }
  }
});
