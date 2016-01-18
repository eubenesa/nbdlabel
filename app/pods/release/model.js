import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  cover: DS.attr(),
  artist: DS.attr(),
  title: DS.attr(),
  slug: DS.attr(),
  format: DS.attr(),
  releasedAt: DS.attr('date'),
  blurb: DS.attr(),
  bandcamp: DS.attr(),
  itunes: DS.attr(),
  spotify: DS.attr(),

  nbdId: Ember.computed('id', function() {
    let id = this.get('id');
    if (id < 10) {
      id = 'nbd00' + id;
    // } else if (id < 100) {
    //   id = 'nbd0' + id;
    }
    return id;
  })
});
