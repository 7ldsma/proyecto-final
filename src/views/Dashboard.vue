<template>

<div>
    <div>
            <input type="text" v-model="title" placeholder="Add new task" width="50px">
            <button @click="addtolist()" class="addbutton"> Add task</button>
        </div>
        <div class="main">
    
<div v-for=" (item, index ) in tasksStore.tasks">
    <div v-if="tasksStore.tasks[index].status==1" class="todo">
        {{ item.title }} <button @click="changestate(item.id)"> next</button>
        <button @click="remove(item.id)">Remove</button>
    </div>
    <div v-if="tasksStore.tasks[index].status==2" class="process">
        {{ item.title }} <button @click="changestate1(item.id)"> next</button>  <button @click="changestate2(item.id)">go back</button>
        <button @click="remove(item.id)">Remove</button>
    </div>
    <div v-if="tasksStore.tasks[index].status==3" class="done">
        {{ item.title }} <button @click="changestate3(item.id)">go back</button>
        <button @click="remove(item.id)">Remove</button>
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
.todo{
    background-color: brown;
}
.process {
    flex-direction: column;
    background-color: aqua;

}

.done {
    flex-direction: column;
    background-color: green;
}
</style>