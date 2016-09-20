export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
  //
  console.log("hello from scenario");
  let start = server.create('episode', {
    title: 'So it begins',
    url: 'http://podcasts.nytimes.com/podcasts/2008/03/03/04healthupdate.mp3',
  });
  let one   = server.create('episode', {
    title: 'And it continues',
    url: 'http://podcasts.nytimes.com/podcasts/2008/03/10/12healthupdate.mp3',
    parent: start
  });
  server.create('episode', {
    title: 'This is the first end',
    url: 'http://podcasts.nytimes.com/podcasts/2008/03/14/18healthupdate.mp3',
    parent: one
  });
  server.create('episode', {
    title: 'This is the alternative end',
    url: 'http://podcasts.nytimes.com/podcasts/2008/03/21/25healthupdate.mp3',
    parent: one
  });
}
