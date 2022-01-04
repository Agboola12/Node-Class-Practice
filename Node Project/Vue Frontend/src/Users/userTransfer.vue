<template>
    <div>
        <userNav/>
            <div class="container jumbotron" style="margin-top:8em; width:50%">
                        <h1 class="text-center ">Transfer</h1> <br/>
                <div class="card" >
                    <!-- <div class="card-header text-center">
                    </div> -->
                    <div class="card-body " style="background-color:#D6F1DB" >
                       <h2>New Transfer</h2>
                       <input type="text" class="form-control" /> <br/>
                       <button class="btn btn-success">Submit</button>
                </div>
            </div>
        </div>


    </div>
    
</template>
<script>
import userNav from '../Users/userNav.vue';
export default {
  components: { userNav },
    name: "userTransfer"
}
</script>

