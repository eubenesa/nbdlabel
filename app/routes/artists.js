import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        id: 1,
        name: 'mesa luna',
        imgUrl: 'assets/images/mesa-luna.jpg',
        blurb: 'With their textural beats and hazy soundscapes alongside emotive glittering melodies, Justice McLellan and Alex Cooper create both catharsis and escapism. Their intricate musical explorations are the result of a transformative marriage of contradictory worlds; from opposing ends of the musical spectrum, Mesa Luna is born as a kaleidoscope of experimental pop sounds.',
        scUrl: 'https://soundcloud.com/mesaluna',
        instaUrl: 'https://instagram.com/mesa_luna',
        fbUrl: 'https://www.facebook.com/mesaluna',
        twUrl: 'https://twitter.com/mesa_luna_'
      },
      {
        id: 2,
        name: 'avid walker',
        imgUrl: 'assets/images/avid-walker.jpg',
        blurb: 'Brendan Bleker and Jared Langerud. A couple pals making sun-soaked, melodic lo-fi pop in a bedroom studio. Playful but sincere, vulnerable yet confident, there is an air of melancholy woven into Avid Walker\'s songs that infuse their lightness and naivety with an emotional depth.',
        scUrl: 'https://soundcloud.com/avidwalker',
        instaUrl: 'https://instagram.com/avid_walker',
        fbUrl: 'https://www.facebook.com/avidwalkermusic',
        twUrl: ''
      }
    ];
  }
});
