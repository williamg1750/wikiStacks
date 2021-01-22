const express = require('express');
const router = express.Router();
const { addPage } = require('../views');

router.get('/', async (req, res, next) => {
  res.send('hello');
  // try {
  //   res.send('hello');
  // } catch (err) {
  //   next(err);
  // }
});

router.post('/', async (req, res, next) => {
  try {
    res.send('posting');
  } catch (err) {
    next(err);
  }
});

router.get('/add', async (req, res, next) => {
  res.send(addPage());
  // try {
  //   res.send('add a page');
  // } catch (err) {
  //   next(err);
  // }
});

// router.get('/add', (req, res) => {
//   res.send(addPage());
// });

module.exports = router;
