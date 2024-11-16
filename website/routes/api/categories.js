var express = require('express');
var router = express.Router();
const db = require('../../db');

/* GET api categories. */
router.get('/', async (req, res) => {
  try {
    const categories = await db.select('*').from('categories');
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
