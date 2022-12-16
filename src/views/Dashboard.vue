<template>

      
    <div>
        <div>
            To do
        </div>
        <div>
            Ongoing
        </div>
        <div>
            Done
        </div>
    </div>  

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

    }
}


</script>