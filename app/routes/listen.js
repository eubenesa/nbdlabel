import Ember from 'ember';
import RouteMetaMixin from 'ember-cli-meta-tags/mixins/route-meta';

var title = 'listen';

export default Ember.Route.extend(RouteMetaMixin, {
  titleToken: title,
  meta: {
    'property': {
      'og:title': title + ' | nbd label',
      'og:url': 'http://www.nbdlabel.com/' + title
    }
  }
});
