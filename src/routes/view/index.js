const { Router } = require('express');
const { renderFeedback, renderHome } = require('../../controllers/view');

const router = Router();

router.get('/feedback', renderFeedback);
router.get('/', renderHome);

module.exports = router;