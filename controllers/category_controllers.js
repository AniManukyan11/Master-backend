const {Category} = require('../models');


 exports.addCategories = async(req, res)=>{
    try{
        const {name} = req.body;
        const data = await Category.create({name})
        res.status(201).json(data )
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.getCategories = async(req, res)=>{
    try{
        const data = await Category.findAll({ include: { all: true, nested: true }})
        res.status(201).json(data )
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.getOneCategories = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Category.findOne({where: {id}, include: { all: true, nested: true }})
        res.status(201).json(data )
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.deleteCategories = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Category.destroy({where: {id}})
        res.status(201).json(data )
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.updateCategories = async(req, res)=>{
    try{ 
        const {id} = req.params;
        const {name} = req.body;
        const data = await Category.update({name},{where:{id}})
        res.status(201).json(data )
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};
