import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToDb = async()=>{
    try{
        if(!process.env.MONGO_URL){
           throw new Error("MONGO_URL is missing from environment variable"); 
        }

        const {connection} = await mongoose.connect(process.env.MONGO_URL);
        if(connection){
            console.log("Mongodb connected successfully");

        }
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}
export default connectToDb;