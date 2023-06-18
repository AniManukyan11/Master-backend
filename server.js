const express = require('express');
const cors = require("cors");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4001;
app.use(express.json())
app.use('/uploads', express.static('uploads'));

const {category_routers} = require('./routers/category_router');
const {product_routers} = require('./routers/product_router');
const {user_routers} = require('./routers/user_router');
const {cart_routers} = require('./routers/cart_router');
const {cartitem_routers} = require('./routers/cartitem_router')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

category_routers(app);
product_routers(app);
user_routers(app);
cart_routers(app);
cartitem_routers(app);




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
