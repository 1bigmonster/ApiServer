class userManager {
    getQuestionnaire(userId, today) {
        //TODO
        var questionnaire = {
            title = 'today eat what? :)',
            shopName = '',
            price = 0,
            description = '',
            lunchTime = '',        
            updateTime = new Date(),
        };
        return questionnaire;
    }
    
    trySaveQuestionnaire(userId, questionnaire) {
        //TODO var success =
        return success;
    }
    
    isFirstTimeRegister(userId) {
        //TODO
        var isNewUser = true;
        return isNewUser;
    }
}
module.exports = userManager;