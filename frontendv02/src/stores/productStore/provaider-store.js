import { defineStore } from "pinia";
import { onMounted } from "vue";
import { api } from "src/boot/axios";

export const useProvaiderStore = defineStore("provaider", {
    state: () => ({
        provaiders: [],
    }),
    // getters: {
    //     getProvaider: (state) => state.provaider,
    // },
    actions: {
        async onMounted () {
           
        }
    },
});

