<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          App Siipi
        </q-toolbar-title>
        
        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">

          <q-btn
						class="q-mr-xs"
						flat
						round
						@click="$q.dark.toggle()"
						:icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
					/>

        </div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        
        <sideBarVue
        v-for="to in sideBars"
        :key="to.title"
        v-bind="to"
        />
      </q-list>
      <!-- <q-img class="absolute-top" src="https://res.cloudinary.com/siibolivia/image/upload/v1666980280/product-imagesSiipi/logo_1_aenzpa.png" style="height: 150px">
				 <div class="absolute-bottom bg-transparent">
					<q-avatar size="56px" class="q-mb-sm">
						<img src="https://res.cloudinary.com/siibolivia/image/upload/v1666980280/product-imagesSiipi/logo_1_aenzpa.png" />
					</q-avatar>
					<div class="text-weight-bold">Razvan Stoenescu</div>
					<div>rstoenescu@info.com</div>
				</div> 
			</q-img> -->
    </q-drawer>

    <q-footer elevated >
      <q-card >
      <q-card-section class="col-12 text-center q-pa-lg">
        <q-btn icon="fab fa-github" flat dense color="grey-8"></q-btn>
        <q-btn icon="fab fa-facebook" flat dense color="grey-8"></q-btn>
        <q-btn icon="fab fa-twitter" flat dense color="grey-8"></q-btn>
        <q-btn icon="fab fa-instagram" flat dense color="grey-8"></q-btn>
        <br />

        <div class="text-body1 q-mt-sm text-grey-8 text-weight-bold">
          © 2022 SIIPI, Inc. All rights reserved.
        </div>
      </q-card-section>
    </q-card>
    </q-footer>

    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

import sideBarVue from 'src/components/sideBar.vue'

const toList = [
{
    title: 'Home',
    caption: 'Bienvenido',
    icon: 'home',
    to: '/'
  },

  {
    title: 'Proveedores',
    caption: 'Gestion de Proveedores',
    icon: 'supervisor_account',
    to: 'provaider'
  },
 
  
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    sideBarVue
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      sideBars: toList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
