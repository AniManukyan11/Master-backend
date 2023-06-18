const {addCategories,getCategories,getOneCategories,updateCategories,deleteCategories} = require('../controllers/category_controllers');
const {authenticateTokenAdmin} = require('../middleware/jwt_authenticate_admin');

exports.category_routers = (app)=>{
    app.post('/categories/add', addCategories);
    app.get('/categories',getCategories);
    app.get('/categories/getOne/:id',getOneCategories);
    app.put('/categories/update/:id', authenticateTokenAdmin, updateCategories);
    app.delete('/categories/delete/:id',authenticateTokenAdmin, deleteCategories);
}