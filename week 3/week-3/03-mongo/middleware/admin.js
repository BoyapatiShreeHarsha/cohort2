
const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const username = req.headers.username;
        const password = req.headers.password;

        let value = await Admin.findOne({
            username: username,
            password: password
        });

        if (value) {
            next();
        }
        else {
            res.status(403).json({
                msg:"Admin doesn't exists"
            })
        }

    } catch (error) {
        res.status(500).json({
            msg:error
        });
    }

}

module.exports = adminMiddleware;