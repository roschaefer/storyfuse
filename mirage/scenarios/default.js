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
    url: 'http://betterwithmusic.com/Music/songs/Rossio.mp3',
  });

  let continues   = server.create('episode', {
    title: 'And it continues',
    url: 'http://betterwithmusic.com/Music/songs/Sirens.mp3',
    parent: start
  });

  let notYet = server.create('episode', {
    title: 'Story is not yet over',
    url: 'http://betterwithmusic.com/Music/songs/Montmartre.mp3',
    parent: continues
  });

  server.create('episode', {
    title: 'This is an alternative end',
    url: 'http://betterwithmusic.com/Music/songs/Breaking_Bad.mp3',
    parent: continues
  });


  server.create('episode', {
    title: 'Happy ending',
    url: 'http://betterwithmusic.com/Music/songs/Dancing.mp3',
    parent: notYet
  });

  server.create('episode', {
    title: 'Bad ending',
    url: 'http://betterwithmusic.com/Music/songs/Poker.mp3',
    parent: notYet
  });

  server.create('episode', {
    title: 'Weird ending',
    url: 'http://betterwithmusic.com/Music/songs/Out_of_School.mp3',
    parent: notYet
  });
}
