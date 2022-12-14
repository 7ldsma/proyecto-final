<template>

  <div class="p-8">
    <app-header :user="user"/>
  </div>

  <RouterView/>
</template>

<script>

import AppHeader from "./components/AppHeader.vue"

export default{
  components : {
        AppHeader
    },
}

</script>