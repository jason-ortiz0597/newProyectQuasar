<template>
    <div>
      <div class="q-pa-none">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="bg-orange text-white shadow-2"
            active-color="dark"
            indicator-color="dark"
            align="justify"
            mobile-arrows
          >
          
            <q-tab name="createProduct" icon=" groups_2" label="Crear un Nuevo articulo" />
            <q-tab name="movies" icon="tips_and_updates" label="Acerca de... " />
          </q-tabs>
  
          <q-separator />
  
          <q-tab-panels v-model="tab" animated>
            
  
            <q-tab-panel name="createProduct">
              <addItemVue />
            </q-tab-panel>
  
            <q-tab-panel name="movies">
              <q-card-section class="text-center">
                <q-avatar class="shadow-10">
                  <q-icon name="help_outline" />
                </q-avatar>
                <div class="text-subtitle2 q-mt-lg">APP SIIPI</div>
                <div class="text-h6 q-mt-md">Gestion de Productos</div>
              </q-card-section>
              <q-card-section>
                <div class="text-body2 text-justify">
                  Este modulo permite gestionar los productos de la empresa.
                  pordras crear, editar y eliminar los productos. Como tambien
                  podras ver los proveedores por productos
                </div>
              </q-card-section>
              <q-card-section>
                <div class="text-body2 text-justify">
                  <q-icon name="contact_support" />
                  cualquier duda o sugerencia contactar con el departamento de
                  sistemas.
                </div>
              </q-card-section>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import addItemVue from "src/components/items/products/addItem.vue";
  export default {
    components: {
      addItemVue,
    },
    setup() {
      return {
        tab: ref("createProduct"),
      };
    },
  };
  </script>
  
  <style>
  
  </style>
  