const { Router } = require('express');

const router = Router();

router.use('/tips', tips);
router.use('/feedback', feedback);


module.exports = router;