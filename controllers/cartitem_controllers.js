const {CartItem} = require('../models');


 exports.addCartItem= async(req, res)=>{
    try{
        const {quantity, cartId, productId} = req.body;
        await CartItem.create({quantity, cartId, productId})
        res.status(201).json({message: "Cart created"} )
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
};
exports.getCartItem = async(req, res)=>{
    try{
        const data = await CartItem.findAll()
        res.status(201).json({data:data} )
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.getOneCartItem = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await CartItem.findOne({where: {id}})
        res.status(201).json({data:data} )
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.deleteCartItem = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await CartItem.destroy({where: {id}})
        res.status(201).json({data: data })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.updateCartItem = async(req, res)=>{
    try{ 
        const {id} = req.params;
        const {quantity, cartId, productId} = req.body;
        const data = await CartItem.update({quantity, cartId, productId},{where:{id}})
        res.status(201).json({data: data} )
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};
