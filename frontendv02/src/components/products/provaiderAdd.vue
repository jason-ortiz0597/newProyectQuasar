<template>
    <div class="row justify-center">
      <div>
        

        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-lg q-mt-md">
  
           
  
          <div class="row justify-center">
            <q-btn label="Guardar" type="submit" color="orange" />
            <q-btn label="Cancelar" type="reset" color="grey-6" class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </div>
  
   
  </template>
  <script>
  // import { ref } from "vue";
  // import { useQuasar } from "quasar";
  // import { useRouter } from "vue-router";
  // import { api } from "src/boot/axios";
  
  export default {
    name: "provaiderAdd",
    
    setup() {

      // const $q = useQuasar();
      // const router = useRouter();
  
      return {
        // router,
        // $q,
       
  
       
  
       
  
        async onSubmit() {
          try {
         
            console.log("onSubmit");
          
          } catch (error) {
            console.log(error);
          }
        },
  
  
  
  
        onReset() {
         console.log("onReset");
        },
  
       
      };
    },
  };
  </script>
  