<template>
    <header>
        <div class="flex flex-row justify-between items-center">
            <img src="../assets/logo.png" alt="" width="70">
            <div>
                <p v-if="userStore.user">Hello, {{this.userStore.user.name}}</p>
            </div>
            <div>
                <button class= "md:px-2 px-8 py-3 rounded-xl bg-[#285875] text-white" v-if="userStore.user" @click="logout">Log-out</button>
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