// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("tasks", {
    state() {
        return {
            tasks:null,
        };
    },

    getters: {
        pendingTasks() {},
        ongoingTasks() {},
        doneTasks() {},
    },
    


    actions: {
        async fetchTasks() {
            const { data: tasks } = await supabase
                .from("tasks")
                .select("*")
                .order("id", { ascending: false });
            this.tasks = tasks;
        },

        async createTasks(user_id, task, status) {
            const { error } = await supabase
              .from('tasks')
              .insert({ user_id: user_id, title: task , status: status})
              this.fetchTasks()
            },
        async updateTasks(status, taskid) {
            const { error } = await supabase
              .from('tasks')
              .update({ status: status })
              .eq('id', taskid)
              this.fetchTasks()
            },
        async deleteTasks(taskid) {
            const { error } = await supabase
              .from('tasks')
              .delete()
              .eq('id', taskid)
              this.fetchTasks()
            },
    },
});