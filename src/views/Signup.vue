<template>
    <div class="h-full px-8 flex justify-center content-center">
        <div class="max-w-lg">
            <form class="flex-col" @submit.prevent="register">
                <input class="w-full mt-5 px-8 py-6 border-b-2" type="text" v-model="email" placeholder="Email">
                <input class="w-full my-5 px-8 py-6 border-b-2" type="text" v-model="password" placeholder="Password">
                <button class="w-full px-8 py-6 rounded-xl bg-[#285875] text-white" type="submit">Sign-Up</button>
            </form>
        </div>
    </div>
</template>

<script>
//import SignUp from '../components/Signup.vue'
import {mapStores} from 'pinia'
import userStore from '../stores/user.js'

export default {


    data () {
        return {
            email: null,
            password:null,
        }
    },

    computed:{
    ...mapStores(userStore)
    },

    methods: {
        register (){
            this.userStore.signUp(this.email, this.password)
            this.$router.push("/")
        },
    }
}

</script>
