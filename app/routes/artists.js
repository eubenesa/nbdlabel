import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'artists',
  model: function() {
    return [
      {
        id: 1,
        name: 'mesa luna',
        imgUrl: 'assets/images/mesa-luna.jpg',
        blurb: 'mesa luna raw denim banjo heirloom lumbersexual, master cleanse health goth skateboard kale chips. Scenester bitters cray organic, slow-carb synth mlkshk distillery chillwave skateboard. Ugh Pitchfork occupy beard, Carles irony chillwave lo-fi cray brunch Vice PBR&B Tumblr twee. Ethical biodiesel next level church-key health goth cornhole. Direct trade Neutra Blue Bottle, banjo sriracha post-ironic Odd Future heirloom quinoa. Mumblecore pour-over fingerstache irony, hella vinyl selfies viral flannel kogi ethical paleo. Taxidermy Neutra pour-over single-origin coffee artisan.',
        scUrl: 'https://soundcloud.com/mesaluna',
        instaUrl: 'https://instagram.com/mesa_luna',
        fbUrl: 'https://www.facebook.com/mesaluna',
        twUrl: 'https://twitter.com/mesa_luna_'
      },
      {
        id: 2,
        name: 'avid walker',
        imgUrl: 'assets/images/avid-walker.jpg',
        blurb: 'avid walker raw denim banjo heirloom lumbersexual, master cleanse health goth skateboard kale chips. Scenester bitters cray organic, slow-carb synth mlkshk distillery chillwave skateboard. Ugh Pitchfork occupy beard, Carles irony chillwave lo-fi cray brunch Vice PBR&B Tumblr twee. Ethical biodiesel next level church-key health goth cornhole. Direct trade Neutra Blue Bottle, banjo sriracha post-ironic Odd Future heirloom quinoa. Mumblecore pour-over fingerstache irony, hella vinyl selfies viral flannel kogi ethical paleo. Taxidermy Neutra pour-over single-origin coffee artisan.',
        scUrl: 'https://soundcloud.com/avidwalker',
        instaUrl: 'https://instagram.com/avid_walker',
        fbUrl: '',
        twUrl: ''
      }
    ];
  }
});
