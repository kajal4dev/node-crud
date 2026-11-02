import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    deparment:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    }
});

const Employee = mongoose.model("Employee",employeeSchema);
export default Employee;