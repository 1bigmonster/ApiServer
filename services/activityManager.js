class activityManager {
    constructor() {
        this.activities = [
            { id: 1, title: 'eat', order: 1, imageUrl: ''},
            { id: 2, title: 'play', order: 2, imageUrl: ''},
            { id: 3, title: 'training', order: 3, imageUrl: ''},
            { id: 4, title: 'hobby', order: 4, imageUrl: ''}
        ];
    }
        
    getActivities() {
        //TODO redis
        return this.activities;
    }
    
    getShopListByActivity(activityId) {
        //TODO redis
        //return shop details
        var shops = [
            { id: 1, name: 'shopA', phoneNumber: '2345678', description: 'sell lunch box' },
            { id: 2, name: 'shopB', phoneNumber: '2345678', description: 'yoga class' },
        ];        
        return shops;
    }
}

module.exports = activityManager