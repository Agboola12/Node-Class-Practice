require('dotenv').config();
const express = require('express');
const Users = require('./schema');
const {registerUser, loginUser, newTodo} = require('./todoController/user');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'Todos')

app.use(express.urlencoded({extended:true}));

app.post("/formSubmit", registerUser);

app.get('/', (req, res)=>{
    res.render('register')
});

app.post('/signIn', loginUser);

app.get('/login', (req, res)=>{
    res.render('login')
});

app.get('/todo', (req, res)=>{
    res.render('todo')
});

app.post('/todos', newTodo );

app.get('/addTodo', (req, res)=>{
    res.render('addTodo')
});

app.get('*', (request, response)=>{
    response.send("alaye japa olodo ni e")
});

app.listen('5000', ()=>{
    console.log("app started");
})



