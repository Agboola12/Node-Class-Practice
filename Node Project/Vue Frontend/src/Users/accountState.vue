<template>
    <div>
        <userNav/>
        <div class="container jumbotron" style="margin-top:8em; width:50%">
            <div class="card">
                <div class="card-header text-center">
                    <h1>Transaction History</h1>
                </div>
                <div class="card-body">
                    <p>Transfer have been creadited #50.00 from your Mr Jamiu at 2021-34-01  10:44:56 </p>
                </div>


            </div>
        </div>

    </div>
    
</template>
<script>
import userNav from '../Users/userNav.vue';
export default {
  components: { userNav },
    name: "accountState"
}
</script>

