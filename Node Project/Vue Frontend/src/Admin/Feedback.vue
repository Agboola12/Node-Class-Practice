<template>
    <div>
       <adminNav/>
       
        <div class="card bg-dark mx-auto" style="color: white ;margin-top:10em; width:70%">
            <div class="card-block shadow-lg p-4 m-4" id="print">
                        <h2><center><b>Feedback from Account Holder </b></center></h2>  <br/>                           
            <div class="col-md-12">
                <table class="table table-hover w-100" style="color:white;font-size: 18px" id="show">
                        <thead>
                <tr>
                    <th>From</th>
                    <th>Account No</th>
                    <th>Contact</th>
                    <th>Message </th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>3125643784</td>
                        <td>08070684264</td>
                        <td>I have a issue with my transfer</td>
                         <td><router-link to="/chat" class="btn btn-success">Reply</router-link></td>
                        <td><button class="btn btn-danger">Delete</button></td>
                    </tr>
                     <tr>
                        <td>Tope Samuel</td>
                        <td>3125643784</td>
                        <td>08070684264</td>
                        <td>I need help</td>
                        <td><router-link to="/chat" class="btn btn-success">Reply</router-link></td>
                        <td><button class="btn btn-danger">Delete</button></td>
                    </tr>
                     <tr>
                        <td>Agnoola Elijah</td>
                        <td>3125643784</td>
                        <td>08070684264</td>
                        <td>My login</td>
                         <td><router-link to="/chat" class="btn btn-success">Reply</router-link></td>
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
import adminNav from "../Admin/adminNav.vue";
export default {
  components: { adminNav },
    name: "Feedback", 
    
}
</script>

