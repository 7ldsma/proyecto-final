<template>
    <header>
        <div class="flex flex-row justify-between">
            <img src="../assets/logo.png" alt="" width="70">
            <div>
                <p v-if="userStore.user">Hello, {{this.userStore.user.email}}</p>
            </div>
            <div>
                <button v-if="userStore.user" @click="logout">Log-out</button>
            </div>
            <img src="../assets/Menuicon.png" alt="" width="50">
        </div>
    </header>
</template>

<script>

import {mapStores} from 'pinia'
import userStore from '../stores/user.js'

    export default {

        computed:{
    ...mapStores(userStore)
    },

    methods: {

        logout (){
            this.userStore.user = null
            this.$router.push('/')
        },

    }

    }
</script>