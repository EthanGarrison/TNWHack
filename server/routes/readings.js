var express = require('express');
var router = express.Router();

/* GET readings from sensor. */
router.get('/readings', function(req, res) {
  	res.json();
});

router.post('/readings', function(req, res) {
	res.json();
})

module.exports = router;