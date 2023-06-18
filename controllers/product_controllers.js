const {Product} = require('../models');
const fs = require("fs")

 exports.addProducts = async(req, res)=>{
    try{
        const {name, price, currency,  description, quantity, categoryId } = req.body;
        const imgName = req.file?.filename;
        
        const img = imgName ? `${req.protocol}://${req.hostname}:${process.env.PORT}/uploads/${imgName}` : null;
        
        const data = await Product.create({name, price, currency, img, description, quantity, categoryId })
        res.status(201).json(data )
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.getAllProducts = async(req, res)=>{
    try{
        const data = await Product.findAll()
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.getOneProducts = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Product.findOne({where: {id}})
        res.status(201).json(data )
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.deleteProducts = async(req, res)=>{
    try{
        const {id} = req.params;

        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        if (product.img) {
            const imgName = product.img.split('/').pop();
            const imgPath = './uploads/' + imgName;
            fs.unlink(imgPath, (err) => {
                if (err) {
                console.error(err);
                return;
                }
                console.log('File has been deleted');
            });
        }

        await Product.destroy({ where: { id } });
        return res.status(200).json({ message: 'Product deleted successfully' });
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

exports.updateProducts = async(req, res)=>{
    try{
        
        const {id} = req.params;
        const {name, price, currency,  description, quantity, categoryId  } = req.body;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        if (product.img) {
            const imgName = product.img.split('/').pop();
            const imgPath = './uploads/' + imgName;
            fs.unlink(imgPath, (err) => {
                if (err) {
                console.error(err);
                return;
                }
                console.log('File has been deleted');
            });
        }
       
        const imgName = req.file?.filename;
        const img = imgName ? `${req.protocol}://${req.hostname}:${process.env.PORT}/uploads/${imgName}` : null;
         await Product.update({name, price, currency, img, description, quantity, categoryId },{where: {id}})
        res.status(201).json(product )
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

