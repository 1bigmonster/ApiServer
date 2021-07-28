const express = require('express');
const router = express.Router();
const responseManager = require('../services/responseManager');
const activityManager = require('../services/activityManager');

router.get('/getActivities', function (req, res) {
    var result = responseManager.createSuccessResponse(activityManager.getActivities());
    res.status(200).json(result);
});

router.post('/getQuestionnaire', function (req, res) {
    var userId = req.body.userId;
    var questionnaire = userManager.getQuestionnaire(userId, today);    
    var result = responseManager.createSuccessResponse(questionnaire);
    res.status(200).json(result);
});

router.post('/saveQuestionnaire', function (req, res) {
    var userId = req.body.userId;
    var success = userManager.trySaveQuestionnaire(userId, req.body.questionnaire);
    if (success == true)
        userManager.obtainNewCoupon(userId);

    var result = responseManager.createSuccessResponse(xxx);
    res.status(200).json(result);
});

module.exports = router;