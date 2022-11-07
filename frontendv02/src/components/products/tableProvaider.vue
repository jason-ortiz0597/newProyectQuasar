<template>
  <q-table
    title="Proveedores Unicos"
    :separator="separator"
    :rows="provaiderStore.provaiders"
    :columns="columns"
    no-data-label="No existen datos para mostrar"
    row-key="id"
    :filter="filter"
  >
    <template v-slot:top-right>
      <q-input
        borderless
        dense
        debounce="300"
        v-model="filter"
        placeholder="Search"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <!-- BOTON PARA AGREGAR NUEVO USUARIO  -->
      <!-- <q-btn icon="add" color="green-14" to="add-product" class="q-ml-lg" /> -->
    </template>
    <template v-slot:body-cell-actions="props">
      <q-td :props="props" class="q-ma-none">
        <!-- <q-btn icon="border_color" color="primary" flat round @click="myeditProv(props.row)" /> -->
        <q-btn
          icon="cameraswitch"
          color="secondary"
          flat
          round
          @click="myview(props.row), (confirm = true)"
        />
        <q-btn
          icon="delete_sweep"
          color="red"
          flat
          round
          @click="mydeleteProv(props.row)"
        />
      
      </q-td>
    </template>

    <!-- <template v-slot:body-cell-image="props">
      <q-td :props="props" class="q-ma-none">
        <q-img
          :src="props.row.image.secure_url"
          style="width: 100px; height: 100px"
        />
      </q-td>
    </template> -->
  </q-table>

  <q-dialog v-model="confirm">
    <q-card class="my-card">
      <q-card-section>
        <h6 class="q-ma-none">
          <q-icon
            name="speaker_notes"
            color="blue-grey-8"
            size="1.3em"
            class="q-mr-xs"
          />
          Detalle del Proveedor
        </h6>
      </q-card-section>
      <div class="col-6">
        <q-img
          :src="provaiderStore.imageProvaider.image.secure_url"
          no-native-menu
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            {{ provaiderStore.imageProvaider.name }}
          </div>
        </q-img>
      </div>
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="email" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Correo del Proveedor</q-item-label>
            <q-item-label caption>{{
              provaiderStore.imageProvaider.email
            }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="location_on" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Direccion del Proveedor</q-item-label>
            <q-item-label caption>{{
              provaiderStore.imageProvaider.address
            }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="location_city" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Ciudad del Proveedor</q-item-label>
            <q-item-label caption>{{
              provaiderStore.imageProvaider.city
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import { useProvaiderStore } from "stores/productStore/provaider-store";

const columns = [
  {
    name: "name",
    required: true,
    label: "Nombre",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },

  {
    name: "phone",
    label: "telefono",
    align: "left",
    sortable: true,
    field: (row) => row.phone,
  },

  {
    name: "actions",
    label: "Acciones",
    align: "left",
    sortable: true,
    field: (row) => row.actions,
  },
];

export default {
  name: "tableProvaider",
  components: {},
  setup() {
    const provaiderStore = useProvaiderStore();
    const filter = ref("");
    const separator = ref("horizontal");
    const $q = useQuasar();
    const confirm = ref(false);

    onMounted(() => {
      provaiderStore.cargando();
    });

    return {
      provaiderStore,
      columns,
      filter,
      separator,
      confirm,

      mydeleteProv(row) {
        $q.dialog({
          title: "Eliminar",
          message: "¿Estas seguro de eliminar este proveedor?",
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          await provaiderStore.deleteProvaider(row._id);
          $q.notify({
            message: "Proveedor eliminado",
            color: "positive",
            icon: "check_circle",
          });
          await provaiderStore.cargando();
        });
      },
      myview(row) {
        provaiderStore.viewProvaider(row._id);
      },
    };
  },
};
</script>
