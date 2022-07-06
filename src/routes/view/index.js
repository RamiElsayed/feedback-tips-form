const { Router } = require('express');

const router = Router();

router.get('/feedback', renderFeedback);
router.get('/', renderHome);

module.exports = router;