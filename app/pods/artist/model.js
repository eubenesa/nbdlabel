import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  photo: DS.attr('string'),
  photoBy: DS.attr('string'),
  blurb: DS.attr('string'),
  soundcloud: DS.attr('string'),
  bandcamp: DS.attr('string'),
  instagram: DS.attr('string'),
  facebook: DS.attr('string'),
  twitter: DS.attr('string')
});
