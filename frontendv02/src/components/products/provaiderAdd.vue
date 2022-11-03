<template>
  <q-page  padding>
    <div class="row q-col-gutter-sm">
      <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div class="row">
            <div class="col-12">
              <q-item>
                <q-input
                  dense
                  outlined
                  class="full-width"
                  v-model="name"
                  type="text"
                  label="Nombre del Proveedor"
                />
              </q-item>
            </div>

            <div class="col-12">
              <q-item>
                <q-input
                  dense
                  outlined
                  class="full-width"
                  v-model="email"
                  type="email"
                  label="Correo del Proovedor"
                />
              </q-item>
            </div>

            <div class="col-12">
              <q-item>
                <q-input
                  dense
                  outlined
                  class="full-width"
                  v-model="address"
                  type="text"
                  label="Direccion del Proveedor"
                />
              </q-item>
            </div>
            <div class="col-12">
              <q-item>
                <q-input
                  dense
                  outlined
                  class="full-width"
                  v-model="city"
                  type="text"
                  label="Ciudad"
                />
              </q-item>
            </div>

              <div class="col-12">
                <q-item>
                 <q-select v-model="model" :options="options" label="Standard" filled />
                </q-item>
              </div>
          </div>
          <div>
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
         
        </q-form>
      </div>
     
    </div>
  </q-page>
 
</template>
<script>
import { ref,onMounted } from "vue";
//import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { useProvaiderStore } from "stores/productStore/provaider-store";
import { api } from "src/boot/axios";


export default {
  name: "provaiderAdd",



  setup() {
  //  const $q = useQuasar();
    const router = useRouter();
    const provaiderStore = useProvaiderStore();

    const name = ref("");
    const email = ref("");
    const address = ref("");
    const city = ref("");
    const typeProvaider = ref("");

    onMounted(() => {
      provaiderStore.cargando();
    });

    return {
      router,
   //   $q,
      provaiderStore,
      name,
      email,
      address,
      city,
      typeProvaider,

     
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

<style scoped></style>
