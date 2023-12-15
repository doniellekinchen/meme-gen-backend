const express = require('express');
const router = express.Router();


const memeCtrl = require('../controllers/meme')

router.get("/", memeCtrl.index)

router.post("/", memeCtrl.create)

router.get("/:id", memeCtrl.show)

router.delete("/:id", memeCtrl.delete)

router.put("/:id", memeCtrl.update)



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
