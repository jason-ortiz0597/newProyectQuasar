<template>
  <q-page  padding>
    <div class="row q-col-gutter-sm justify-center">
      <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-lg q-mt-md">
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
                  label="Correo del Proveedor"
                />
              </q-item>
            </div>

            <div class="col-12">
              <q-item>
                <q-input
                  dense
                  outlined
                  class="full-width"
                  v-model="phone"
                  type="tel"
                  label="Telefono Proveedor"
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

              
          </div>
          <div >
            <q-btn label="agregar" type="submit" color="primary" />
            <q-btn
              label="Cancelar"
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
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { useProvaiderStore } from "stores/productStore/provaider-store";
import { api } from "src/boot/axios";


export default {
  name: "provaiderAdd",

  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const provaiderStore = useProvaiderStore();

    const name = ref("");
    const email = ref("");
    const address = ref("");
    const city = ref("");
    const phone = ref("");



    return {
      router,
      provaiderStore,
      name,
      email,
      address,
      city,
      phone,
      

     
      async onSubmit() {
        try {
          const response = await api.post("provaider/create", {
            name: name.value,
            email: email.value,
            address: address.value,
            city: city.value,
            phone: phone.value,
          });
          $q.notify({
            message: "Proveedor agregado",
            color: "positive",
            position: "top",
          });
          provaiderStore.cargando();
          router.push("/provaider");

         

        } catch (error) {
          console.log(error);
        }
      },

      onReset() {
        name.value = "";
        email.value = "";
        address.value = "";
        city.value = "";
        phone.value = "";
      },
    };
  },
};
</script>

<style scoped></style>
