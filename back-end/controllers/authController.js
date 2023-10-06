const User = require('../models/user');
const {hashPassword, comparePassword} = require('../hash/auth');
const async = require('hbr/lib/async');
const jwt = require('jsonwebtoken');


const test = (req, res) => {
    res.json('test is working') 
}

// register endpoint 
const registerUser = async(req,res) => {
    try {
        const {name, email, password} = req.body;
        // check if name entered by banda
        if(!name){
            return res.json({
                error: 'name is required'
            });
        }
        // check if password is ok
        if(!password || password.length<6){
            return res.json({
                error: 'Password is required and should be atleast 6 char long'
            });
        }
        // email check please if this is on database
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'Email already existed'
            });
        }

        const hashedPassword = await hashPassword(password)
        const user = await User.create({

            name, 
            email, 
            password: hashedPassword,

        });

        return res.json(user);
    } catch (error) {
        console.log(error);
    }

};

// login endpoint

const loginUser = async (req,res) => {

    try {
        const {email, password} = req.body;

        // check agar user exists
        const user = await User.findOne({email});
        if (!user) {
            return res.json({
                error: 'No user found'
           
            })
        }

        // check password if match
        const match = await comparePassword(password, user.password)
        if(match){

            jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET,{},(err,token) =>{
                if(err) throw err;
                res.cookie('token', token).json
            })

        }
        if(!match) {
            res.json({
                error: "Passwords do not match"
            })
        }
    } catch (error) {

        console.log(error)
        
    }



}

const getProfile = (req,res) =>{

    const{token} = req.cookies
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.json(user)
        })
        
    } else {
        res.json(null)
    }

}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile

};