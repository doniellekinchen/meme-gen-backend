const express = require('express');
const router = express.Router();

const peopleCtrl = require('../controllers/people')

router.get("/", memeCtrl.index)

router.post("/", memeCtrl.create)

router.get("/", memeCtrl.show)

router.delete("/", memeCtrl.delete)

router.put("/", memeCtrl.update)



/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
