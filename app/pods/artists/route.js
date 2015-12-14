import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('artist').then((artists) => {
      return artists.sortBy('name');
    });
  }
});
