<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5 col-xl-2">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-lg q-mt-md">
          <q-input
            filled
            v-model="name"
            label="Nombre del del Proveedor *"
            hint="Mínimo 3, Máximo 30 caracteres"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 2) || 'Nombre(s), Mínimo 3 caracteres',
              (val) => val.length < 31 || 'Nombre(s), Máximo 30 caracteres',
            ]"
            ><template v-slot:prepend>
              <q-icon name="manage_accounts" />
            </template>
          </q-input>

          <q-input
            filled
            v-model="email"
            label="Correo del Proveedor *"
            type="email"
           
            ><template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>

          <q-input
            filled
            v-model="phone"
            label="Telefono del Proveedor *"
            type="tel"
           
            ><template v-slot:prepend>
              <q-icon name="call" />
            </template>
          </q-input>

          <q-input
            filled
            v-model="address"
            label="Direccion del Proveedor *" 
            ><template v-slot:prepend>
              <q-icon name="location_on" />
            </template>
          </q-input>

          <q-input
            filled
            v-model="city"
            label="Ciudad del Proveedor *"
            hint="Mínimo 3, Máximo 30 caracteres"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 2) || 'Nombre(s), Mínimo 3 caracteres',
              (val) => val.length < 31 || 'Nombre(s), Máximo 30 caracteres',
            ]"
            ><template v-slot:prepend>
              <q-icon name="apartment" />
            </template>
          </q-input>

          
          <q-file
            filled
            use-chips
            v-model="image"
            label="Imagen del Producto"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>

          <div>
            <q-btn label="Guardar" type="submit" color="orange" />
            <q-btn
              label="Cancelar"
              type="reset"
              color="grey-6"
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
    const image = ref([]);

    return {
      router,
      provaiderStore,
      name,
      email,
      address,
      city,
      phone,
      image,

      async onSubmit() {
        try {
          const formData = new FormData();
          formData.append("name", name.value);
          formData.append("email", email.value);
          formData.append("address", address.value);
          formData.append("city", city.value);
          formData.append("phone", phone.value);
          formData.append("image", image.value);
          await api.post("provaider/create", formData);
          $q.notify({
            message: "Proveedor agregado",
            color: "positive",
            position: "top",
          });
          provaiderStore.cargando();
          onReset();
          // router.push("/provaider");
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
        image.value = [];
      },
    };
  },
};
</script>

<style scoped></style>
