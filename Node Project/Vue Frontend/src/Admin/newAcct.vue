<template>
    <div>
        <admin-nav/>
            <div class="card bg-dark mx-auto" style="color: white ;margin-top:10em; width:80%">
                <div class="card-block shadow-lg  m-4" id="print">
                        <h2><center><b>New Account Forum</b></center></h2>  <br/>                           
                <div class="col-md-12">
                    <table class="table table-hover w-100" style="color:white;font-size: 18px" id="show">
                    <tbody >
                    <tr>
                        <td>Name</td>
                        <td><input type="text" class="form-control" /> </td>
                        <td>CNIC</td>
                        <td><input type="text" class="form-control" /></td>
                    </tr>
                    <tr>   
                        <td>Account Number</td>
                        <td><input type="text" class="form-control" /> </td>
                        <td>Account Type</td>
                        <td><input type="text" class="form-control" /></td>
                    </tr>
                    <tr>        
                        <td>City</td>
                        <td><input type="text" class="form-control" /> </td>
                        <td>Address</td>
                        <td><input type="text" class="form-control" /></td>
                    </tr> 
                    <tr>   
                        <td>Email</td>
                        <td><input type="text" class="form-control" /> </td>
                        <td>Password</td>
                        <td><input type="text" class="form-control" /></td>
                    </tr>
                    <tr>
                        <td> Deposit</td>
                        <td><input type="text" class="form-control" /> </td>
                        <td> Source of income</td>
                        <td><input type="text" class="form-control" /></td>
                    </tr>
                    <tr>
                        <td>Contact Number</td>
                        <td><input type="text" class="form-control" /> </td>
                        <td>Branch</td>
                        <td><input type="text" class="form-control" /></td>   
                    </tr>
                    <tr >
                    </tr>
                </tbody>
                </table>
                <center class="p-3"> 
                    <button class="btn btn-success">Save</button>
                    <button class="btn btn-default ml-2">Reset</button>
                </center>
              </div>
               </div>
            </div>

    </div>
    
</template>
<script>
import adminNav from '../Admin/adminNav.vue';
export default {
  components: { adminNav },
    name: "newAcct"
}
</script>

