export default function() {
  this.namespace = '/api';
  this.get('/episodes/1', function() {
    return {
      data: {
        type: 'episodes',
        id:1,
        attributes: {
          title: 'First episode',
        }
      }
    };
  });

  this.get('/episodes/2', function() {
    return {
      data: {
        type: 'episodes',
        id:2,
        attributes: {
          title: 'Next episode',
        },
        "relationships": {
          "parent": {
            "data": {"id": "1", "type": "episodes"}
          }
        }
      }
    };
  });

  this.get('/episodes/3', function() {
    return {
      data: {
        type: 'episodes',
        id:3,
        attributes: {
          title: 'Third episode',
        },
        "relationships": {
          "parent": {
            "data": {"id": "2", "type": "episodes"}
          }
        }
      }
    };
  });

  this.get('/episodes/4', function() {
    return {
      data: {
        type: 'episodes',
        id:4,
        attributes: {
          title: 'A different ending',
        },
        "relationships": {
          "parent": {
            "data": {"id": "2", "type": "episodes"}
          }
        }
      }
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
   Config (with defaults).

   Note: these only affect routes defined *after* them!
   */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
   Shorthand cheatsheet:

   this.get('/posts');
   this.post('/posts');
   this.get('/posts/:id');
   this.put('/posts/:id'); // or this.patch
   this.del('/posts/:id');

   http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
   */
}
