import User from '../model/User.js'

export const addUser = async (request,responce) =>{
    try {
        let exist = await User.findOne({sub:request.body.sub})
        if(exist){
            return responce.status(200).json({msg:'user already exist'})
        }
        const newUser = new User(request.body);
        await newUser.save();
        return responce.status(200).json({msg:'new User added'})
    } catch (error) {
        console.log("user controller add user error ",error);
        return responce.status(500).json({msg:'error occured user controller add user'})
    }
}

export const getUser = async (request,responce)=>{
    try {
        const users = await User.find({});
        return responce.status(200).json(users)
    } catch (error) {
        console.log("user controller  getuser error ",error);
        return responce.status(500).json({msg:'error occured user controller getuser'})
    }
}