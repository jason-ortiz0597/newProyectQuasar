import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [],
        message: "",
        auxiliar: {},
    }),
    // getters: {
    //     getProvaider: (state) => state.provaider,
    // },
    actions: {

        async cargando () {

          try {
            const { data } = await api.get("product/listProduct");
            console.log(data);
            this.products = data.product;
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
            const { data } = await api.delete(`product/deleteProduct/${id}`);

            console.log(data);
          
          
            this.products = this.products.filter((item) => item.id !== id);
            
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

