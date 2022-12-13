<template>
    Dashboard

    <form @submit.prevent="Login">
        <input type="text" v-model="username">
        <input type="text" v-model="password">
        <button type="submit">Log-in</button>
    </form>
        
    <RouterView/>
</template>

<script>
import {mapStores} from 'pinia'
import userStore from '../stores/user.js'
export default {

    data () {
        return {
            username:null,
            password:null,
        }
    },

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