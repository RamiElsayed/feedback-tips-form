const { Router } = require('express');


const router = Router();

router.get('/', getTips)
router.post('/', createTip)

module.exports = router;