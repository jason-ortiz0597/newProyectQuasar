import { defineStore } from "pinia";
import { onMounted } from "vue";
import { api } from "src/boot/axios";

export const useProvaiderStore = defineStore("provaider", {
    state: () => ({
        provaiders: [],
        message: "",
        imageProvaider: [],
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
            
        },

        async deleteProvaider (id) {
          try {
            const { data } = await api.delete(`provaider/delete/${id}`);
            console.log(data);
            this.message = data.message;
            this.cargando();
          } catch (error) {
            console.log(error);
          }
        },

        async viewProvaider (id) {
          try {
             const data = this.provaiders.find((provaider) => provaider._id === id);
             this.imageProvaider = data;
          } catch (error) {
            console.log(error);
          }
        }




    },
});

