const express = require('express');
const upload = require('express-fileupload');
const app = express();
const path = require('path');

var http = require('http');
const fs = require('fs'); 
app.set('view engine', 'ejs');
app.set('views', 'Assignment')

app.use(express.urlencoded({extended:true}));
app.use(upload());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'))

let students= [];

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + 'contact');
// })

app.get("/", (req, res)=>{
    res.render( "index"  );
});

app.post('/freshers', (req, res)=>{
    if (req.files){
        // console.log(req.files)
        var file = req.files.file;
        var filename = file.name;
        let type = file.mimetype;
        let ext = path.extname(filename);
        if(ext == '.html' || ext == '.jpg' || ext == '.jpeg' || ext == '.png'){
            file.mv(`./public/uploads/${filename}`, (err)=>{
              if(err)
              res.send(err);
            })
        let{ name, username, email } = req.body;
        students.push({id:students.length, name, username,email, file:{filename, type, ext} })
        res.redirect("/contact");
    }else{
        res.send('File not supported')
      }
}else {
    res.send('no file selected')
  }

});


app.get("/contact", (req, res)=>{
    res.render( "contact" , {students}  );
});


app.get('/contact/:id', (req, res)=>{
	let {id} = req.params;
	let student = students.find(each=>each.id == id);
	res.render('student', {student});
});



app.get('/about', (req, res)=>{
    res.render('about')
});
app.get('/admin', (req, res)=>{
    res.render('admin')
});
app.get('*', (request, response)=>{
    response.send("alaye japa olodo ni e")
});
app.listen('5000', ()=>{
    console.log("app started");
})



