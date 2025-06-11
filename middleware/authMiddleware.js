const express = require("express");
const jwt = require("jsonwebtoken")
require('dotenv').config();


const authMiddleware = ( req, res, next ) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({
            msg: "No token provided"
        })
    }
    const token = authHeader.split(" ")[1];
    const secret = process.env.JWT_SECRET;

    try{
        const decoded = jwt.verify(token, secret )
        console.log(decoded)
        req.user = decoded;
        next();

    }catch(error){
        console.log("message:" , error.message);
        res.status(401).json({
            message: "Invalid token"
        })
    }



}

module.exports = authMiddleware;
