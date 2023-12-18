const users = require('../Models/UserSchema')

// register
exports.register = async(req, res)=>{
    console.log('Inside register controller function');
    const {username,email,password,names,phno} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("Account already exists!!! Please Login..")
        }else{
            const newUser = new users({
                username,email,password,names,phno
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err){
        res.status(401).json("Register Request Failed")
    }
}