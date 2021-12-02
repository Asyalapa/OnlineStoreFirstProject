class apiError extends Error{
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }
    static forbidden(message) {
        return new apiError(403, message)
    }
    static badRequest(message) {
        return new apiError(404, message)
    }
    static badRequest(message) {
        return new apiError(500, message)
    }
}

module.exports = apiError