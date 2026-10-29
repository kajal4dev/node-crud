import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
title:{
    type:String,
    required:true,
    minLength:3
},
category:{
    type:String,
    required:true,
    enum:['backend','frontend']
}
});

const Course = mongoose.model('Course',courseSchema);
export default Course; 