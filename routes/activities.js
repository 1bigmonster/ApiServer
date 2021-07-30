const express = require('express');
const router = express.Router();
const responseManager = require('../services/responseManager');
const activityManager = require('../services/activityManager');

router.get('/getActivities', function (req, res) {
    let manager = new activityManager();
    var result = responseManager.createSuccessResponse(manager.getActivities());
    res.status(200).json(result);
});

router.post('/getQuestionnaire', function (req, res) {
    var userId = req.body.userId;
    let manager = new userManager();
    var questionnaire = manager.getQuestionnaire(userId, today);    
    var result = responseManager.createSuccessResponse(questionnaire);
    res.status(200).json(result);
});

router.post('/saveQuestionnaire', function (req, res) {
    var userId = req.body.userId;
    let manager = new userManager();
    var success = manager.trySaveQuestionnaire(userId, req.body.questionnaire);
    if (success == true)
        manager.obtainNewCoupon(userId);

    var result = responseManager.createSuccessResponse(xxx);
    res.status(200).json(result);
});

module.exports = router;