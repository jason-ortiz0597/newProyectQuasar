import { defineStore } from "pinia";
import { onMounted } from "vue";
import { api } from "src/boot/axios";

export const useProvaiderStore = defineStore("provaider", {
    state: () => ({
        provaiders: [],
        message: "",
        auxiliar: {},
    }),
    // getters: {
    //     getProvaider: (state) => state.provaider,
    // },
    actions: {
        async cargando () {
          try {
            const { data } = await api.get("provaider/list");
            console.log(data);
            this.provaiders = data.provaider;
           
           
            this.message = data.message;
         
          
          } catch (error) {
            console.log(error);

          }
            
        }
    },
});

