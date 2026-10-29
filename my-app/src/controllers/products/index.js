import Products from "../../model/products.model.js";

export const productController = async(req,res)=>{
    const product= new Products({
        title:'Dress',
        description:'cotton'
    });
    const result =await product.save();
    res.send(result);
}