<template>
<q-table title="Proveedores" :separator="separator" :rows="provaiderStore.provaiders" :columns="columns"
                         no-data-label="No existen datos para mostrar" row-key="id"
                        :filter="filter">
                        <template v-slot:top-right>
                            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                                <template v-slot:append>
                                    <q-icon name="search" />
                                </template>
                            </q-input>
                            <!-- BOTON PARA AGREGAR NUEVO USUARIO  -->
                            <!-- <q-btn icon="add" color="green-14" to="add-product" class="q-ml-lg" /> -->
                        </template>
                        <template v-slot:body-cell-actions="props">
                            <q-td :props="props" class="q-ma-none">
                                
                                <q-btn icon="border_color" color="primary" flat round @click="myeditProv(props.row)" />
                                <q-btn icon="delete_sweep" color="red" flat round @click="mydeleteProv(props.row)" />
                            </q-td>
                        </template>

                        <!--  <template v-slot:body-cell-image="props">
                <q-td :props="props" class="q-ma-none">
                    <q-img :src="props.row.image.secure_url" style="width: 100px; height: 100px;" />

                </q-td>
            </template> -->

                    </q-table>

    
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
        name: "address",
        label: "Direccion",
        align: "left",
        sortable: true,
        field: (row) => row.address,
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

        onMounted(() => {
            provaiderStore.cargando();
        });

        return {
            provaiderStore,
            columns,
            filter,
            separator,

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


        };
    },
};



</script>