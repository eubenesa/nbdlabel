export default function() {
  this.get('/artists', function(db) {
    return {
      data: db.artists.map(attrs => (
        {
          type: 'artists',
          id: attrs.id,
          attributes: attrs
        }
      ))
    };
  });

  this.get('/releases', function(db) {
    return {
      data: db.releases.map(attrs => (
        {
          type: 'releases',
          id: attrs.id,
          attributes: attrs
        }
      ))
    };
  });
}
