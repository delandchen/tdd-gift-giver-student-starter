class ExpressionError extends Error {
    constructor(message, status) {
        this.message = message;
        this.status = status;
    }
}

class BadRequestError extends Error {
    constructor(message = "Bad request", status = 400) {
        super(message);
        this.message = message;
        this.status = status;
    }
}

class NotFoundError extends Error {
    constructor(message = "Not found", status = 404) {
        super(message);
        this.message = message;
        this.status = status;
    }
}

module.exports = { BadRequestError, NotFoundError };

