function getCouponsByUser(userId) {
    //TODO redis
    var coupons = {
        userid: userId,
        items: [
            { id: 1, name: 'couponA', ccy: 'hkd', available: 100, spent: 0, status: 'new', expiry: '', updateTime: new Date() },
            { id: 2, name: 'couponB', ccy: 'hkd', available: 100, spent: 0, status: 'new', expiry: '', updateTime: new Date() },
            { id: 3, name: 'couponC', ccy: 'hkd', available: 100, spent: 0, status: 'new', expiry: '', updateTime: new Date() },
        ],   
    };
    return coupons;
}

function getCouponById(couponId) {
    //TODO redis
    var coupon = {
        userid: userId,
        items: [
            { id: couponId, name: 'couponA', ccy: 'hkd', available: 100, spent: 0, status: 'new', expiry: '', updateTime: new Date() },            
        ],   
    };
    return coupon;
}

function obtainNewCoupon(userId) {
    //TODO insert database.
    var newid = getnewId();
    var coupon = {
        userid: userId,
        items: [
            { id: newId, name: 'couponA', ccy: 'hkd', available: 100, spent: 0, status: 'new', expiry: '', updateTime: new Date() },            
        ],   
    };    
    return coupon;
}