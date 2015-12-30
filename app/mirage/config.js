export default function() {
  this.get('/artists', function(db) {
    return {
      data: db.artists.map(attrs => (
        {
          attributes: attrs,
          id: attrs.id,
          type: 'artists'
        }
      ))
    };
  });

  this.get('/artists/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        attributes: db.artists.find(id),
        id: id,
        type: 'artists'
      }
    };
  });

  this.get('/releases', function(db) {
    return {
      data: db.releases.map(attrs => (
        {
          attributes: attrs,
          id: attrs.id,
          type: 'releases'
        }
      ))
    };
  });

  this.get('/releases/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        attributes: db.releases.find(id),
        id: id,
        type: 'releases'
      }
    };
  });
}
