require('dotenv').config();
const express = require('express');
var bcrypt = require('bcrypt');
const{ Users, newUser} = require('../schema');
const app = express();

app.use(express.urlencoded({extended:true}));

// registering
const registerUser = (req, res)=>{
        let { name, username, email, mobile, password } = req.body;
        Users.create({ name, username, email, mobile, password }, (err, message)=>{
            if(err){
                // let error = Object.values(err.errors).map(val=>val.message);
                console.log(err);
                return res.redirect("/");
               
            } else {
                console.log(message);
                res.redirect("/login");
            }
        })
}

// login
const loginUser = (req, res)=>{
    let {username, password} = req.body;
    Users.findOne({username}, async (err, message)=>{
        console.log(username)
        if (err){
            let error = Object.values(err.errors).map(val=>val.message);
            console.log(username)
            console.log(err)
        } else{
            const validpassword = await bcrypt.compare(password, message.password);
            console.log(validpassword);
            if(validpassword){
                res.redirect('/addTodo');
            }else{
                res.redirect('/login')
            }
        }

    })
} 
 
// new todo from inside
const newTodo  = (req, res)=>{
    let { todo, date } = req.body;
    newUser.create({ todo, date }, (err, message)=>{
        if(err){
            let error = Object.values(err.errors).map(val=>val.message);
            console.log(error);
            return res.redirect("/addTodo");
           
        } else {
            console.log(message);
            res.redirect("/todo");
        }
    })
}

module.exports = {registerUser, loginUser, newTodo};


