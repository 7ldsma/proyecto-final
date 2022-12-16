<template>

  <div class="p-8">
    <app-header/>
  </div>

  <RouterView/>
</template>

<script>

import AppHeader from "./components/AppHeader.vue"

export default{
  components : {
        AppHeader
    },
    
  // methods: {

  //   logout () {
  //     localStorage.clear();
  //     this.$router.push('/')
  //   }

  // }
}

</script>