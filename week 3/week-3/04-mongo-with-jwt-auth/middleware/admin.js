const jwt = require('jsonwebtoken');
const jwtPassword="secret";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
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

module.exports = adminMiddleware;