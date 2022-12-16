<template>

      
    <div>
        <div>
            
        </div>
        <div>
            
        </div>
        <div>
            
        </div>
    </div>  

</template>

<script>
import {mapStores} from 'pinia'
import userStore from '../stores/user.js'
import NewTask from '../components/NewTask.vue'


export default {

    components : {
        NewTask
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

    }
}


</script>