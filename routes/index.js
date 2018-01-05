var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/new-data', (req, res) => {
  console.log(req.body);
  return res.json({ result: 'success' });
});

module.exports = router;
