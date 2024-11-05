const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permissionController');

router.post('/assign', permissionController.assignPermission);
router.get('/project/:project_id', permissionController.getPermissions);

module.exports = router;
