const router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.status(200).send('Welcome Home');
});

module.exports = router;
