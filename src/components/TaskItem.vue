<template>
    <div>
        {{ item.title }} 
        <button v-if="item.status != 3" @click="changestate(column + 1, item.id)">Next</button>
        <button v-if="item.status != 1" @click="changestate(column - 1, item.id)">Back</button>
        <button @click="remove(item.id)">Remove</button>
        <button @click="editTask()">Edit</button> 
        <div v-if="display">
            <input v-model="newTitle" type="text">
            <button @click="updateTitle(item)">Update</button>
        </div>
        
        {{ item.status }}
    </div>

</template>

<script>
import { mapStores } from 'pinia'
import userStore from '../stores/user.js'
import tasksStore from '../stores/task.js'

    export default {

        data() {
        return {

            title: "",
            newTitle: "",
            display: false,
            todo: true,
            process: false,
            done: false,
        }
        },

        computed: {
        ...mapStores(userStore, tasksStore),
        },

        props:{
            item : {
                type: Object,
                required: false
            },
            column : {
                type: Number,
                required: false,
            }
        },

        methods: {
            changestate(status, taskid) {
            this.tasksStore.updateStatus(status, taskid)
            this.todo = false
            this.process = true
        },

        remove(task_id) {
            this.tasksStore.deleteTasks(task_id)
        },

        editTask(){
            this.display = true
        },

        updateTitle(item) {
            item.title = this.newTitle,
            this.tasksStore.updateTask(this.newTitle, this.item.id)
            this.display = false     

        }
    }
}

</script>

<style scoped>
h2 {
    font-size: medium;
}

button {
    width: 70px;
    height: 40px;
    background-color: blue;
}


.all {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.todo {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    padding-bottom: 5%;


}

.process {
    display: flex;
    justify-items: center;
    padding-bottom: 5%;


}

.done {
    display: flex;
    justify-items: end;
    padding-bottom: 5%;


}

.in {
    padding-bottom: 10%;
}
@media (min-width:1024px){
.all{
    flex-direction: row;
}
}
</style>