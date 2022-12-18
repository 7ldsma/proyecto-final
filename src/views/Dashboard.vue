<template>


    <div class="main">

        <div class="addlist">
            <div v-for=" (item ,index ) in tasksStore.tasks">
                {{item.title}} <button @click="changestate(item.id)"> next</button>
                <button @click="remove(item.id)">Remove</button>
            </div>
            <input type="text" v-model="title" placeholder="Add new task" width="50px">
            <button @click="addtolist()" class="addbutton"> CLICK Me</button>
       
        </div>

       <div>

       </div>
       

       
    </div>

</template>

<script scoped>
import { mapStores } from 'pinia'
import userStore from '../stores/user.js'
import tasksStore from '../stores/task.js'
export default {

    data() {
        return {

            title: "",
            
        }
    },

    computed: {
        ...mapStores(userStore),
        ...mapStores(tasksStore),
    },

    methods: {
        addtolist() {
          this.tasksStore.createTasks(this.userStore.user.id, this.title, 1)
          this.title=""
        },
        changestate(taskid){
            this.tasksStore.updateTasks(2,taskid)
            
        },
        remove( task_id){
            this.tasksStore.deleteTasks(task_id)
            console.log('...')
        }
      
    },
    mounted(){
        this.tasksStore.fetchTasks()
    }
} 


</script>

<style scoped>
h2 {
    font-size: medium;
}

button {
    width: 100px;
    height: 40px;
    background-color: blue;
}

.main {
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-around;
}

.addlist {
    flex-direction: column;
}

.ongoing {
    flex-direction: column;
}

.done {
    flex-direction: column;
}
</style>