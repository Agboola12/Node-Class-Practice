<template>
    <div>
        <userNav/>
            <div class="card bg-dark mx-auto" style="color: white ;margin-top:10em; width:80%">
    <div class="card-block shadow-lg p-4 m-4" id="print">
                <h2><center><b>Your Account Information</b></center></h2>  <br/>                           
    <div class="col-md-12">
           <table class="table table-hover w-100" style="color:white;font-size: 18px" id="show">
                <tbody>
                <tr>
                    <td>Account No</td>
                    <td> 325653784</td>
                </tr>
                <tr>
                   <td>Branch</td>
                    <td> First Bank</td>
                </tr>
                 <tr>
                    <td>Branch code</td>
                    <td> 111012</td>
                </tr>
                <tr>
                   <td>Account Type</td>
                    <td>Saving</td>
                </tr>
                 <tr>
                   <td>Account Created</td>
                    <td>2021-02-23 &nbsp;  10:43:39</td>
                </tr>
                
                </tbody> 
</table>
    </div>
    </div>
 </div>

    </div>
    
</template>
<script>
import userNav from '../Users/userNav.vue';
export default {
  components: { userNav },
    name: "userProfile"
}
</script>

