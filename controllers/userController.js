import User from "../models/User.js";
import { generateToken } from "../utils/JwtUtil.js";
import bcrypt from 'bcryptjs'

export function demo(req, res) {
    res.json({msg: "api is up"});
}

export async function createUser(req, res) {
    const {name, email, password} = req.body;

    if(!name, !email, !password) {
        return req.status(404).json({msg: "name, email, password are required field"});
    }
    //check if email is unique or not 
    const existingUser = await User.findOne({where: {email: email}});
    if(existingUser) {
        return res.status(409).json({msg: "user already exists"});
    }
    // create the user return the token
    const updatedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({name, email, password: updatedPassword});

    const token = generateToken(email, createdUser.id);

    res.status(201).json({msg: "user created", token});
}

export async function verifyUser(req, res) {
    const {email, password} = req.body;
    if(!email || !password) {
        return res.status(404).json({msg: "email password required"});
    }

    // check user exists
    const existingUser = await User.findOne({email});
    if(!existingUser) {
        return res.status(404).json({msg:"email password required"});
    }
    
    // check password matches
    if(bcrypt.compare(password, existingUser.password)) {
        //password matched return token email & id
        const token = generateToken(email, existingUser.id);
        return res.status(200).json({msg: "user verified", token});
    }
    else {
        return res.status(404).json({msg: "user not found"});
    }
}