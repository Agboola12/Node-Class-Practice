require('dotenv').config();
var bycrpt =  require('bcrypt');
var mongoose = require('mongoose');
const URI = process.env.URI;
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('connected', ()=>console.log("CONNECTED TO DATABASE"));
db.on('error', ()=>console.log("NOT CONNECTED "));

const userSchema = new mongoose.Schema(
    {
      name: {type: String, required: true },
      address: {type: String, required: true },
      work: {type: String, required: true },
      deposit: {type: String, required: true },
      acctno: {type: String, required: true },
      acctype: {type: String, required: true },
      email: {type: String, required: true, unique: true},
      mobile: {type: String, required: true },
      password: {type: String, required: true},     
    });

    userSchema.pre('save', async function(next){
        let {password} = this;
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(password, salt);
       next();
       const validpassword = await bcrypt.compare(supplied, hashed)
      });

      let Users = mongoose.model('Users', userSchema);
    
      module.exports = {Users};