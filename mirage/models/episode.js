import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  parent: belongsTo('episode'),
  children: hasMany('episode' ),
});
