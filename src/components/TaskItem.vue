<template>
    <div class="mb-4 px-3 rounded-md py-3 bg-slate-100 flex flex-col justify-between">
        <div class="flex flex-row justify-between">
        <div>
            {{ item.title }}
        </div>
        <div class=" space-x-1">
            <button class="bg-[#285875] text-white w-6 rounded-full font-black" v-if="item.status != 1" @click="changestate(column - 1, item.id)"> &lt </button>
            <button class="bg-[#285875] text-white w-6 rounded-full font-black" v-if="item.status != 3" @click="changestate(column + 1, item.id)"> > </button>
            <button class="bg-[#285875] text-white w-6 rounded-full font-bold" @click="remove(item.id)">X</button>
            <button class="bg-[#285875] text-white w-10 font-semibold rounded-md" @click="editTask()">Edit</button>
        </div>
            
        </div>   
        <div  v-if="display" class="mt-2 flex justify-between ">
                <input class="w-3/5 px-3 py-1 border" v-model="newTitle" placeholder="Type here..." type="text">
                <button class="bg-[#285875] text-white w-1/4 font-semibold rounded-md" @click="updateTitle(item)">Update</button>
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
            this.newTitle=""   

        }
    }
}

</script>

<style scoped>

</style>