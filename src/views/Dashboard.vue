<template>
    Dashboard
    <RouterView/>
</template>

<script>
import {mapStores} from 'pinia'
import userStore from '../stores/user.js'
export default {

    computed:{
    ...mapStores(userStore)
},

methods: {
    login (){
        this.userStore.signUp()
    }
}
}


</script>