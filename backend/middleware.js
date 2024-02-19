const { JWTverify } = require("./utils/jsonwebtoken");

const AuthMiddleware = async (req, res, next) => {
    const BearerToken = req.headers.authorization;
    const isValid = JWTverify(BearerToken.split(' ')[1]);

    const allowed = [
        "/auth",
    ];



    if (isValid || allowed.includes(req.path)) {
        req.userInfo = isValid;
        next();
    } else {
        res.status(401).json({error: 'Unauthorized'});
    }
}

module.exports = AuthMiddleware;