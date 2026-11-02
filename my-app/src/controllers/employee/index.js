import Employee from "../../model/employee.model.js";


export const deleteEmployeeById =async(req,res)=>{
try{

const employee = await Employee.findOneAndDelete({
    _id:req.params.id,
    userId:req.user.userId
});
console.log(employee);
if(!employee){
  return res.status(404).json({"message":"Employee not found"});
  
}
return res.status(200).json({"message":"Employee deleted succed"})

}catch(error){
    console.log("error message is",error.message);
    console.log("Error stack:", error.stack);
    return res.status(500).json({"message":"faild to update employee"})

}

}  

export const updateEmployeeById =async(req,res)=>{
try{

const employee= await Employee.findByIdAndUpdate(
    {
        _id:req.params.id,
        userId:req.user.userId
    },
    {
        $set: req.body
    },
    {
        returnDocument:"after"
    }
);
console.log(employee);
if(!employee){
  return res.status(404).json({"message":"Employee not found"});
  
}
return res.status(200).json({"message":"Employee updated succed",employee})

}catch(error){
console.log("error message is",error.message);
console.log("Error stack:", error.stack);
return res.status(500).json({"message":"faild to update employee"})
}
}

export const createEmployee =async(req,res)=>{
try{
    const {name,email,deparment,salary} = req.body;
    if(!name || !email || !deparment || !salary){
        return res.status(409).json({"message":"name,email,deparment,salary required"});
    }

    const employee = await Employee.create({
        name,
        email,
        deparment,
        salary,
        userId: req.user.userId
    });

    return res.status(201).json({"message":"Employee created successfully", employee});

}catch(error){
    console.log(error.message);
        return res.status(500).json({"message":"Failed to create employee "});

}
}

export const getEmployeeById = async(req,res)=>{
    try{

    const id=req.params.id;
    const employee = await Employee.findOne({
        _id:id,
        userId:req.user.userId
    });

    if(!employee){
        return res.status(404).json({"message":"Employee not found"});
    }
        return res.status(200).json(employee);

}catch(error){
    console.log(error.message);
            return res.status(500).json({"message":"Failed to create employee "});

}

}
