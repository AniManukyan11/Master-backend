const { addProducts,getAllProducts,getOneProducts,updateProducts,deleteProducts} = require('../controllers/product_controllers');
const upload = require('../middleware/multer');
const {authenticateTokenAdmin} = require('../middleware/jwt_authenticate_admin');

exports.product_routers = (app)=>{
    app.post('/products/add', upload.single("img"), addProducts);
    app.get('/products/getAll',getAllProducts);
    app.get('/products/getOne/:id',getOneProducts);
    app.put('/products/update/:id', upload.single("img"), updateProducts);
    app.delete('/products/delete/:id', deleteProducts);
}