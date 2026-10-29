import Course from "../../model/course.model.js";

export const addcourseById =async (req,res)=>{
    const {id} = req.params;
    const {category} =req.body;
    try{
    const course = await Course.findById(id);
    if(!course){
        return res.status(404).json({"success":false, message:"course not found"})
    } 
    course.category.push(category);
    const result=await course.save();
    res.status(200).json({"success":true, message:"Category added successfully"})
    } 
catch(e){
    console.log(e.message);
}
}

export const deleteByID =async(req,res)=>{
    const {id} = req.params;
    const course = await Course.findByIdAndDelete(id);
    if(!course){
        return res.status(404).json({success:false,message:"course not found"
        })
    }

    res.status(200).json({success:true,message:"deleted successfully"});
    
}

export const updateById = async(req,res)=>{
    const {id} = req.params;
    const course = await Course.findByIdAndUpdate(
        id,
        {
            $set: req.body
        }
    );

    if(!course){
        return res.status(400).json({success:false,message:"id required"
        })
    }

    res.status(200).json({success:true,message:"updated successfully",course});
}

export const getcourseById=async(req,res)=>{
    const {id} =req.params;
    if(!id){
       return  res.status(400).json({success:false,message:"id required"
        })
    }

    const courses = await Course.findById(id);
    if(courses){
        res.status(200).json({success:true,message:"created successfully",courses})
    }
    
}

export const createCourse = async(req,res) =>{
    const {title,category}= req.body;
    console.log(title,category);
    if(!title || !category){
        return res.status(400).json({success:false, error:"All fields require"});
    }

    const courses = await Course.create({
        title,
        category
    });

    if(courses){
        const result = await courses.save();
        res.status(201).json({success:true,message:"created successfully",result});
    }

}

export const getCourses = async(req,res) =>{
try{
const courses = await Course.find({}).select('title');

res.status(200).json({
    success:true,
    message:"All courses",
    courses
});
}catch(e){
    console.log(e.message);
}
}