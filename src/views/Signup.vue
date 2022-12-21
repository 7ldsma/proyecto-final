<template>
    <div class="h-full px-8 flex justify-center content-center">
        <div class="max-w-lg">
            <form class="flex-col" @submit.prevent="register">
                <input class="w-full mt-5 px-8 py-6 border-b-2" type="text" v-model="name" placeholder="Nombre">
                <input class="w-full mt-5 px-8 py-6 border-b-2" type="email" v-model="email" placeholder="Email">
                <input class="w-full my-5 px-8 py-6 border-b-2" type="text" v-model="password" placeholder="Password">
                <button class="w-full px-8 py-6 rounded-xl bg-[#285875] text-white" type="submit">Sign-Up</button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapStores} from 'pinia'
import userStore from '../stores/user.js'

export default {


    data () {
        return {
            name: null,
            email: null,
            password:null,
        }
    },

    computed:{
    ...mapStores(userStore)
    },

    methods: {
        register (){
            this.userStore.signUp(this.name, this.email, this.password)
            alert ("Thanks for signing up! Log-in and start creating your tasks")
            this.$router.push("/")
        },
    }
}

</script>
