import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS


const URL = `mongodb+srv://user:User@chattingapp.i74pm5m.mongodb.net/?retryWrites=true&w=majority`//ayush mongodb
const Connection = async () => { 
  try {
    await mongoose.connect(URL,{useUnifiedTopology:true})
    console.log("Db connected successfylly");
  } catch (error) {
    console.log("some error occured in db.js",error);
  }
}

export default Connection