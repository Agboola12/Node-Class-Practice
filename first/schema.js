require('dotenv').config();
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
const URI = process.env.URI;
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('connected', ()=>console.log("CONNECTED TO DATABASE"));
db.on('error', ()=>console.log("NOT CONNECTED "));

const userSchema = new mongoose.Schema(
    {
      name: {type: String, required: true },
      username: {type: String, required: true },
      email: {type: String, required: true, unique: true},
      mobile: {type: String, required: true },
      password: {type: String, required: true}
    });

    userSchema.pre('save', async function(next){
          let {password} = this;
          const salt = await bcrypt.genSalt(10);
          this.password = await bcrypt.hash(password, salt);
         next();
         const validpassword = await bcrypt.compare(supplied, hashed)
        });


        const todoSchema = new mongoose.Schema(
          {
            todo: {type: String, required: true },
            date: {type: Date, default:Date.now()}
          });
      
         
        
        let Users = mongoose.model('Users', userSchema);
        
        let newUser = mongoose.model('newUser', todoSchema);

        module.exports = {Users, newUser};
      

            



