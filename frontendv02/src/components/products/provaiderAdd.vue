<template>
  <q-page  padding>
    <div class="row justify-center">
        <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5 col-xl-2">
           
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-lg q-mt-md">
                <q-input filled v-model="name" label="Nombre del Producto *" hint="Mínimo 3, Máximo 30 caracteres"
                    lazy-rules :rules="[
                      (val) =>
                        (val && val.length > 2) || 'Nombre(s), Mínimo 3 caracteres',
                      (val) => val.length < 31 || 'Nombre(s), Máximo 30 caracteres',
                    ]" />

                <q-input filled v-model="shelf" type="text" label="Estante"> <template v-slot:prepend>
                        <q-icon name="scatter_plot" />
                    </template></q-input>

                <q-input filled v-model="hallway" type="text" label="Pasillo"><template v-slot:prepend>
                        <q-icon name="near_me" />
                    </template> </q-input>

                <q-input filled v-model="minStock" type="number" label="Stock Minimo"><template v-slot:prepend>
                        <q-icon name="fa-solid fa-arrow-trend-up" />
                    </template>
                </q-input>
                <q-input filled v-model="maxStock" type="number" label="Stock Maximo"> <template v-slot:prepend>
                        <q-icon name="fa-solid fa-arrow-trend-down" />
                    </template>
                </q-input>
                <q-input filled v-model="dateOfExpiration" type="date" hint="Fecha de Vencimiento" />

                <q-input filled v-model="price" type="number" prefix="Bs" label="Precio" lazy-rules :rules="[
                  (val) => (val !== null && val !== '') || 'Ingrese un precio',
                  (val) => (val > 0 && val < 99999999) || 'Ingrese un precio válido',
                ]">
                    <template v-slot:prepend>
                        <q-icon name="fa-solid fa-money-bill-1-wave" />
                    </template>
                </q-input>

                <q-input filled v-model="dayMargin" type="number" label="Margen de Dias de Vencimiento" />

                <q-select filled v-model="status" label="Estado del Producto *" :options="[
                  { label: 'active', value: 'active' },
                  { label: 'inactive', value: 'inactive' },
                  { label: 'pending', value: 'pending' },
                  { label: 'blocked', value: 'blocked' },
                  { label: 'deleted', value: 'deleted' },
                ]" />

                <q-file label-color="orange" filled use-chips v-model="image" label="Imagen del Producto">
                    <template v-slot:append>
                        <q-icon name="cloud_upload" />
                    </template>
                </q-file>

                <div>
                    <q-btn label="Guardar" type="submit" color="orange" />
                    <q-btn label="Cancelar" type="reset" color="grey-6" class="q-ml-sm" />
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
