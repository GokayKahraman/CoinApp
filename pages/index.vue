<template>
  <div>
    {{ param }}
  </div>
</template>

<script>
const axios = require("axios")
export default {
  data() {
    return {
      param: null,
    }
  },
    mounted: function() {
    axios.get("/api/echo/hello-world")
      .then(response => this.param = response.data)
    },
  
} 
</script>

<style>

</style>
