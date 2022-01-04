require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const{ Users} = require('./schema');
const app = express();

app.use(express.urlencoded({extended:true}));

// registering
const registerUser = (req, res)=>{
    let { name, address, work,deposit,accno,acctype, email, mobile, password } = req.body;
    Users.create({ name, address, work,deposit,accno,acctype, email, mobile, password }, (err, message)=>{
        if(err){
            console.log(err);
            return res.redirect("/userSignup");
           
        } else {
            console.log(message);
            res.redirect("/");
        }
    })
}

module.exports = {registerUser};