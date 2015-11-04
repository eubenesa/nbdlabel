import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  cover: DS.attr('string'),
  artist: DS.attr('string'),
  title: DS.attr('string'),
  format: DS.attr('string'),
  releasedAt: DS.attr('date'),
  blurb: DS.attr('string'),
  bandcamp: DS.attr('string'),
  itunes: DS.attr('string'),
  spotify: DS.attr('string'),

  nbdId: Ember.computed('id', function() {
    let id = this.get('id');
    if (id < 10) {
      id = 'nbd00' + id;
    } else if (id < 100) {
      id = 'nbd0' + id;
    }
    return id;
  })
});
