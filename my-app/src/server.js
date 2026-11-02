import connectToDb from "./config/dbConnect.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();
const port = process.env.PORT || 3000;

await connectToDb();


app.listen(port,()=>{
    console.log(`Application is listening on port ${port}`);
});



