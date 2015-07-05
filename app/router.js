import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('artists', function() {
  });
  this.route('listen');
  this.route('contact');
});

export default Router;
