export default function() {
  this.get('/artists', function(db) {
    return {
      data: db.artists.map(attrs => (
        {
          id: attrs.id,
          type: 'artists',
          attributes: attrs
        }
      ))
    };
  });

  this.get('/releases', function(db) {
    return {
      data: db.releases.map(attrs => (
        {
          id: attrs.id,
          type: 'releases',
          attributes: attrs
        }
      ))
    };
  });
}
