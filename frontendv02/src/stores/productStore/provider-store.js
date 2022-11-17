import { defineStore } from "pinia";
import { onMounted } from "vue";
import { api } from "src/boot/axios";

export const useProviderStore = defineStore("provider", {
    state: () => ({
        providers: [],
        message: "",
        auxiliar: {},
    }),
    // getters: {
    //     getProvaider: (state) => state.provaider,
    // },
    actions: {

        async cargando () {

          try {
            const { data } = await api.get("provider/list");
            console.log(data);
            this.providers = data.provider;
            this.message = data.message;
      
      
          } catch (error) {
            if (error.response) {
            
               console.log(error.response.data);
              
              // console.log(error.response.status);

            } else if (error.request) {
              
              console.log(error.request);
            } else {
            
              console.log('Error', error.message);
            }
          
          
          }
            
        },

        async deleteProvider (id) {
          try {
            const { data } = await api.delete(`provider/delete/${id}`);

            console.log(data);
          
          
            this.providers = this.providers.filter((item) => item.id !== id);
            
          } catch (error) {
            if (error.response) {
            
              console.log(error.response.data);
             
             // console.log(error.response.status);

           } else if (error.request) {
             
             console.log(error.request);
           } else {
           
             console.log('Error', error.message);
           }
          }
        }


    },
});

