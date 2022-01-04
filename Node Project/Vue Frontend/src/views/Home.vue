<template>
  <div >
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top ">
          <h1 href="" class="navbar-brand p-3">ELIJ </h1>
        <button class="navbar-toggler" data-toggle="collapse" type="button" data-target="#sab">
          <span class="navbar-toggler-icon"></span>
        </button>
      <!-- <div class="collapse navbar-collapse" id="sab">    </div> -->
  </nav>
  
      <header>
        <div class="container " style="margin-left:65%; margin-top:35vh" >
          <div class="card pb-3" style="width:400px; background-color:#E9ECEF" >
            <div class="card-header bg-dark">
              <h4 class="card-title text-center text-light">Select Your Section</h4>
            </div>
            <div class="card-body" >
              <div class="dropdown">
                <input type="button" class="btn btn-outline-success dropdown-toggle" style="width:100%" value="User Login" data-toggle="dropdown"/> 
                <div class="dropdown-menu" style="width:100%">
                  <div class="card p-3">
                    <input type="text" placeholder=" Enter your Username" class=" form-control  " /><br/>
                    <input type="text" placeholder="Enter your Password" class=" form-control" /> <br/>
                  <center>  <router-link to="/userProfile" type="button" class="btn btn-success" >Login</router-link></center>
                  </div>  
                </div>
              </div><br/>

              <div class="dropdown">
                <input type="button" class="btn btn-outline-success dropdown-toggle" style="width:100%" value="Manager Login" data-toggle="dropdown"/> 
                <div class="dropdown-menu" style="width:100%">
                  <div class="card p-3">
                  <input type="text" placeholder=" Enter your Username" class="form-control" /><br/>
                  <input type="text" placeholder="Enter your Password" class="form-control" /> <br/>
                  <center>  
                    <router-link to="/allAcct" type="button" class="btn btn-success" >Login</router-link></center>
                  </div>
                </div>
              </div>




                        
                        
                    </div>
                </div>
              </div>
      </header>
  </div>
</template>

<script>

export default {
  name: 'Home'
  
}
</script>
<style>
header{
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),url('../assets/images/04.jpg');
  background-size: cover;
  background-attachment: fixed;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  overflow: hidden;
  height: 100vh;
}
</style>