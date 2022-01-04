<template>
  <div >
    <Home/>
    <router-view/>
  </div>
</template>
<script>
import Home from "./views/home"
export default {
  name: "App", 
  components : {Home, }
}
</script>

<style>
</style>
