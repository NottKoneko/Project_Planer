const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/create', projectController.createProject);
router.get('/team/:team_id', projectController.getProjectsByTeam);

module.exports = router;
