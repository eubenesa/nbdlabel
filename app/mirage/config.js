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

  this.get('/artists/:slug', function(db, request) {
    let slug = request.params.slug;

    let [ artist ] = db.artists.where({ slug });

    return {
      data: {
        attributes: artist,
        id: artist.id,
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

  this.get('/releases/:slug', function(db, request) {
    let slug = request.params.slug;

    let [ release ] = db.releases.where({ slug });

    return {
      data: {
        attributes: release,
        id: release.id,
        type: 'releases'
      }
    };
  });


  // for debugging
  // this.handledRequest = function(verb, path, request) {
  //   console.log(`👊${verb} ${path}`);
  // };
  //
  // this.unhandledRequest = function(verb, path, request) {
  //   console.log(`🔥${verb} ${path}`);
  // };
}
