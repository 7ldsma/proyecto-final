<template>

    <div>
        <div class="in">
            <input type="text" v-model="title" placeholder="Add new task" width="50px">
            <button @click="addtolist()" class="addbutton"> Add task</button>
        </div>
        <div>

            <div class="all">
               
                <div class="bg-stone-300">
                    <h2> To do :)</h2>
                    <div v-for=" (item, index ) in tasksStore.tasks" class="todo">
                        <div v-if="tasksStore.tasks[index].status == 1">
                            {{ item.title }} <button @click="changestate(item.id)"> next</button>
                            <button @click="remove(item.id)">Remove</button>
                        </div>
                    </div>

                </div>

                <div class="bg-stone-300  mt-3">
                    <h2>On going...</h2>
                    <div v-for=" (item, index ) in tasksStore.tasks" class="process">
                        <div v-if="tasksStore.tasks[index].status == 2">
                            {{ item.title }} <button @click="changestate1(item.id)"> next</button> <button
                                @click="changestate2(item.id)">go back</button>
                            <button @click="remove(item.id)">Remove</button>
                        </div>
                    </div>
                </div>

                <div class="bg-stone-300  mt-3">
                    <h2>Done!</h2>
                    <div v-for=" (item, index ) in tasksStore.tasks" class="done">
                        <div v-if="tasksStore.tasks[index].status == 3">
                            {{ item.title }} <button @click="changestate3(item.id)">go back</button>
                            <button @click="remove(item.id)">Remove</button>
                        </div>
                    </div>

                </div>
            </div>
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
            todo: true,
            process: false,
            done: false,
        }
    },

    computed: {
        ...mapStores(userStore),
        ...mapStores(tasksStore),
    },

    methods: {
        addtolist() {
            this.tasksStore.createTasks(this.userStore.user.id, this.title, 1)
            this.title = ""
        },
        changestate(taskid) {
            this.tasksStore.updateTasks(2, taskid)
            this.todo = false
            this.process = true
        },
        changestate1(taskid) {
            this.tasksStore.updateTasks(3, taskid)
        },
        changestate2(taskid) {
            this.tasksStore.updateTasks(1, taskid)
        },
        changestate3(taskid) {
            this.tasksStore.updateTasks(2, taskid)
        },
        remove(task_id) {
            this.tasksStore.deleteTasks(task_id)
        }

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
