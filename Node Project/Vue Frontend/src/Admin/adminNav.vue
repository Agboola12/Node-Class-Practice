<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top ">
          <h1 href="" class="navbar-brand p-3">ELIJ </h1>
          <button class="navbar-toggler" data-toggle="collapse" type="button" data-target="#sab">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="sab">    
           <ul class="navbar-nav list-line">               
              <li class="nav-item active list-line-item mr-5 ">
                 <router-link to="/allAcct" href="#" class="nav-link active text-light">Home</router-link>
              </li>
              <li class="nav-item active list-line-item mr-5 ">
                 <router-link to="/allStaff" href="#" class="nav-link active text-light">Account</router-link>
              </li>
              <li class="nav-item active list-line-item mr-5 ">
                 <router-link to="/newAcct" href="#" class="nav-link active text-light">Add New Account</router-link>
              </li>
              <li class="nav-item active list-line-item mr-5 ">
                  <router-link to="/Feedback" href="#" class="nav-link active text-light">Feedback</router-link>
                 
              </li>
            </ul>
            <ul class="navbar-nav list-line ml-auto">
               <li class="nav-item active list-line-item mr-5 ">
                 <a href="#" class="nav-link active text-light"><button class="btn btn-outline-success">Welcome Manager</button></a>
              </li>
                 <li class="nav-item active list-line-item mr-5 ">
                 <router-link to="/" class="nav-link active text-light"><i class="fa fa-logout">logout</i></router-link>
              </li>
            </ul>
      </div>
  </nav>
    </div>
</template>
<script>

export default {
    name: "adminNav",
}
</script>
<style>

</style>
