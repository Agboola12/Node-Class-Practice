const express = require('express')
const app = express();
const {registerUser} = require('./user');
const cors = require('cors');
    app.use(cors
        ({
            origin:'http://localhost:8080',
            // methods: ['PUT', 'GET', 'POST']
        }));
app.use(express.json());
// app.post('/userSignup', registerUser);

app.post('/userSignup', registerUser,  (req, res)=>{
    res.data = req.body;
    console.log(req.body);
});



app.get('*', (request, response)=>{
    response.send("alaye japa olodo ni e")
});

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
    console.log('http://localhost:3100/userSignup');
})