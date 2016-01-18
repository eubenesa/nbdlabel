import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  slug: DS.attr(),
  photo: DS.attr(),
  photoBy: DS.attr(),
  blurb: DS.attr(),
  soundcloud: DS.attr(),
  bandcamp: DS.attr(),
  instagram: DS.attr(),
  facebook: DS.attr(),
  twitter: DS.attr()
});
