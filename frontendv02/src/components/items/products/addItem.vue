<template>
  <q-page padding>
    <div>
      <q-card class="bg-grey-2 text-black col-6">
        <q-card-section>
          <div class="text-h6">Nuevo Artículo</div>
        </q-card-section>

        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input
                outlined
                v-model="text"
                label="Outlined"
                class="bg-white"
               
              >
                <template   v-slot:after >
                  <q-btn class="gt-xs" size="18px" flat dense icon="add" />
                  <q-btn class="gt-xs" size="18px" flat dense icon="done" />
                </template>
              </q-input>
            </div>

            <div class="col-12">
              <q-select
                color="grey-3"
                outlined
                label-color="orange"
                v-model="model"
                :options="options"
                label="Label"
                class="bg-white"
              >
                <template v-slot:before>
                  <q-btn class="gt-xs" size="18px" flat dense icon="add" />
                </template>
              </q-select>
            </div>

            <div class="col-4">
              <q-input
                outlined
                v-model="text"
                label="Outlined"
                class="bg-white"
              />
            </div>

            <div class="col-4">
              <q-input
                outlined
                v-model="text"
                label="Outlined"
                class="bg-white"
              />
            </div>
            <div class="col-4">
              <q-input
                outlined
                v-model="text"
                label="Outlined"
                class="bg-white"
              />
            </div>
            <div>
                
              <q-btn-group>
                <q-btn label="First" icon="timeline" />

                <div class="col-4">
                  <q-input v-model="text" type="text" label="Label" />
                </div>

                <q-btn label="Third" icon="update" />
                <q-btn label="Third" icon="update" />
              </q-btn-group>

            </div>

            <!-- <div class="col-12">
              <q-input
                outlined
                v-model="text"
                label="Outlined"
                class="bg-white"
              >
                <template v-slot:after>
                  <q-btn class="gt-xs"  flat dense icon="add" />
                  <q-btn class="gt-xs"  flat dense icon="done" />
                  
                 
                </template>
                <template v-slot:before>
                  <q-btn class="gt-xs" size="18px" flat dense icon="add" />

                </template>
              </q-input>
            </div> -->
          </div>
        </q-card-section>

        <q-separator dark size="10px" />

        <q-card-actions>
          <q-btn flat>Agregar</q-btn>
          <q-btn flat>Cancelar</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <!--newwwww-->
    <!-- <q-page padding>
    <div class="row justify-center">
      <div class="col-xs-10 col-sm-6 col-md-5 col-lg-5 col-xl-2">
        <q-card class="bg-grey-2 text-black col-6">
          <q-card-section>
            <div class="text-h6">Nuevo Artículo</div>
          </q-card-section>

          <q-card-section>
            <div class="row q-col-gutter-md">
              <div class="col-12">
                <q-input
                  outlined
                  v-model="text"
                  label="Outlined"
                  class="bg-white"
                >
                  <template v-slot:after>
                    <q-btn class="gt-xs" size="18px" flat dense icon="add" />
                    <q-btn class="gt-xs" size="18px" flat dense icon="done" />
                  </template>
                </q-input>
              </div>

              <div class="col-12">
                <q-select
                  color="grey-3"
                  outlined
                  label-color="orange"
                  v-model="model"
                  :options="options"
                  label="Label"
                  class="bg-white"
                >
                  <template v-slot:before>
                    <q-btn class="gt-xs" size="18px" flat dense icon="add" />
                  </template>
                </q-select>
              </div>
              <div class="col-4">
                <q-input
                  outlined
                  v-model="text"
                  label="Outlined"
                  class="bg-white"
                />
              </div>
              <div class="col-4">
                <q-input
                  outlined
                  v-model="text"
                  label="Outlined"
                  class="bg-white"
                />
              </div>
              <div class="col-4">
                <q-input
                  outlined
                  v-model="text"
                  label="Outlined"
                  class="bg-white"
                />
              </div>
              
              <q-card-section>
                <div class="text-h6">Unidades Relacionadas</div>
              </q-card-section>
              <div class="col-12">
                <q-input
                  outlined
                  v-model="text"
                  label="Outlined"
                  class="bg-white"
                >
                  <template v-slot:after>
                    <q-btn class="gt-xs" size="18px" flat dense icon="add" />
                    <q-btn class="gt-xs" size="18px" flat dense icon="done" />
                    <q-btn class="gt-xs" size="18px" flat dense icon="close" />
                  </template>
                  <template v-slot:before>
                    <q-btn class="gt-xs" size="18px" flat dense icon="add" />
                    <q-btn class="gt-xs" size="18px" flat dense icon="done" />
                    <q-btn class="gt-xs" size="18px" flat dense icon="close" />
                  </template>
                </q-input>
              </div>
            </div>
          </q-card-section>

          <q-separator dark size="10px" />

          <q-card-actions>
            <q-btn flat>Agregar</q-btn>
            <q-btn flat>Cancelar</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page> -->
  </q-page>
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
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      text,
    };
  },
};
</script>
