import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
});

const Products = mongoose.model('Product',productSchema);
export default Products;
