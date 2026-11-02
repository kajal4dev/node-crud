import Users from "../../model/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async(req,res)=>{
    try{
    const {email,password}=req.body;

    if(!email || !password ){
        return res.status(409).json({"message":"email,password fields are required"})
    }

    const user =await Users.findOne({email:email.trim().toLowerCase()})
    if(!user){
            return res.status(401).json({"message":"Unothorized user enter valid email"});
 
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
            return res.status(401).json({"message":"Invalid Password"});
    }
    const token = jwt.sign(
        {userId :user._id.toString()},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRES_IN}
    );

            return res.status(200).json({"message":"signedin successfully",token,
                user:{
                    userId : user._id,
                    name:user.name,
                    email:user.email
                }});

            }catch(error){
                console.log("SignUp Error:",error);
                console.log("Error message:",error.message);
                return res.status(500).json({"message":"Login failed"});

            }
}

export const signUp = async(req,res)=>{
try{
const {name,email, password} =req.body;
console.log(email);
if(!email || !name || !password){
    return res.status(400).json({"message":"title,email,password fields are required"});
}
 const existingUser =await Users.findOne({
    email: email.trim().toLowerCase()
 });

 if(existingUser){
       return res.status(409).json({"message":"email already exists"}); 
 }

 if(password<8){
    return res.status(400).json({"message":"password must be 8 digit"});
 }

 const hashPassword = await bcrypt.hash(password,10);

 const user = await Users.create({
    name,
    email:email.trim().toLowerCase(),
    password:hashPassword
 });
console.log(user);
    return res.status(201).json({
        success:true,
        "message":"user created successfully",
        "user":{
            "name":user.name,
            "email":user.email,
            "id":user._id
        }});
}catch(error){
    if(error.code === 11000){
            return res.status(409).json({"message":"email is alreay exist"});
    }
        return res.status(500).json({"message":"signed up failed"});


}

}
