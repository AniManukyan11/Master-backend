const {addCart,getOneCart,updateCart,deleteCart} = require('../controllers/cart_controllers');

exports.cart_routers = (app)=>{
    app.post('/cart/add', addCart);   
    app.get('/cart/getOne/:id',getOneCart);
    app.put('/cart/update/:id',updateCart);
    app.delete('/cart/delete/:id',deleteCart);
}