import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  parent: DS.belongsTo('episode'),
  children: DS.hasMany('episode', { inverse: 'parent' }),

});
