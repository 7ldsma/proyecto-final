<template>
    <div class="mb-4 px-3 rounded-md py-3 bg-slate-100 flex flex-row justify-between">
        {{ item.title }} 
        <div class="flex flex-row justify-end">
            <button class="bg-[#285875] text-white w-6 rounded-full font-black align-middle" v-if="item.status != 1" @click="changestate(column - 1, item.id)"> &lt </button>
            <button class="bg-[#285875] text-white w-6 rounded-full font-black" v-if="item.status != 3" @click="changestate(column + 1, item.id)"> > </button>
            <button class="bg-[#285875] text-white w-6 rounded-full font-bold" @click="remove(item.id)">X</button>
            <button @click="editTask()">Edit</button> 
            <div  v-if="display">
                <input v-model="newTitle" type="text">
                <button @click="updateTitle(item)">Update</button>
            </div>
        </div>        
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

</style>