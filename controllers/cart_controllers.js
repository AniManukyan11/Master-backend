const {Cart} = require('../models');


 exports.addCart= async(req, res)=>{
    try{
        const {userId} = req.body;
        await Cart.create({userId})
        res.status(201).json({message: "Cart created"} )
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
};


exports.getOneCart = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Category.findOne({where: {id}})
        res.status(201).json({data:data} )
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.deleteCart = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Cart.destroy({where: {id}})
        res.status(201).json({data: data })
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.updateCart = async(req, res)=>{
    try{ 
        const {id} = req.params;
        const {userId} = req.body;
        const data = await Cart.update({userId},{where:{id}})
        res.status(201).json({data: data} )
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};
