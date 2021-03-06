module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (typeof (err) === 'string') { // custom application
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError') { // mongoose validation
        return res.status(400).json({ message: err.message });
    }

    if (err.name === 'UnauthorizedError') { // jwt authentication
        return res.status(401).json({ message: 'Invalid Token' });
    }

    // default server error
    return res.status(500).json({ message: err.message });
}