import Ember from 'ember';

export default Ember.Route.extend({
  title: function(tokens) {
    return tokens.join(' | ') + ' | nbd label';
  }
});
