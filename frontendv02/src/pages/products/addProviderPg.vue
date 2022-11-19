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
          <q-tab name="createProvider"  icon="fact_check" label="Crear  Proveedores" />
          
          <q-tab name="info" icon="tips_and_updates" label="Acerca de... " />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="createProvider">
            <providerAdd />
          </q-tab-panel>

          <q-tab-panel name="newItem">
            <addItem />
          </q-tab-panel>

    
          <q-tab-panel name="info">
            <q-card-section class="text-center">
              <q-avatar class="shadow-10">
                <q-icon name="help_outline" />
              </q-avatar>
              <div class="text-subtitle2 q-mt-lg">APP SIIPI</div>
              <div class="text-h6 q-mt-md">Gestion de Proveedores</div>
              <div class="text-h6 q-mt-md">Crear Proveedores</div>
            </q-card-section>
            <q-card-section>
              <div class="text-body2 text-justify">
                Para crear un nuevo proveedor por favor ingrese los datos solicitados en el formulario.
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
import providerAdd from "src/components/items/providers/providerAdd.vue";

export default {
  components: {
    providerAdd,
  },
  setup() {
    return {
      tab: ref("createProvider"),
    };
  },
};
</script>
