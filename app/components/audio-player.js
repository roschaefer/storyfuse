import Ember from 'ember';

export default Ember.Component.extend({
  didRender(){
    let audio = this.$("#audio").get(0);
    audio.load();
    audio.play();
  }
});
