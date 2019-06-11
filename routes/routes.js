const express = require('express');
const router = express.Router();

const score_controller = require('../controllers/score_controller');

router.get('/', score_controller.score_index);
router.get('/create', score_controller.score_create);
router.get('/top', score_controller.score_top);
router.get('/:id', score_controller.score_details);
router.get('/:id/update', score_controller.score_update);
router.get('/:id/delete', score_controller.score_delete);

module.exports = router;
