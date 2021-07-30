const express = require('express');
const router = express.Router();
const responseManager = require('../services/responseManager').default;
const couponManager = require('../services/couponManager');
const walletManager = require('../services/walletManager');

router.post('/getCoupons', function (req, res) {
    var userId = req.body.userId;
    var coupons = couponManager.getCouponsByUser(userId);
    var result = responseManager.createSuccessResponse(coupons);
    res.status(200).json(result);
});

router.post('/getWallet', function (req, res) {
    var userId = req.body.userId;
    let manager = new walletManager();
    var wallet = manager.getWalletByUser(userId);
    var result = responseManager.createSuccessResponse(wallet);
    res.status(200).json(result);
});

router.post('/spendCoupon', function (req, res) {
    var senderId = req.body.senderId;
    var receiverId = req.body.receiverId;
    var couponId = req.body.couponId;
    let manager = new couponManager();
    var coupon = manager.getCouponById(couponId);
    if (coupon.status == 'new' && coupon.ownerId == senderId) {
        coupon.status = 'used';
        coupon.updateTime = new Date();
        coupon.receiverId = receiverId;
        var result = responseManager.createSuccessResponse(coupon);
        res.status(200).json(result);
    }
    else {        
        var result = responseManager.createFailureResponse('coupon is used or the owner is wrong.');
        res.status(200).json(result);
    }    
});

module.exports = router;