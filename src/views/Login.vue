<template>

    <div class="h-full px-8 flex justify-center content-center">
        <div class="max-w-lg">
            <form class="flex-col" @submit.prevent="Login">
                <input class="w-full mt-5 px-8 py-6 border-b-2" type="text" v-model="username" placeholder="Username">
                <input class="w-full my-5 px-8 py-6 border-b-2" type="text" v-model="password" placeholder="Password">
                <button class="w-full px-8 py-6 rounded-xl bg-[#285875] text-white" type="submit">Log-in</button>
            </form>
        </div>
    </div>
    <RouterView/>
</template>   

<script>
import {mapStores} from 'pinia'
import userStore from '../stores/user.js'

export default {
    components : {

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

<style></style>