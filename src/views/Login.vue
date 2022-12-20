<template>

    <div class="h-full px-8 flex justify-center content-center">
        <div class="max-w-lg">
            <form class="flex-col" @submit.prevent="login">
                    <input class="w-full mt-5 px-8 py-6 border-b-2" type="text" v-model="email" placeholder="Email">
                    <input class="w-full my-5 px-8 py-6 border-b-2" type="password" v-model="password" placeholder="Password">
                    <button class="w-full px-8 py-6 rounded-xl bg-[#285875] text-white" type="submit">Log-in</button>
            </form>
            
            ¿Dont have an account?
            <router-link to="/signup">Create one here</router-link>

        </div>
    </div>
    <RouterView/>
</template>   

<script>
import {mapStores} from 'pinia'
import userStore from '../stores/user.js'

export default {

    data () {
        return {
            email:null,
            password:null,
        }
    },

    computed:{
    ...mapStores(userStore)
    },

    methods: {

        async login (){
           await this.userStore.login(this.email, this.password)
            this.$router.push('/dashboard')
        },

        isLoggedin (){
            this.userStore.fetchUser
        }
    }
}

</script>

<style></style>