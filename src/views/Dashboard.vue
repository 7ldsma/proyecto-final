<template>

    <div>
        <div class="in">
            <input type="text" v-model="title" placeholder="Add new task" width="50px">
            <button @click="addtolist(1)" class="addbutton"> Add task</button>
        </div>

        <div class="all">
               
            <div class="bg-stone-300">
                <h2> To do :)</h2>
                <taskItem v-for="(item) in tasksStore.pendingTasks" :item = "item" :column = "1" class="todo"/>

            </div>

            <div class="bg-stone-300  mt-3">
                <h2>On going...</h2>
                <taskItem v-for="(item) in tasksStore.ongoingTasks" :item = "item" :column = "2" class="todo"/>

            </div>

            <div class="bg-stone-300  mt-3">
                <h2>Done!</h2>
                <taskItem v-for="(item) in tasksStore.doneTasks" :item = "item" :column = "3" class="todo"/>

            </div>
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
