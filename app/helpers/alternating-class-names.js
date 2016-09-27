import Ember from 'ember';

export function alternatingClassNames(index) {
  let rest = index % 3;
  switch(rest) {
    case 0:
      return "ui mini circular red inverted segment";
    case 1:
      return "ui mini circular green inverted segment";
    case 2:
      return "ui mini circular blue inverted segment";
    default:
      return "";
  }

}

export default Ember.Helper.helper(alternatingClassNames);
