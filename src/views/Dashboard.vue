<template>

    <div class="main">

        <div class="addlist">
            <h2>Add item</h2>
            <input type="text" v-model="elements" placeholder="Add new task" width="50px">
            <button @click="addtolist()" class="addbutton"> CLICK ME</button>
     
        <ul>
            <li v-for="(item, index) in items">{{item}}<button @click="remove(index)">REMOVE</button> <button @click="addtoOngoing(index)"> ONgoing </button>
            </li>

        </ul>
        </div>

        <div class="ongoing">
            <ul>
            <li v-for="(item,index) in ongoingList">{{item}} <button @click="addtoDone(index)"> Done </button> <button @click="remove2(index)">REMOVE</button></li>
        </ul>
        </div>
        
        <div class="done">
          <ul>
            <li v-for="item in doneList"> {{item}}  <button @click="remove3(index)">REMOVE</button></li>
          </ul>
        </div>
    </div>  

</template>

<script scoped>
import {mapStores} from 'pinia'
import userStore from '../stores/user.js'
import{supabase} from "../supabase.js"
export default {
    data () {
        return {
            username:null,
            password:null,
            items: [],
            elements: "",
            ongoingList:[],
            doneList:[],
            user: null,
            
        }
    },

    computed:{
    ...mapStores(userStore)
    },

    methods: {
        addtolist()
        {
            this.items.push(this.elements)
            this.elements=""
            return items
        },
        remove(index){
            this.items.splice(index,1);
            return items
        },
        remove2(index){
            this.ongoingList.splice(index,1);
            return items
        },
        remove3(index){
            this.doneList.splice(index,1);
            return items
        },
        addtoOngoing(index){
           this.ongoingList.push(this.items[index])
        },
        addtoDone(index){
            this.doneList.push(this.ongoingList[index])
        },
       async register(){
        const{user , session , error}= await SupabaseAuthClient.auth.signUp({
            email: '',
                 password: '',
        })
        }
    }
}


</script>

<style scoped>
h2{
    font-size: medium;
}
button{
    width: 100px;
    height: 40px;
    background-color: blue;
}
.main
{
    display:flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-around;
}
.addlist{
    flex-direction: column;
}
.ongoing{
    flex-direction: column;
}
.done{
    flex-direction: column;
}
</style>