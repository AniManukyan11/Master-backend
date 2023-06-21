const {addCartItem,getCartItem,getOneCartItem,updateCartItem,deleteCartItem} = require('../controllers/cartitem_controllers');

exports.cartitem_routers = (app)=>{
    app.post('/cartItemadd',  addCartItem);
    app.get('/CartItem', getCartItem);
    app.get('/cartItem/getOne/:id', getOneCartItem);
    app.put('/cartItem/update/:id', updateCartItem);
    app.delete('/cartItem/delete/:id',deleteCartItem);
}