import Ember from 'ember';
import DS from 'ember-data';

const {
  isPresent
} = Ember;

export default DS.JSONAPIAdapter.extend({
  urlForQueryRecord(query, modelName) {
    if (isPresent(query.slug)) {
      return this.urlForFindRecord(query.slug, modelName);
    }

    return this._super(...arguments);
  }
});
