// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("tasks", {
    state() {
        return {
            tasks: null,
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

        async createTasks(task) {},
        async updateTasks(task) {},
        async deleteTasks(task) {},
    },
});