export default function() {
  this.namespace = '/api';
  this.get('/episodes/1', function() {
    return {
      data: {
        type: 'episodes',
        id:1,
        attributes: {
          title: 'First episode',
          url: 'http://podcasts.nytimes.com/podcasts/2008/03/03/04healthupdate.mp3'
        },
        "relationships": {
          "children": {
            "data": [
              {"id": "2", "type": "episodes"}
            ]
          }
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
          url: 'http://podcasts.nytimes.com/podcasts/2008/03/10/12healthupdate.mp3'
        },
        "relationships": {
          "parent": {
            "data": {"id": "1", "type": "episodes"}
          },"children": {
            "data": [
              {"id": "3", "type": "episodes"},
              {"id": "4", "type": "episodes"}
            ]
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
          title: 'One Ending',
          url: 'http://podcasts.nytimes.com/podcasts/2008/03/14/18healthupdate.mp3'
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
          url: 'http://podcasts.nytimes.com/podcasts/2008/03/21/25healthupdate.mp3'
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
