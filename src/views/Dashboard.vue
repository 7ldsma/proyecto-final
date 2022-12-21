<template>

    <div class="md:mx-40 mx-8 my-16 flex flex-row flex-wrap md:justify-center overflow-auto">

        <div class="my-12 flex flex-row md:justify-center justify-start items-start gap-5 snap-x snap-mandatory">
               
            <div class="w-80 p-5 bg-stone-300 rounded-md">
                <h2 class="mb-4 pb-2 border-b font-bold">To do</h2>
                <taskItem v-for="(item) in tasksStore.pendingTasks" :item = "item" :column = "1"/>

            </div>

            <div class="w-80 p-5 bg-stone-300 rounded-md">
                <h2 class="mb-4 pb-2 border-b font-bold align-top">On going</h2>
                <taskItem v-for="(item) in tasksStore.ongoingTasks" :item = "item" :column = "2"/>

            </div>

            <div class="w-80 p-5 bg-stone-300 rounded-md">
                <h2 class="mb-4 pb-2 border-b font-bold">Done</h2>
                <taskItem v-for="(item) in tasksStore.doneTasks" :item = "item" :column = "3"/>

            </div>
        </div>

        <div class="mt-10 ">
            <input class="mx-2 p-4 border-b w-3/5 ring-2 ring-neutral-400" type="text" v-model="title" placeholder="Add new task" width="50px">
            <button class="p-4 bg-[#285875] text-white font-bold rounded-md" @click="addtolist(1)">Add task</button>
        </div>
        
    </div>



</template>

<script>
import { mapStores } from 'pinia'
import userStore from '../stores/user.js'
import tasksStore from '../stores/task.js'
import taskItem from '../components/TaskItem.vue'

export default {
    components :{
        taskItem
    },

    data() {
        return {

            title: "",
            // newTitle: "",
            // display: false,
            todo: true,
            process: false,
            done: false,
        }
    },

    computed: {
        ...mapStores(userStore, tasksStore),
    },

    methods: {
        addtolist(status) {
            this.tasksStore.createTasks(this.userStore.user.id, this.title, status)
            this.title = ""
        },
        
    },
    mounted() {
        this.tasksStore.fetchTasks()
    }
}


</script>

<style>

</style>
