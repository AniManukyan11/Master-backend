// const jwt = require('jsonwebtoken');
// require('dotenv').config();
// const SECRET = process.env.SECRET;

// exports.authenticateToken = (req, res, next) => {
//     const token = req.headers.authorization;
//         if (token === null) return res.sendStatus(401) 
//     jwt.verify(token, SECRET, (err, data) => {
//         if (err){
//             return res.sendStatus(403) 
//         }else if(data.role === 0){
//             next();
//         }else{
//             return res.sendStatus(401)
//         }
//     })
// }
const jwt = require('jsonwebtoken');
require('dotenv').config();

 const SECRET = process.env.SECRET;

 exports.authenticateTokenUser=(req, res, next) =>{
    // const token = req.headers.authorization.split(' ')[1];
    const token = req.headers.authorization
    const {id} = req.params;

    if ( token == null) {
        return res.sendStatus(401)
    }

    jwt.verify(token, SECRET, ( err, data ) => {
        if (err) {
            return res.sendStatus(403)
        }
        else if( data.id == id ) {
            next();
        }
            else{return res.sendStatus(401)}
        
    })
 }

