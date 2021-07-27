const express = require('express');
const router = express.Router();
const responseManager = require('../services/responseManager');
const activityManager = require('../services/activityManager');

router.get('/getActivities', function (req, res) {
    var result = responseManager.createSuccessResponse(activityManager.getActivities());
    res.status(200).json(result);
});

router.post('/saveQuestionnaire', function (req, res) {
    var userId = req.body.userId;
    var today = //TODO
    
    var result = responseManager.createSuccessResponse(xxx);
    res.status(200).json(result);
});
// router.get('/:id', function (req, res) {
//     let found = data.find(function (item) {
//         return item.id === parseInt(req.params.id);
//     });
//     if (found) {
//         res.status(200).json(found);
//     } else {
//         res.sendStatus(404);
//     }
// });

module.exports = router;