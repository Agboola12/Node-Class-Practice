<template>
  <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top ">
          <h3 href="" class="navbar-brand p-3">Elite</h3>
          <button class="navbar-toggler" data-toggle="collapse" type="button" data-target="#sab">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="sab">    
        <ul class="navbar-nav list-line ml-auto">               
          <li class="nav-item active list-line-item mr-5 ">
            <router-link to="/" href="#" class="nav-link active">Home</router-link> 
          </li>
          <li class="nav-item  list-line-item mr-5 " >
            <router-link to="/about" href="#" class="nav-link">About</router-link> 
          </li>
          <li class="nav-item   list-line-item mr-5" >
            <router-link to="/chat" href="#" class="nav-link" >Chat</router-link> 
          </li>>
          
        </ul>
      </div>
      </nav>
    </div>
</template>

<script>

export default {
  name: 'Home',
  
}
</script>
