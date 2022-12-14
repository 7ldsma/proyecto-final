<template>
    <app-header :user="user"/>
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
import AppHeader from "../components/AppHeader.vue"

export default {
    components : {
        AppHeader
    },
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