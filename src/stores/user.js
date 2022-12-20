// /store/user.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("user", {
    state() {
        return {
            user: null,
        };
    },

    actions: {
        async fetchUser() {
            const user = await supabase.auth.user();
            this.user = user;
        },
        async login(email, password) {
            const response = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            const data = response.data
            const error = response.error;

            if (error) {
                throw error;
            }
            if (data.user) {
                this.user = data.user;
            }
        },

        async signUp(name, email, password) {
            const response = await supabase.auth.signUp({
                name: name,
                email: email,
                password: password,
            });

            const error = response.error;

            if (error) {
                throw error;
            }

        },


    },
    persist: {
        enabled: true,
        strategies: [{
            key: "user",
            storage: localStorage,
        }, ],
    },
});