
Conversación abierta. 1 mensaje sin leer.

Ir al contenido
Uso de Gmail con lectores de pantalla

2 de 4
template de articulos v2
Recibidos

Jaime Wilson Vallejos Fernandez
8:10 (hace 6 minutos)
para mí

<template>
  <div class="row q-col-gutter-lg q-pa-md">
    <div class="col-12">
      <q-card class="row bg-grey-2 text-black col-md-12">
        <q-card-section class="col-12">
          <div class="text-h6">Nuevo Artículo</div>
        </q-card-section>

        <q-card-section class="bg-amber-1 col-12">
          <div class="row q-col-gutter-xl">
            <div class="col-6">
              <q-input
                outlined
                bottom-slots
                v-model="name"
                label="Nombre"
                maxlength="12"
                :dense="dense"
                bg-color="white"
                class="q-pa-none q-ma-none"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="fa-solid fa-bottle-water" />
                </template>
                <template v-slot:after>
                  <q-btn round icon="add" color="green-14" />
                </template>
              </q-input>
            </div>

            <div class="col-3">
              <q-input
                outlined
                bottom-slots
                v-model="name"
                label="Medida"
                maxlength="12"
                :dense="dense"
                bg-color="white"
                class="q-pa-none q-ma-none"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="trending_up" />
                </template>
              </q-input>
            </div>

            <div class="col-3">
              <q-select
                v-model="myValue"
                filled
                :options="options"
                label="Und. medida"
                bg-color="amber-3"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="balance" />
                </template>
                <template v-slot:after>
                  <q-btn round icon="add" color="green-14" />
                </template>
              </q-select>
            </div>
          </div>
        </q-card-section>

        <!-- separador ******************************************************************************************************************** -->

        <q-card-section class="bg-grey-2 col-12">
          <div class="row q-col-gutter-xl">
            <div class="col-4">
              <q-select
                v-model="myValue"
                filled
                :options="options"
                label="Marca"
                bg-color="amber-3"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="fa-regular fa-registered" />
                </template>
                <template v-slot:after>
                  <q-btn round icon="add" color="green-14" />
                </template>
              </q-select>
            </div>
            <div class="col-4">
              <q-select
                v-model="myValue"
                filled
                :options="options"
                label="Tipo de producto"
                bg-color="grey-4"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="checklist" />
                </template>
                <template v-slot:after>
                  <q-btn round icon="add" color="green-14" />
                </template>
              </q-select>
            </div>
            <div class="col-4">
              <q-select
                v-model="myValue"
                filled
                :options="options"
                label="Proveedor"
                bg-color="grey-4"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="local_shipping" />
                </template>
                <template v-slot:after>
                  <q-btn round icon="add" color="green-14" />
                </template>
              </q-select>
            </div>
          </div>
        </q-card-section>
        <!-- separador ******************************************************************************************************************** -->

        <q-card-section class="bg-grey-2 col-12">
          <div class="text-subtitle1 text-grey-7">
            Unidades de almacenamiento
          </div>

          <div class="row q-col-gutter-xl">
            <div class="col-4">
              <q-select
                v-model="myValue"
                filled
                :options="options"
                label="Unidad Empaque Básico"
                bg-color="amber-3"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="looks_one" />
                </template>
                <template v-slot:after>
                  <q-btn round icon="add" color="green-14" />
                </template>
              </q-select>
            </div>
            <div class="col-4">
              <q-select
                v-model="myValue"
                filled
                :options="options"
                label="Empaques Relacionados"
                bg-color="grey-4"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="inventory_2" />
                </template>
                <template v-slot:after>
                  <q-btn round icon="add" color="green-14" />
                </template>
              </q-select>
            </div>
          </div>
        </q-card-section>
        <!-- separador ******************************************************************************************************************** -->

        <q-card-section class="bg-amber-1 col-12">
          <div class="text-subtitle1 text-grey-7">Control de Stocks</div>

          <div class="row q-col-gutter-lg">
            <div class="col-3">
              <q-input
                outlined
                bottom-slots
                v-model="name"
                label="Stock Mínimo"
                maxlength="12"
                :dense="dense"
                bg-color="white"
                class="q-pa-none q-ma-none"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="vertical_align_bottom" />
                </template>
              </q-input>
            </div>

            <div class="col-3">
              <q-input
                outlined
                bottom-slots
                v-model="name"
                label="Stock Máximo"
                maxlength="12"
                :dense="dense"
                bg-color="white"
                class="q-pa-none q-ma-none"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="vertical_align_top" />
                </template>
              </q-input>
            </div>

            <div class="col-3">
              <q-select
                v-model="myValue"
                filled
                :options="options"
                label="Stock en empaque"
                bg-color="amber-3"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="inventory_2" />
                </template>
              </q-select>
            </div>

            <div class="col-3">
              <q-input
                outlined
                bottom-slots
                v-model="name"
                label="Frecuencia pedido"
                maxlength="12"
                :dense="dense"
                bg-color="white"
                class="q-pa-none q-ma-none"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="hourglass_bottom" />
                </template>
              </q-input>
            </div>
          </div>
        </q-card-section>
        <!-- separador ******************************************************************************************************************** -->

        <q-card-section class="bg-amber-1 col-12">
          <div class="text-subtitle1 text-grey-7">Ubicación en almacen(s)</div>

          <div class="row q-col-gutter-lg">
            <div class="col-3">
              <q-select
                v-model="myValue"
                filled
                :options="options"
                label="Almacen"
                bg-color="amber-3"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="store" />
                </template>
              </q-select>
            </div>

            <div class="col-3">
              <q-select
                v-model="myValue"
                filled
                :options="options"
                label="Bloque"
                bg-color="amber-3"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="tab_unselected" />
                </template>
              </q-select>
            </div>

            <div class="col-3">
              <q-select
                v-model="myValue"
                filled
                :options="options"
                label="Columna"
                bg-color="amber-3"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="view_week" />
                </template>
              </q-select>
            </div>

            <div class="col-3">
              <q-select
                v-model="myValue"
                filled
                :options="options"
                label="Fila"
                bg-color="amber-3"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="text !== ''"
                    name="close"
                    @click="text = ''"
                    class="cursor-pointer"
                  />
                  <q-icon name="table_rows" />
                </template>
                <template v-slot:after>
                  <q-btn round icon="add" color="green-14" />
                </template>
              </q-select>
            </div>
          </div>
        </q-card-section>
        <!-- separador ******************************************************************************************************************** -->

        <q-separator dark size="2px" color="grey-14" />

        <q-card-actions>
          <q-btn flat @click="funcion">Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const text = ref("");
    const model = ref("");

    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      model: ref(null),
      options: ["Gramos", "Mililitros", "Kilos", "Litros"],
      text,
    };
  },
};
</script>

