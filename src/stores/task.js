// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("tasks", {
    state() {
        return {
            tasks: [],
        };
    },

    getters: {
        pendingTasks() {
            return this.tasks.filter((task) =>
                task.status === 1
            );
        },

        ongoingTasks() {
            return this.tasks.filter((task) =>
                task.status === 2
            );
        },

        doneTasks() {
            return this.tasks.filter((task) =>
                task.status === 3
            );
        },
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
                .insert({ user_id: user_id, title: task, status: status })
            this.fetchTasks()
        },
        async updateStatus(status, taskid) {
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
        async updateTask(title, taskid) {
            const { error } = await supabase
                .from('tasks')
                .update({ title: title })
                .eq('id', taskid)
            this.fetchTasks()
        },
    },
});