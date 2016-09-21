import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'podcast-player',
  ancestors: [],
  didReceiveAttrs() {
    this._super(...arguments);
    let episode =  this.get('episode');
    let next = episode.get('children').objectAt(0);
    let parent = episode.get('parent');
    this.set('next', next);
    this.set('parent', parent);
    if (parent.get('id')) {
      let alternatives = parent.get('children').reject((a) => {
        return a === episode;
      });
      let firstAlternative = alternatives.objectAt(0);
      let secondAlternative = alternatives.objectAt(1);
      this.set('firstAlternative', firstAlternative);
      this.set('secondAlternative', secondAlternative);

      this.set('ancestors', []);
      let ancestorParent = parent;
      while(ancestorParent.get('id')){
        this.get('ancestors').addObject(ancestorParent);
        ancestorParent = ancestorParent.get('parent');
      }
      this.get('ancestors').reverse();
      console.log(this.get('ancestors'));

    }

  }
});
