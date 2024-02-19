const { JWTverify } = require("./utils/jsonwebtoken");

const AuthMiddleware = async (req, res, next) => {
    const BearerToken = req.headers.authorization;

    const allowed = [
        "/auth",
        "/signup"
    ];

    if(allowed.includes(req.path)) {
        next();
        return;
    }

    const isValid = JWTverify(BearerToken.split(' ')[1]);

    if (isValid) {
        req.userInfo = isValid;
        next();
    } else {
        res.status(401).json({error: 'Unauthorized'});
    }
}

module.exports = AuthMiddleware;