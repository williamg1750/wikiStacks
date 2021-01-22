const app = require('./app');
const PORT = 3000;

// Where your server and express app are being defined:

const { db, Page, User } = require('./models');

// ... other stuff

const init = async () => {
  await Page.sync();
  await User.sync();
  await db.sync({ force: true });
  console.log('IM SYNCED');
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();

// function initPort() {
//   app.listen(port, () => {
//     console.log('listening right now');
//   });
// }

// initPort();
