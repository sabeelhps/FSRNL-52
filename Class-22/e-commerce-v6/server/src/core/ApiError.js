class BadRequestError extends Error{
    constructor(message = "Bad Request") {
        super(message);
        this.status = 400;
    }
}

class NotFoundError extends Error{
    constructor(message = "Not Found") {
        super(message);
        this.status = 404;
    }
}

class InternalServerError extends Error{
    constructor(message = "Internal Server Error") {
        super(message);
        this.status = 500;
    }
}

module.exports = {
    BadRequestError, 
    NotFoundError,
    InternalServerError
}