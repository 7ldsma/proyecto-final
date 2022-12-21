<template>
    <div class="md:m-40 h-full mt-44 px-8 flex justify-center content-center">
        <div class="max-w-lg">
            <form class="flex-col" @submit.prevent="register">
                <input class="w-full mt-5 px-8 py-6 border-b-2" type="text" v-model="name" placeholder="Nombre">
                <input class="w-full mt-5 px-8 py-6 border-b-2" type="email" v-model="email" placeholder="Email">
                <input class="w-full my-5 px-8 py-6 border-b-2" type="password" v-model="password" placeholder="Password">
                <button class="w-full px-8 py-6 rounded-xl bg-[#285875] text-white" @click="validation()" type="submit">Sign-Up</button>
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
            name: "",
            email: null,
            password:null,
            valid: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        }
    },

    computed:{
    ...mapStores(userStore)
    },

    methods: {
        register (){
           
            if (this.valid.test(this.email) && this.password.length>= 7 && this.name.length>1)
            {
                window.alert ("Thanks for signing up! Log-in and start creating your tasks")
                this.userStore.signUp(this.name, this.email, this.password)
                this.$router.push("/")
            }
        },
        validation(){
            if(!this.valid.test(this.email))
            {
                window.alert("Email not valid")
            }
            if(this.password.length<7){
            window.alert("Password has to count with at least 7 digits")
            }
            if(this.name.length<1){
                window.alert("Write a name!!")
            }
    },
}
}
</script>
