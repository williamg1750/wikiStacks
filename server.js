const app = require('./app');
const port = 3000;

function initPort() {
  app.listen(port, () => {
    console.log('listening right now');
  });
}

initPort();
