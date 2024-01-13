const jwt = require('jsonwebtoken');
const jwtPassword="secret";

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const token=req.headers.Authorization;
        token=token.substring(6);

        let t=jwt.verify(token,jwtPassword);
        next();
    } catch (error) {
        res.status(404).json({
            message:error
        })
        return;
    }
}

module.exports = userMiddleware;