<template>
    <q-page padding>
      <div class="row justify-center">
        <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5 col-xl-2">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-lg q-mt-md">
            <q-input
              filled
              v-model="name"
              label="Nombre del Producto *"
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
              v-model="price"
              label="Precio del Producto *"
              type="number"
              ><template v-slot:prepend>
                <q-icon name="call" />
              </template>
            </q-input>
  
            <q-file filled use-chips v-model="image" label="Imagen del Producto">
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
  import { useProductStore } from "src/stores/productStore/product-store";
  import { api } from "src/boot/axios";
  
  export default {
    name: "productAdd",
  
    setup() {
      const $q = useQuasar();
      const router = useRouter();
      const productStore = useProductStore();
  
      const name = ref("");
      const price = ref("");
      const image = ref([]);
  
      return {
        router,
        productStore,
        name,
        price,
        image,
  
        async onSubmit() {
          try {
            const formData = new FormData();
            formData.append("name", name.value);
            formData.append("price", price.value);
            formData.append("image", image.value);
            const response = await api.post("product/createProduct", formData);
  
            $q.notify({
              message: "Producto agregado",
              color: "positive",
              position: "top",
            });
            productStore.cargando();
  
            router.push("product");
          } catch (error) {
            $q.notify({
              message: "Error al agregar el Producto",
              color: "negative",
              position: "top",
            });
            console.log(error);
          }
        },
  
        onReset() {
          name.value = "";
          price.value = "";
          image.value = [];
        },
      };
    },
  };
  </script>
  
  <style scoped></style>
  