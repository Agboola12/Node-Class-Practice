<template>
    <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top ">
          <h1 href="" class="navbar-brand p-3">ELIJAY </h1>
        <button class="navbar-toggler" data-toggle="collapse" type="button" data-target="#sab">
          <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
        <div class="card bg-dark mx-auto" style="color: white ;margin-top:10em; width:80%">
                <div class="card-block shadow-lg  m-4" id="print">
                        <h2><center><b>New Account Forum</b></center></h2>  <br/>                           
                <div class="col-md-12">
                    <table class="table table-hover w-100" style="color:white;font-size: 18px" id="show">
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" v-model="name" class="form-control" /> </td>
                        <td>Contact Number</td>
                        <td><input type="text" v-model="mobile" class="form-control" /> </td>
                    </tr>
                    <tr>   
                        <td>Account Number</td>
                        <td><input type="text" v-model="accno" class="form-control" /> </td>
                        <td>Account Type</td>
                        <td><input type="text" v-model="acctype" class="form-control" /></td>
                    </tr>
                    
                    <tr>   
                        <td>Email</td>
                        <td><input type="text" v-model="email" class="form-control" /> </td>
                        <td>Password</td>
                        <td><input type="text" v-model="password" class="form-control" /></td>
                    </tr>
                    <tr>
                        <td> Deposit</td>
                        <td><input type="text" v-model="deposit" class="form-control" /> </td>
                        <td> Source of income</td>
                        <td><input type="text" v-model="work" class="form-control" /></td>
                    </tr>
                    <tr>        
                        <td>Address</td>
                        <td><input type="text" v-model="address" class="form-control" /></td>
                    </tr> 
                </tbody>
                </table>
                <center class="p-3"> 
                    <!-- <router-link to="/" class="btn btn-success" @click="addUser()">Save</router-link> -->
                     <button class="btn btn-success" v-on:click="addUser()"  >Save</button>
                    <button class="btn btn-default ml-2">Reset</button>
                </center>
              </div>
               </div>
            </div>

    </div>
    
</template>
<script>
import axios from 'axios';
export default {
    name: "userSignup",
     data(){
          return {
        name: '',
        address: "",
        work: "",
        deposit: "",
        accno: "",
        acctype: "",
        password: "", 
        mobile: "",
        email: "",

     }  
    },
    methods:{
        addUser () {
        let {name, email, address, work, deposit, accno, acctype, password, mobile} = this;
            axios.post('http://localhost:3100/userSignup', {name, address, work,email, deposit, accno, acctype,
             password, mobile}).then(res=>console.log(res.data))
        }
    }
}
</script>

