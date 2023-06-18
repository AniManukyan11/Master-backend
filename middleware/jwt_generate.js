const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.SECRET;

exports.generateAccessToken = (id,role,email) => {
    return jwt.sign({id,role,email},SECRET,{expiresIn: '36000s' })
}