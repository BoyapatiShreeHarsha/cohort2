
const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    try {
        const username = req.headers.username;
        const password = req.headers.password;

        let value = await User.findOne({
            username: username,
            password: password
        });

        if (value) {
            next();
        }
        else {
            res.status(403).json({
                msg:"User doesn't exists"
            })
        }

    } catch (error) {
        res.status(500).json({
            msg:error
        });
    }
}

module.exports = userMiddleware;