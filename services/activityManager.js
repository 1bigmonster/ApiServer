const activities = [
    { id: 1, title: 'eat', order: 1, imageUrl: ''},
    { id: 2, title: 'play', order: 2, imageUrl: ''},
    { id: 3, title: 'training', order: 3, imageUrl: ''},
    { id: 4, title: 'hobby', order: 4, imageUrl: ''}
];

function getActivities() {
    //TODO redis
    return activities;
}

function getShopListByActivity(activityId)
{
    //TODO redis
    //return shop details
    return shops;
}
