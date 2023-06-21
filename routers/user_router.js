const {getVerifiedUsers,register,login,updateUser,deleteUser,verify} = require('../controllers/user_controllers');
const {authenticateTokenAdmin} = require('../middleware/jwt_authenticate_admin');
const {authenticateTokenUser} = require('../middleware/jwt_authenticate_user');

exports.user_routers = (app)=>{
    app.get('/users/getAll',authenticateTokenAdmin, getVerifiedUsers)
    app.post('/users/register', register)
    app.post('/users/login', login)
    app.put('/users/update/:id',authenticateTokenAdmin, updateUser);
    app.delete('/users/delete/:id',authenticateTokenAdmin, deleteUser);
   // app.get('/verify/:token',verify);
}
