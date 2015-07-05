import DS from 'ember-data';

var Artist = DS.Model.extend({
  name: DS.attr('string'),
  imageUrl: DS.attr('string'),
  blurb: DS.attr('string')
});

Artist.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'mesa luna',
      imageUrl: 'assets/images/mesa-luna.jpg',
      blurb: 'mesa luna raw denim banjo heirloom lumbersexual, master cleanse health goth skateboard kale chips. Scenester bitters cray organic, slow-carb synth mlkshk distillery chillwave skateboard. Ugh Pitchfork occupy beard, Carles irony chillwave lo-fi cray brunch Vice PBR&B Tumblr twee. Ethical biodiesel next level church-key health goth cornhole. Direct trade Neutra Blue Bottle, banjo sriracha post-ironic Odd Future heirloom quinoa. Mumblecore pour-over fingerstache irony, hella vinyl selfies viral flannel kogi ethical paleo. Taxidermy Neutra pour-over single-origin coffee artisan.'
    },
    {
      id: 2,
      name: 'avid walker',
      imageUrl: 'assets/images/avid-walker.jpg',
      blurb: 'avid walker raw denim banjo heirloom lumbersexual, master cleanse health goth skateboard kale chips. Scenester bitters cray organic, slow-carb synth mlkshk distillery chillwave skateboard. Ugh Pitchfork occupy beard, Carles irony chillwave lo-fi cray brunch Vice PBR&B Tumblr twee. Ethical biodiesel next level church-key health goth cornhole. Direct trade Neutra Blue Bottle, banjo sriracha post-ironic Odd Future heirloom quinoa. Mumblecore pour-over fingerstache irony, hella vinyl selfies viral flannel kogi ethical paleo. Taxidermy Neutra pour-over single-origin coffee artisan.'
    }
  ]
});

export default Artist;
