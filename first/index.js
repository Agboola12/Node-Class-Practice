require('dotenv').config();
const {storage, cloudinary} = require('./uploads');
const express = require('express');
const app = express();
const multer = require('multer');
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const fileUpload = multer({storage});
// cloudinary.uploader.destroy(filename);

let student = {
            name: "Elijah",
            dept: "software",
            school:"SQI"
        }

app.get("/", (req, res)=>{
        res.render('index', {student});
    })

   

app.post('/formSubmit',fileUpload.single('profile'),  (req,res)=>{
    console.log(req.body);
    console.log(req.files);
    console.log(req.file);
    res.send( 'submitted');
})


// npm i cloudinary multer-storage-cloudinary
// const myFunc = (req, res, next)=>{
//     if(req.query.name =='Portugal'){
//         next();
//     }else{
    //         res.send("alaye japa");
    //     }
    // }
    
//     let student = {
//         name: "Elijah",
//         dept: "software",
//         school:"SQI"
//     }
// app.use('/posts', myFunc);
// app.get('/posts/check/:name', (req, res)=>{
//     res.send("check page of post");
// });
// app.get('/posts/talk/:name', (req,res)=>{
//     res.send("check page of post");
// })



// app.get("/", (req, res)=>{
//     res.render('index', {student});
// });
// app.get("/contact/:name", (req, res)=>{
//     let student = [ ]
//     let {name} = req.params;
//     res.render( "contact" , {name, student} );
// });
// app.get('/about', (request, response)=>{
//     response.send("welcome to about page")
// });
app.get('*', (request, response)=>{
    response.send("alaye japa olodo ni e")
});

app.listen('5000', ()=>{
    console.log("Class started");
})