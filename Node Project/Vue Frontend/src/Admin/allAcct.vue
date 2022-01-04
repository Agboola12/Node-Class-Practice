<template>
    <div>
        <admin-nav/>





 <div class="card bg-dark mx-auto" style="color: white ;margin-top:10em; width:80%">
    <div class="card-block shadow-lg p-4 m-4" id="print">
                <h2><center><b>All account</b></center></h2>  <br/>                           
    <div class="col-md-12">
           <table class="table table-hover w-100" style="color:white;font-size: 18px" id="show">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Holder Name</th>
                    <th>Account No</th>
                    <th>Branch Name</th>
                    <th>Current Balance</th>
                    <th>Account Type</th>
                    <th>Contact</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>3125643784</td>
                    <td>First Bank</td>
                    <td>$55,000</td>
                    <td>Saving</td>
                    <td>08070684264</td>
                    <td><button class="btn btn-success">View</button></td>
                    <td><button class="btn btn-primary">Send Notice</button></td>
                    <td><button class="btn btn-danger">Delete</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>John Doe</td>
                    <td>0123642784</td>
                    <td>Diamond Bank</td>
                    <td>$9,000</td>
                    <td>Current</td>
                    <td>08070404060</td>
                    <td><button class="btn btn-success">View</button></td>
                    <td><button class="btn btn-primary">Send Notice</button></td>
                    <td><button class="btn btn-danger">Delete</button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>John Doe</td>
                    <td>3325656784</td>
                    <td>Gt Bank</td>
                    <td>$4,000</td>
                    <td>Saving</td>
                    <td>08070684264</td>
                    <td><button class="btn btn-success">View</button></td>
                    <td><button class="btn btn-primary">Send Notice</button></td>
                    <td><button class="btn btn-danger">Delete</button></td>
                </tr>
                
                </tbody> 
</table>
    </div>
    </div>
 </div>



    </div>
    
</template>
<script>
// import axios from 'axios'
import adminNav from '../Admin/adminNav.vue';
export default {
  components: { adminNav },
    name: "allAcct", 
    // data(){
    //     return{
    //     firstname: '',
    //     lastname : '',
    //     email :'',
    //     phone :'',
    //     address :'',
    //     password :''
    //   } 
    // },
    // methods:{
    //     processForm(){
    //         axios.post('http://localhost/class_vue/api/register.php',
    //         {
    //             firstname: this.firstname,
    //             lastname: this.lastname,
    //             email: this.email,
    //             phone: this.phone,
    //             address: this.address,
    //             password: this.password
    //         },
    //         {
    //             headers: {
    //                 "Access-control-Allow-Origin": "*",
    //                 "Content-Type": "application/json"
    //             }
    //         })
    //         .then(result => console.log(result))
    //         .catch(err => console.log(err))
    //     }
    // }
}
</script>

