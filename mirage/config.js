export default function() {
  this.namespace = '/api';
  this.get('/episodes/:id', function(schema, request) {
    let episode = schema.episodes.find(request.params.id);
    let children = schema.episodes.where({parentId: episode.id});
    episode.children = children.models;
    return episode;
  });
  this.post('/episodes', (db, request) => {
    console.log(request);
    return JSON.parse(request.requestBody);
  });
}
