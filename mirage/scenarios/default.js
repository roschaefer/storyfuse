export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
  //
  let start = server.create('episode', {
    title: 'So it begins',
    url: 'https://a.clyp.it/zfei2qca.mp3',
  });

  let continues   = server.create('episode', {
    title: 'And it continues',
    url: 'https://a.clyp.it/nh4u01eb.mp3',
    parent: start
  });

  let notYet = server.create('episode', {
    title: 'Story is not yet over',
    url: 'https://a.clyp.it/uit5cq3r.mp3',
    parent: continues
  });

  server.create('episode', {
    title: 'This is an alternative end',
    url: 'https://a.clyp.it/uh3nx3ai.mp3',
    parent: continues
  });


  server.create('episode', {
    title: 'Happy ending',
    url: 'https://a.clyp.it/54if4iri.mp3',
    parent: notYet
  });

  server.create('episode', {
    title: 'Bad ending',
    url: 'https://a.clyp.it/mybjm2l5.mp3',
    parent: notYet
  });

  server.create('episode', {
    title: 'Weird ending',
    url: 'https://a.clyp.it/4z4dodtz.mp3',
    parent: notYet
  });
}
