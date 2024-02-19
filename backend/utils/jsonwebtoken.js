const jwtService = require("jsonwebtoken");
require("dotenv").config();

const privateKey = process.env.JWT_PRIVATE_KEY;

function JWTverify(jwt) {
    return jwtService.verify(jwt, privateKey);
}

function JWTsign(user) {
    return jwtService.sign(user, privateKey);
}

module.exports = {JWTverify, JWTsign};