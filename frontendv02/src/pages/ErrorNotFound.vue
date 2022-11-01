<template>
  <q-layout class="bg-image" v-cloak>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card class="bg-transparent no-border no-shadow">
          <div class="row items-center full-width justify-center q-col-gutter-lg">
            <q-icon name="settings" color="bg-grey-2 text-white" size="5rem"></q-icon>
            <q-icon name="warnings" class="q-ml-lg" color="bg-grey-2 text-white" size="5rem"></q-icon>
            <!-- <q-img
              src="~assets/sii-pi-work.svg"
            
              spinner-color="primary"
              spinner-size="82px"
            /> -->
          </div>
          <div class="row full-width">
             <div class="col-lg-12 col-md-12 cl-sm-12 col-xs-12">
              <div>
                <div class="text-h3 text-center text-black">
                  404
                </div>
                <div class="text-h6 text-center text-black">
                  No hay nada aqui...
                 
                </div>
                <div class="text-center">
                  <q-btn
                    label="Volver al inicio"
                    color="primary"
                    to="/"
                  />
                </div>
              </div>
            </div> 
          </div>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ErrorNotFound",
})
</script>


<style>
.bg-image {
  background-image: linear-gradient(135deg, #3ddd21 0%, #e5b2ca 100%);
}

[v-cloak] {
  display: none !important;
}
</style>
