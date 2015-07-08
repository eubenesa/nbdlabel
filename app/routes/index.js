import Ember from 'ember';
import RouteMetaMixin from 'ember-cli-meta-tags/mixins/route-meta';

var title = 'nbd label';

export default Ember.Route.extend(RouteMetaMixin, {
  title: title,
  meta: {
    'property': {
      'og:title': title,
      'og:url': 'http://www.nbdlabel.com/'
    }
  }
});
