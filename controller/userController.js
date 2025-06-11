require('dotenv').config();


const {authMiddleware} = require("../middleware/authMiddleware")
const { User} = require('../models/UserSchema')
const {Account} = require('../models/AccountsSchema')
const bcrypt  = require('bcrypt')
const jwt = require('jsonwebtoken');


const createUser = async (req,res) =>{
    const {username,password,firstname,lastname ,email} = req.body;
    

    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPassword  = await bcrypt.hash(password,salt);

        const user = await User.create({
            email,
            username,
            password: hashedPassword,
            firstname,
            lastname
        })
        const userCreated = await user.save();
        if(userCreated){
        res.status(200).json({
            msg:"user created"
        })}
        else{
            res.json({
                msg: "something went wrong"
            })
        }
        const min = 10;
        const max = 100000;
        const generatedBalance = Math.floor((Math.random() * (max - min)) + min )

        const userBalance = await Account.create({
            userId: user._id,
            balance: generatedBalance
        })
        userBalance.save();



    }
    catch(e){
        console.log("error",e.message)
        res.json({
            message: "Internal server error"
        })
    }
}

const signin = async (req,res) =>{

    try{
        const {email,password} = req.body;

        
        const user = await User.findOne({email});
        if(!user){
            res.status(404).json({
                message: " user not found"
            })
        }

        const checkPassword = bcrypt.compare(password , user.password)

        if(!checkPassword) {
            res.status(404).json({
                message: " Invalid password"
            })
        }

        const payload = {
            id: user._id,
            username: user.username

        }

        const key = process.env.JWT_SECRET;

        const token = jwt.sign(payload,key);
        console.log(token)
        res.cookie('token',{
            httpOnly: true,
            sameSite: 'Strict',
            maxAge: 3600000


        });


        res.status(200).json({
            message : "Login successful",
            token: `Bearer ${token}`
        })
        


    }catch(e){
        console.log("error:",e.message)
        res.status(500).json(
            {
                message: "internal server error"
            }
        )

    }
    
}

const updateuser =  async(req, res) =>{


    const userId = req.user.id;
    const updates = req.body;

    const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
            $set : updates
        },
        {
            new: true
        }
    )



    res.json({
        message:"user updated"
    })



}

module.exports = {createUser, signin, updateuser};
