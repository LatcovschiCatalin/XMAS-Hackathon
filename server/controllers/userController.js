const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { application } = require("express");

const registerUser = async(req, res) => {
    const {username, email, password} = req.body;
    console.log(username);
    console.log(email);
    console.log(password);
    if(!username || !email || !password){
        res.json({message: "Please fill in all fields"});
    }

    const emailExists = await User.findOne({email});
    const usernameExists = await User.findOne({username});

    if(emailExists || usernameExists) {
        res.json({message: "Username or email has already been taken"});
    }
    else{
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        if(user){
            res.status(201).json({
                _id: user.id,
                username: user.username,
                email: user.email,
                message: 'Successfully registered'
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }

    }
}

const loginUser = async(req, res) =>{
    const {email, password} = req.body;
    console.log(email);
    console.log(password);
    if(!email || !password){
        res.status(400);
        throw new Error('Please add fields');
    }
    else{
        const user = await User.findOne({email});

        if(user && (await bcrypt.compare(password, user.password))){
            res.status(201).json({
                token: generateToken(user._id, user.username),
            })
        }
        else {
            // res.status(400);
            // throw new Error('Invalid credentials');
            res.json({
              message: "Password or email is incorrect"
            })
        }
    }
}

const verifyJWT = async (req, res, next) =>{
    // console.log(req.headers.authorization);
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if(err) return res.json({
                isLoggedIn: false,
                message: "Failed to Authenticate"
            })
            req.user = {};
            const userid = decoded.id;
            // const userFound = await User.findOne({userid})
            const userFound = await User.findById(userid)
            res.json({isLoggedIn: true, username: userFound.username, _id: userFound._id, email:userFound.email});
            next();
        });
    } else {
        res.json({message: 'Incorrect Token Given', isLoggedIn: false})
    }
}

const generateToken = (id, username) => {
    return jwt.sign({id, username}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}

const getInfo = async(req, res) =>{
    const {userid} = req.body;
    const user = await User.findOne({userid})
    res.status(201).json({username: user.username, email: user.email});
    console.log(user);
}

module.exports = {
    registerUser,
    loginUser,
    verifyJWT,
    getInfo
}