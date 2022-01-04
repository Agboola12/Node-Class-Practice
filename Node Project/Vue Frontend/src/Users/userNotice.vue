<template>
    <div>
        <userNav/>
        <div class="container jumbotron" style="margin-top:8em; width:50%">
          <h1 class="text-center">Notification from Bank</h1> <br/>
            <div class="card" >
                <div class="card-body " style="background-color:#D6F1DB; " > 
                <input type="text" class="form-control" disabled placeholder="You must update your app before next week runs out" />
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import userNav from '../Users/userNav.vue';
export default {
  components: { userNav },
    name: "userNotice"
}
</script>

// rccgttvc@gmail.com