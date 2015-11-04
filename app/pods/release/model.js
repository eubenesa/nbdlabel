import DS from 'ember-data';

export default DS.Model.extend({
  cover: DS.attr('string'),
  artist: DS.attr('string'),
  title: DS.attr('string'),
  format: DS.attr('string'),
  releasedAt: DS.attr('date'),
  blurb: DS.attr('string'),
  bandcamp: DS.attr('string'),
  itunes: DS.attr('string'),
  spotify: DS.attr('string')
});
