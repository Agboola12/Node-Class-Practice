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
                    <th>Email</th>
                    <th>Password</th>
                    <th>Account Type</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>cashier@gmail.com</td>
                    <td> cashier</td>
                    <td>cashier</td>
                    <td><button class="btn btn-danger">Delete</button></td>
                </tr>
                <tr>
                   <td>cashier2@gmail.com</td>
                    <td> cashier2</td>
                    <td>cashier</td>
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
import adminNav from '../Admin/adminNav.vue';
export default {
  components: { adminNav },
    name: "allSatff"
}
</script>

