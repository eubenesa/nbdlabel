import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        artist: 'mesa luna',
        imgUrl: 'assets/images/mesa-luna-crux.jpg',
        album: 'crux',
        format: 'c40 cassette',
        releasedAt: '2015-10-23T07:00:00.000Z',
        blurbP1: 'I wish I could conceptualize Crux with a quick relatable backstory, but music happens to Alex and I in an entirely new way with every song. The only thing that remains constant is our shared need for catharsis in music making. Whether subtle or full-blown, we need to get it out; it\'s a matter of self-preservation.',
        blurbP2: 'During the months these songs were made, we lived together in a dilapidated Vancouver Special under peculiar circumstances which didn\'t allow us much sleep nor security. Many songs came out of this time, but we felt these 5 had an inexplicable relationship. Without shedding too much personal detail, it seemed I was at a complete dead end, no future prospects, no real inspiration aside from music, and it really seemed any option I had wouldn\'t work...An insoluble problem, the crux of the matter.',
        blurbP3: 'And then we realized we had some songs that felt right together. Creating and performing them brings some light into our lives, and we are very happy to share them. Although this synopsis has been difficult to write, we hope the amalgamation of our music, words and meanderings find a good place in your life.',
        bcUrl: 'https://mesaluna.bandcamp.com/album/crux-ep',
        itUrl: '',
        sfUrl: '',
      }
    ];
  }
});