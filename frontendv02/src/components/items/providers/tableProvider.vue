<template>
  <div class="q-pa-none">
  <q-table
    title="Proveedores Siipi"
    :dense="$q.screen.lt.md"
    :separator="separator"
    :rows="providerStore.providers"
    :columns="columns"
    no-data-label="No existen datos para mostrar"
    row-key="id"
    :filter="filter"
  >
    
    <template v-slot:top-right>   
        <q-input   filled dense v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input> 
        <q-separator spaced inset vertical dark />
        <q-btn  dense icon="add" color="green-14" to="provider-add" />
    </template>


    <template v-slot:body-cell-actions="props">
      <q-td :props="props" class="q-ma-none">
        <q-btn
          icon="delete"
          color="red"
          flat
          round
          @click="mydeleteProv(props.row)"
        />
      </q-td>
    </template>
  </q-table>
</div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import { useProviderStore } from "src/stores/productStore/provider-store";

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
    name: "email",
    label: "Correo",
    align: "left",
    sortable: true,
    field: (row) => row.email,
  },

  {
    name: "phone",
    label: "telefono",
    align: "left",
    sortable: true,
    field: (row) => row.phone,
  },

  {
    name: "city",
    label: "Ciudad",
    align: "left",
    sortable: true,
    field: (row) => row.city,
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
  name: "tableProvider",
  components: {},
  setup() {
    const providerStore = useProviderStore();
    const filter = ref("");
    const separator = ref("horizontal");
    const $q = useQuasar();

    onMounted(() => {
      providerStore.cargando();
    });

    return {
      providerStore,
      columns,
      filter,
      separator,

      mydeleteProv(row) {
        $q.dialog({
          title: "Eliminar",
          message: "¿Estas seguro de eliminar al Proveedor: " + row.name + "?",
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          await providerStore.deleteProvider(row._id);
          $q.notify({
            message: "Proveedor eliminado",
            color: "positive",
            icon: "check_circle",
          });
          await providerStore.cargando();
        });
      },
    };
  },
};
</script>
