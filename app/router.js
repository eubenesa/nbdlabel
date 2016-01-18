import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('artists');
  this.route('artist', { path: '/artists/:slug' });
  this.route('listen');
  this.route('releases');
  this.route('release', { path: '/releases/:slug' });
  this.route('contact');
});

export default Router;
