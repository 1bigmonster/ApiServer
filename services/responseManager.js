class responseManager {
    static createSuccessResponse(data) {
        var result = {
            status: 'success', //{success, fail}
            updateTime: new Date(),
            data: data,
            reason: '',
        };
        return result;
    }
    
    static createFailureResponse(reason) {
        var result = {
            status: 'fail', //{success, fail}
            updateTime: new Date(),
            data: null,
            reason: reason,
        };
        return result;
    }
}

module.exports = responseManager