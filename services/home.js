var seneca = require('seneca')();

function root(message, done) {
  console.error('root');
  var message = {
    content: { src: 'root' } 
  };

  return done(null, message);
}

seneca
  .add({ page: '/' }, root)
  .listen();

