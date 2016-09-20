import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);
    let episode =  this.get('episode');
    let deadEnd = (episode.get('children').get('length') < 1);
    this.set('deadEnd', deadEnd);
  },
  didRender(){
    let episode = this.get('episode');
    this.$("#audio-source").attr('src', episode.get('url'));
    let audio = this.$("#audio").get(0);
    audio.load();
    audio.play();
  }
});
