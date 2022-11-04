<template>
 
  <div>
    <div class="q-pa-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="bg-orange text-white shadow-2"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="provaider" label="Proveedores" />
          <q-tab name="createProvaider" label="Crear Proveedor" />
          <q-tab name="movies" label="Movies" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="provaider">
           
            <tableProvaider />
          </q-tab-panel>

          <q-tab-panel name="createProvaider">
            
             <provaiderAdd />
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>

</template>

<script>
import { ref } from "vue";
import provaiderAdd from "src/components/products/provaiderAdd.vue";
import tableProvaider from "src/components/products/tableProvaider.vue";
export default {
  components: {
    provaiderAdd,
    tableProvaider,
  },
  setup() {
    return {
      tab: ref("provaider"),
    };
  },
};
</script>
